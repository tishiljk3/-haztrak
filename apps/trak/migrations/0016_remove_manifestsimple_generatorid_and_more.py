# Generated by Django 4.0.4 on 2022-04-18 15:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trak', '0015_manifestsimple_generatorid_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manifestsimple',
            name='generatorID',
        ),
        migrations.AddField(
            model_name='manifestsimple',
            name='broker',
            field=models.JSONField(null=True),
        ),
        migrations.AddField(
            model_name='manifestsimple',
            name='designatedFacility',
            field=models.JSONField(default={}),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='manifestsimple',
            name='generator',
            field=models.JSONField(default={}),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='manifestsimple',
            name='waste',
            field=models.JSONField(default={}),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='manifestsimple',
            name='createdDate',
            field=models.DateTimeField(default=datetime.datetime(2022, 4, 18, 11, 46, 18, 868064), null=True),
        ),
    ]
