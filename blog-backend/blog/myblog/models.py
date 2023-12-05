from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField('Tag', related_name='posts')
    description = models.TextField(default='')
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    slug = models.SlugField(unique=True, max_length=255, blank=True, null=True) 
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    
    
class Tag(models.Model):
    name = models.CharField(max_length=50)
    
    
    def __str__(self):
        return self.name
    

class Comments(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=100)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return f'{self.author} - {self.text}'