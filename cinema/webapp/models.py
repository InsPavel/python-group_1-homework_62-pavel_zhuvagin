from django.db import models
import random, string
from django.conf import settings
import uuid


class RegistrationToken(models.Model):
    token = models.UUIDField(default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def is_expired(self):
        delta = now() - self.created_at
        delta_hours = delta.total_seconds() / 3600
        return delta_hours > settings.TOKEN_EXPIRATION_HOURS

    def __str__(self):
        return "%s" % self.token


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)


class Movie(models.Model):
    name = models.CharField(max_length=255)
    categories = models.ManyToManyField('Category', related_name='categories', blank=True)
    description = models.TextField(max_length=2000, null=True, blank=True)
    poster = models.ImageField(upload_to='posters', null=True, blank=True)
    release_date = models.DateField()
    finish_date = models.DateField(null=True, blank=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return self.name


class Hall(models.Model):
    name = models.CharField(max_length=255)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return self.name


class Seat(models.Model):
    hall = models.ForeignKey(Hall, on_delete=models.PROTECT, related_name='halls')
    row = models.CharField(max_length=10)
    seat = models.CharField(max_length=5)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return "Row %s Seat %s" % (self.row, self.seat)


class Show(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.PROTECT, related_name='shows')
    hall = models.ForeignKey(Hall, on_delete=models.PROTECT, related_name='shows')
    start_of_show = models.DateTimeField()
    finish_of_show = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return "%s, %s (%s - %s)" % (self.movie, self.hall,
                                     self.start_of_show.strftime('%d.%m.%Y %H:%M'),
                                     self.finish_of_show.strftime('%d.%m.%Y %H:%M'))


class Discount(models.Model):
    name = models.CharField(max_length=255)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    start_date = models.DateField(null=True, blank=True)
    finish_date = models.DateField(null=True, blank=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return '%s. Discount: %s. (%s - %s)' % (self.name, self.discount, self.start_date, self.finish_date)


class Ticket(models.Model):
    show = models.ForeignKey(Show, on_delete=models.PROTECT, related_name='shows')
    seat = models.ForeignKey(Seat, on_delete=models.PROTECT, related_name='seats')
    discount = models.ForeignKey(Discount, on_delete=models.PROTECT, related_name='discounts', null=True, blank=True)
    return_ticket = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return 'Show: %s. Seat: %s' % (self.show, self.seat)


def generate_code():
    code = ''
    for i in range(0, settings.BOOKING_CODE_LENGTH):
        code += random.choice(string.digits)
    return code


BOOKING_STATUS_CHOICES = [
        ('created', 'Created'),
        ('sold', 'Sold'),
        ('canceled', 'Canceled')
    ]


class Book(models.Model):
    code = models.CharField(max_length=10, unique_for_date='created_at', default=generate_code, editable=False)
    show = models.ForeignKey(Show, on_delete=models.PROTECT, related_name='booking')
    seats = models.ManyToManyField(Seat, related_name='booking')
    status = models.CharField(max_length=20, choices=BOOKING_STATUS_CHOICES, default='created', verbose_name='Статус')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_seats_display(self):
        seats=''
        for seat in self.seats.all():
            seats += 'R%sS%s' % (seat.row, seat.seat)
        return seats

