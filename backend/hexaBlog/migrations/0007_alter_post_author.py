# Generated by Django 5.0 on 2024-01-20 21:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hexaBlog', '0006_alter_userprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hexaBlog.userprofile'),
        ),
    ]
