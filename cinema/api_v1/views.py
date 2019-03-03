from webapp.models import Movie
from webapp.models import Category
from rest_framework import viewsets
from api_v1.serializers import MovieSerializer
from api_v1.serializers import CategorySerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all().order_by('-release_date')
    serializer_class = MovieSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
