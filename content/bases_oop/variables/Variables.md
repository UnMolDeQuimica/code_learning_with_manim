---
previous: "[[bases_oop/variables/Variables|Variables]]"
children:
  - "[[bases_oop/variables/Cadenas|Cadenas]]"
  - "[[bases_oop/variables/Números|Números]]"
  - "[[bases_oop/variables/Booleanos|Booleanos]]"
  - "[[bases_oop/estructuras_de_datos/Listas|Listas]]"
  - "[[bases_oop/estructuras_de_datos/Tuplas|Tuplas]]"
  - "[[bases_oop/estructuras_de_datos/Sets|Sets]]"
  - "[[bases_oop/estructuras_de_datos/Diccionarios|Diccionarios]]"
next: "[[bases_oop/variables/Cadenas|Cadenas]]"
---
# Variables

En ejemplo anteriores, tanto en el capítulo de [[bases_oop/fundamentos_de_funciones/Fundamentos de Funciones|fundamentos de funciones]] como en el capítulo de [[bases_oop/fundamentos_de_clases/Fundamentos de Clases|fundamentos de clases]] hemos utilizado variables, pero demos un pequeño repaso. En `python` asignamos valores a las variables de la siguiente manera:


```python title="python"
a = 1
print(a)
```

  
En este caso, a la variable `a` le hemos asignado un valor de `1`. Podemos reasignar de nuevo este valor:



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


```python title="python"
my_var = 1
MY_VAR = 2
myvar = 3
MYVAR = 4
myVar = 5
_my_var = 6
```

El objetivo de las variables es poder almacenar datos e información dentro del código que podremos usar más adelante.


>[!warning]¡Atención!
>Siendo estrictos, en este capítulo vamos a revisar lo que se conoce como **tipos de datos**, no *variables*. Simplemente quedaba bien hacerlo todo de una sola vez en un mismo capitulo. Así, las cadenas (`str`), los números (`int` o `float`) y los booleanos (`bool`) solo son algunos de los tipos de de datos que podemos asignar a las variables.





