# Generated by Django 3.1.3 on 2020-11-13 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='condidats',
            name='tel',
            field=models.IntegerField(default=0),
        ),
    ]
