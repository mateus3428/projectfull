from django.db import models

# Create your models here.

class Produto(models.Model):
    Nome = models.CharField(max_length=30)
    Desc = models.TextField()
    Valor = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.Nome