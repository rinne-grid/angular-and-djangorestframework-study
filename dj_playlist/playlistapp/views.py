from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import PlayListSerializer
from .models import PlayList

# Create your views here.
@csrf_exempt
def show_play_list(request):
    if request.method == "GET":
        play_list = PlayList.objects.all()
        serializer = PlayListSerializer(play_list, many=True)
        return JsonResponse(serializer.data, safe=False)
