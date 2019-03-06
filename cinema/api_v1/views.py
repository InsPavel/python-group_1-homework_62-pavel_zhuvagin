from webapp.models import Movie, Category, Hall, Seat, Show, Ticket
from rest_framework import viewsets
from api_v1.serializers import MovieSerializer, CategorySerializer, HallSerializer, SeatSerializer, ShowSerializer, TicketSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all().order_by('-release_date')
    serializer_class = MovieSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class HallViewSet(viewsets.ModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class ShowViewSet(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()
