# Generated by Django 5.0 on 2024-01-19 08:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hexaBlog', '0004_rename_user_userprofile_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='User',
            new_name='user',
        ),
    ]