from django.contrib import admin
from webapp.models import Movie
from webapp.models import Category
from webapp.models import Hall

class MovieAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'release_date']
    ordering = ['-release_date']
    search_fields = ['name', 'id']


admin.site.register(Movie, MovieAdmin)
admin.site.register(Category)
admin.site.register(Hall)
