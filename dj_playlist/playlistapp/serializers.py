from rest_framework import serializers
from .models import PlayList


class PlayListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayList
        fields = ('name', 'uri', 'extension',)
