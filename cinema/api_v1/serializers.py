from rest_framework.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from webapp.models import Movie, Category, Hall, Seat, Show, Ticket, Discount, Book
from rest_framework.authtoken.models import Token


class InlineCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:category-detail')

    class Meta:
        model = Category
        fields = ('url', 'id', 'name', 'description', 'is_deleted')


class MovieCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:movie-detail')

    class Meta:
        model = Movie
        fields = ('url', 'id', 'name', 'description', 'poster', 'release_date', 'finish_date', 'categories', 'is_deleted')


class MovieDisplaySerializer(MovieCreateSerializer):
    categories = InlineCategorySerializer(many=True, read_only=True)


class SeatSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:seat-detail')

    class Meta:
        model = Seat
        fields = ('url', 'id', 'hall', 'row', 'seat', 'is_deleted')


class InlineMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ('id', 'name')


class InlineHallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ('id', 'name')


class HallSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:hall-detail')

    class Meta:
        model = Hall
        fields = ('url', 'id', 'name', 'is_deleted')


class ShowSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:show-detail')
    movie_url = serializers.HyperlinkedRelatedField(view_name='api_v1:movie-detail',  read_only=True, source='movie')
    hall_url = serializers.HyperlinkedRelatedField(view_name='api_v1:hall-detail', source='hall', read_only=True)

    class Meta:
        model = Show
        fields = ('url', 'id', 'movie', 'movie_url', 'hall_url', 'start_of_show', 'finish_of_show', 'price', 'hall', 'is_deleted')


class ShowDisplaySerializer(ShowSerializer):
    hall = InlineHallSerializer(read_only=True)
    movie = InlineMovieSerializer(read_only=True)


class DiscountSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:discount-detail')

    class Meta:
        model = Discount
        fields = ('url', 'id', 'name', 'discount', 'start_date', 'finish_date')


class TicketSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:show-detail')
    show_url = serializers.HyperlinkedRelatedField(view_name='api_v1:show-detail', read_only=True, source='show')
    seat_url = serializers.HyperlinkedRelatedField(view_name='api_v1:seat-detail', read_only=True, source='seat')
    discount_url = serializers.HyperlinkedRelatedField(view_name='api_v1:discount-detail', read_only=True, source='discount')

    class Meta:
        model = Ticket
        fields = ('url', 'id', 'show', 'show_url', 'discount', 'discount_url', 'seat', 'seat_url', 'return_ticket', 'is_deleted')


class BookSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:book-detail')
    show_url = serializers.HyperlinkedRelatedField(view_name='api_v1:show-detail', read_only=True, source='show')

    class Meta:
        model = Book
        fields = ('url', 'id', 'code', 'show', 'show_url', 'get_seats_display', 'status', 'created_at', 'updated_at')


class UserSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:user-detail')
    username = serializers.CharField(read_only=True)
    password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    new_password_confirm = serializers.CharField(write_only=True, required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=False)

    def validate_password(self, value):
        user = self.context['request'].user
        if not authenticate(username=user.username, password=value):
            raise ValidationError('Invalid password for your account')
        return value

    def validate(self, attrs):
        if attrs.get('new_password') != attrs.get('new_password_confirm'):
            raise ValidationError("Passwords do not match")
        return super().validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        validated_data.pop('password')
        new_password = validated_data.pop('new_password')
        validated_data.pop('new_password_confirm')

        instance = super().update(instance, validated_data)

        if new_password:
            instance.set_password(new_password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'first_name', 'last_name', 'email',
                  'password', 'new_password', 'new_password_confirm']


class AuthTokenSerializer(serializers.Serializer):
    token = serializers.CharField(write_only=True)

    def validate_token(self, token):
        try:
            return Token.objects.get(key=token)
        except Token.DoesNotExist:
            raise ValidationError("Invalid credentials")


