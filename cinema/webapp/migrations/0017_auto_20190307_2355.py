# Generated by Django 2.1.7 on 2019-03-07 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0016_auto_20190307_2354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='discount',
            name='discount',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]