# Generated by Django 4.2.11 on 2024-05-06 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pretix_eth', '0009_auto_20230627_1210'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='signedmessage',
            name='safe_app_transaction_url',
        ),
        migrations.AlterField(
            model_name='signedmessage',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False),
        ),
    ]
