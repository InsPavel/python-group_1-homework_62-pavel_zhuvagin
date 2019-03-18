from webapp.models import Movie, Category, Hall, Seat, Show, Ticket, Discount, Book
from rest_framework import viewsets
from api_v1.serializers import MovieCreateSerializer, MovieDisplaySerializer, CategorySerializer, HallSerializer, SeatSerializer, ShowSerializer, TicketSerializer, DiscountSerializer, BookSerializer, ShowDisplaySerializer


class NoAuthModelViewSet(viewsets.ModelViewSet):
    authentication_classes = []


class MovieViewSet(NoAuthModelViewSet):
    queryset = Movie.objects.all().order_by('-release_date')

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return MovieDisplaySerializer
        else:
            return MovieCreateSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class CategoryViewSet(NoAuthModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class HallViewSet(NoAuthModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class SeatViewSet(NoAuthModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class ShowViewSet(NoAuthModelViewSet):
    queryset = Show.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ShowDisplaySerializer
        else:
            return ShowSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()

    def get_queryset(self):
        queryset = self.queryset
        movie_id = self.request.query_params.get('movie_id', None)
        hall_id = self.request.query_params.get('hall_id', None)
        start_of_show = self.request.query_params.get('start_of_show', None)
        finish_of_show = self.request.query_params.get('finish_of_show', None)

        if movie_id is not None:
            queryset = queryset.filter(movie_id=movie_id)
        if hall_id is not None:
            queryset = queryset.filter(hall_id=hall_id)
        if start_of_show is not None:
            queryset = queryset.filter(start_of_show__gte=start_of_show)
        if finish_of_show is not None:
            queryset = queryset.filter(finish_of_show__lte=finish_of_show)
        return queryset


class TicketViewSet(NoAuthModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class DiscountViewSet(NoAuthModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


class BookViewSet(NoAuthModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer



