# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Comment, UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email','profile_picture']



class PostSerializer(serializers.ModelSerializer):
    # Use UserProfileSerializer for the 'author' field
    author = UserProfileSerializer()

    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    # Use UserProfileSerializer for the 'author' field
    author = UserProfileSerializer()

    class Meta:
        model = Comment
        fields = '__all__'
