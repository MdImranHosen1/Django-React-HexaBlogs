from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Post, Comment, UserProfile
from .serializers import PostSerializer, CommentSerializer, UserProfileSerializer
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser

@parser_classes([JSONParser])
class UserRegistration(APIView):
    def post(self, request, format=None):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            email = request.data.get('email')

            if not username or not password or not email:
                return Response({'error': 'Please provide a username, password, and email.'}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create_user(username=username, email=email, password=password)
            user_profile = UserProfile.objects.create(user=user)

            return Response({'message': 'User registered successfully.'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': f'Error during user registration: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@parser_classes([JSONParser])
class UserLogin(APIView):
    def post(self,request,format=None):
        username=request.data.get('username')
        password=request.data.get('password')
        
        if not username or not password:
            return Response({'error': 'Please provide a username and password.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(request,username=username,password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password.'}, status=status.HTTP_401_UNAUTHORIZED)
            
class UserLogout(APIView):
    def get(self,request,format=None):
        logout(request)
        return Response({'message':'Logout successful.'}, status=status.HTTP_200_OK)
    
 
class PostList(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
        # return Response("Its working")

class PostDetails(APIView):
        
    def get(self, request, post_id, format=None):
        post = get_object_or_404(Post, pk=post_id)
        serializer = PostSerializer(post, many=False)
        return Response(serializer.data)
    
    def put(self, request, post_id, format=None):
        post = get_object_or_404(Post, pk=post_id)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,post_id,format=None):
        post=get_object_or_404(Post,pk=post_id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CreatePost(APIView):
    
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    



