# Generated by Django 2.1.7 on 2019-03-07 00:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0012_ticket_discount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='discount',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='discounts', to='webapp.Discount'),
        ),
    ]
