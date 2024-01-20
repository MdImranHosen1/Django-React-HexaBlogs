from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.urls import reverse
from django.utils import timezone
from autoslug import AutoSlugField
# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
    bio = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return self.user.username

class Post(models.Model):
    title=models.CharField(max_length=300)
    content=models.TextField()
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    slug = AutoSlugField(populate_from='title', unique=True) 
    published_date=models.DateTimeField(default=timezone.now)
    edit_date=models.DateTimeField(null=True,blank=True)
    is_published=models.BooleanField(default=False)
    
    def save(self,*args,**kwargs):
        # Update the edit_date when saving edits
        if self.pk:
            self.edit_date = timezone.now()
        # Generate a slug when saving the post
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)
        
    def get_absolute_url(self):
        return reverse('post_detail', args=[str(self.slug)])

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text