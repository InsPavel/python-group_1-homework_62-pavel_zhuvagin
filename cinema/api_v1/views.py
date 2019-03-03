from webapp.models import Movie
from webapp.models import Category
from webapp.models import Hall
from rest_framework import viewsets
from api_v1.serializers import MovieSerializer
from api_v1.serializers import CategorySerializer
from api_v1.serializers import HallSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all().order_by('-release_date')
    serializer_class = MovieSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class HallViewSet(viewsets.ModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
