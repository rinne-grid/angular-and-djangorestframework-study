from django.db import models


class PlayList(models.Model):
    name = models.CharField(max_length=100)
    uri = models.CharField(max_length=256)
    extension = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    

