from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=300)
    address = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=300)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    photo = models.ImageField(blank=True)
    publication_date = models.DateField()

    def __str__(self):
        return self.title
