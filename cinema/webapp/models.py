from django.db import models


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)


class Movie(models.Model):
    name = models.CharField(max_length=255)
    categories = models.ManyToManyField('Category', related_name='categories', verbose_name='Категория')
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
    row = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()


class Show(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.PROTECT, related_name='movies')
    hall = models.ForeignKey(Hall, on_delete=models.PROTECT, related_name='show_halls')
    start_of_show = models.DateTimeField()
    finish_of_show = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return "%s, %s (%s - %s)" % (self.movie, self.hall,
                                     self.start_of_show.strftime('%d.%m.%Y %H:%M'),
                                     self.finish_of_show.strftime('%d.%m.%Y %H:%M'))
