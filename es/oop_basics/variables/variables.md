# Variables
En ejemplo anteriores, tanto en el capítulo de [fundamentos de funciones](../functions_fundamentals/functions_fundamentals.md) como en el capítulo de [fundamentos de clases](../class_fundamentals/class_fundamentals.md) hemos utilizado variables, pero demos un pequeño repaso. En `python` asignamos valores a las variables de la siguiente manera:

{% filename %}python{% endfilename %}
```python
a = 1
print(a)
```

En este caso, a la variable `a` le hemos asignado un valor de `1`. Podemos reasignar de nuevo este valor:

{% filename %}python{% endfilename %}
```python
a = 1
a = 2

print(a)
```

Ahora, al imprimir `a`, el valor que obtendremos será 2. 

Es importante tener en cuenta que los nombres que podemos utilizar para las variables deben cumplir una serie de requisitos:

* Solo puede contener letras del alfabeto inglés (mayúsculas y minúsculas incluidas), números y barra baja.
* Debe comenzar por una letra o una barra baja. De aquí se extiende que no puede comenzar por un número.

A continuación, ejemplos de variables válidas:

{% filename %}python{% endfilename %}
```python
my_var = 1
MY_VAR = 2
myvar = 3
MYVAR = 4
myVar = 5
_my_var = 6
```

El objetivo de las variables es poder almacenar datos e información dentro del código que podremos usar más adelante. 

> **Warning** **¡Atención!** Siendo estrictos, en este capítulo vamos a revisar lo que se conoce como **tipos de datos**, no *variables*. Simplemente quedaba bien hacerlo todo de una sola vez en un mismo capitulo. Las cadenas (`str`), los números (`int` o `float`) y los booleanos (`bool`) que revisaremos en este capítulo solo son algunos de los muchos tipos de de datos que podemos asignar a las variables. 