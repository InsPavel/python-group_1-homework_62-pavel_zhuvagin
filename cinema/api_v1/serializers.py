from webapp.models import Movie, Category, Hall, Seat, Show, Ticket
from rest_framework import serializers


class InlineCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:category-detail')

    class Meta:
        model = Category
        fields = ('url', 'id', 'name', 'description', 'is_deleted')


class MovieSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:movie-detail')
    categories = InlineCategorySerializer(many=True)

    class Meta:
        model = Movie
        fields = ('url', 'id', 'name', 'description', 'poster', 'release_date', 'finish_date', 'categories', 'is_deleted')


class HallSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:hall-detail')

    class Meta:
        model = Hall
        fields = ('url', 'id', 'name', 'is_deleted')


class SeatSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:seat-detail')

    class Meta:
        model = Seat
        fields = ('url', 'id', 'hall', 'row', 'seat', 'is_deleted')


class ShowSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:show-detail')
    movie_url = serializers.HyperlinkedRelatedField(view_name='api_v1:movie-detail',  read_only=True, source='movie')
    hall_url = serializers.HyperlinkedRelatedField(view_name='api_v1:hall-detail', source='hall', read_only=True)

    class Meta:
        model = Show
        fields = ('url', 'id', 'movie', 'movie_url', 'hall', 'hall_url', 'start_of_show', 'finish_of_show', 'price', 'is_deleted')


class TicketSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:show-detail')
    show_url = serializers.HyperlinkedRelatedField(view_name='api_v1:show-detail', read_only=True, source='show')
    seat_url = serializers.HyperlinkedRelatedField(view_name='api_v1:seat-detail', read_only=True, source='seat')

    class Meta:
        model = Ticket
        fields = ('url', 'show', 'show_url', 'seat', 'seat_url', 'return_ticket')
