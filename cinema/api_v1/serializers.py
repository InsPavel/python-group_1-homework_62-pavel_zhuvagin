from webapp.models import Movie, Category, Hall, Seat, Show
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'categories', 'description', 'poster', 'release_date', 'finish_date', 'is_deleted')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'description', 'is_deleted')


class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ('name', 'is_deleted')


class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = ('hall', 'row', 'place', 'is_deleted')


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ('movie', 'hall', 'start_of_show', 'finish_of_show', 'price', 'is_deleted')
