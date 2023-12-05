from rest_framework import serializers
from .models import *

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, required=False)
    comments = CommentSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        comments_data = validated_data.pop('comments', [])

        post = Post.objects.create(**validated_data)

        for tag_data in tags_data:
            Tag.objects.create(post=post, **tag_data)

        for comment_data in comments_data:
            Comments.objects.create(post=post, **comment_data)

        return post

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.description = validated_data.get('description', instance.description)

        instance.save()

        tags_data = validated_data.get('tags', [])
        comments_data = validated_data.get('comments', [])

        # Assuming you want to overwrite existing tags and comments
        instance.tags.all().delete()
        instance.comments.all().delete()

        for tag_data in tags_data:
            Tag.objects.create(post=instance, **tag_data)

        for comment_data in comments_data:
            Comments.objects.create(post=instance, **comment_data)

        return instance

    def delete(self, instance):
        instance.delete()
