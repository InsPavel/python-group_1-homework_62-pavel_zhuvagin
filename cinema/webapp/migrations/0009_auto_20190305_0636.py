# Generated by Django 2.1.7 on 2019-03-05 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0008_auto_20190305_0633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='hall',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='halls', to='webapp.Hall'),
        ),
        migrations.AlterField(
            model_name='show',
            name='hall',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='show_halls', to='webapp.Hall'),
        ),
        migrations.AlterField(
            model_name='show',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='movies', to='webapp.Movie'),
        ),
    ]
