# Generated by Django 2.1.7 on 2019-03-03 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0004_auto_20190303_1528'),
    ]

    operations = [
        migrations.CreateModel(
            name='Show',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_of_show', models.DateTimeField()),
                ('finish_of_show', models.DateTimeField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('hall', models.ManyToManyField(related_name='show_halls', to='webapp.Hall', verbose_name='Зал')),
                ('movie', models.ManyToManyField(related_name='movies', to='webapp.Movie', verbose_name='Фильм')),
            ],
        ),
    ]
