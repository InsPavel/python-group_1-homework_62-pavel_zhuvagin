# Generated by Django 2.1.7 on 2019-03-02 02:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, max_length=2000, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='movie',
            name='categories',
            field=models.ManyToManyField(related_name='categories', to='webapp.Category', verbose_name='Категории'),
        ),
    ]
