from webapp.models import Movie
from webapp.models import Category
from webapp.models import Hall
from rest_framework import serializers

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'categories', 'description', 'poster', 'release_date', 'finish_date')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'description')

class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ('name',)
