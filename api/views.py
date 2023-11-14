from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import NoteSerializer
from .models import Note
# Create your views here.


@api_view(['POST'])
def createNote(request):
    data=request.data
    note=Note.objects.create(
        body=data['body']
    )
    serializer=NoteSerializer(note,many=False)
    return Response(serializer.data)
    

@api_view(['GET'])
def getNotes(request):
    notes=Note.objects.all().order_by('-updated')
    serializer=NoteSerializer(notes,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request,pk):
    notes=Note.objects.get(id=pk)
    serializer=NoteSerializer(notes,many=False)
    return Response(serializer.data)



@api_view(['PUT'])
def getUpdate(request,pk):
    data=request.data
    note=Note.objects.get(id=pk)
    serializer=NoteSerializer(instance=note,data=data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request,pk):
    data=Note.objects.get(id=pk)
    data.delete()
    return Response('Note deleted')