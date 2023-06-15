# Booleanos

Los booleanos son un tipo de dato que representa si una condición es verdadera o falsa. De hecho, los dos únicos valores que tenemos para los booleanos son `True` (verdadero) y `False` (falso).

Los booleanos son muy útiles para poder escribir condiciones, como veremos en capítulos posteriores. 

## Operadores booleanos 

Existen 3 tipos de operadores booleanos principales: `not`,  `and` y `or`:

* `not`. El operador `not` cambia el valor del booleano. `True` significa verdadero. `False` significa falso. Cuando decimos `not True`, el resultado es equivalente a decir "no verdadero" o lo que es lo mismo: Falso. Lo contrario también es cierto: `not False` equivale a `True`. En lenguaje natural es equivalente a la negación: "Eso que has dicho **No** es verdad" niega que la frase anterior sea verdadera, conviriéndola en falsa.

* `and`. El operador `and` junta el valor de dos booleanos. Si uno de ellos es falso, el resultado final es falso. Vale `True` cuando ambos booleanos son `True`: `True and True`. Cualquier otra combinación (`True and False`, `False and True` y `False and False`) equivalen a `False`. En palabras mundanas podríamos decir "Vamos a comprar chuches si has recogido tu cuarto **y** puesto la lavadora". Solo compraremos chuches si se cumplen ambas condiciones. Si una de ellas es falsa, nos hemos quedado sin nuestra dosis de azúcar. 

* `or`. El operador `or` es como `and` pero menos restrictivo. Basta que uno de los booleanos sea `True` para que el resultado final sea `True`. Con el ejemplo de antes, podemos reformularlo a "Vamos a comprar chuches si has recogido tu cuarto **o** puesto la lavadora". Como hoy he recogido mi cuarto, me toca comprar chuches :D

## Comparaciones odiosas

Se dice que las comparaciones son odiosas. ¡Pero en python son muy útiles! Por ejemplo, puedo determinar si un número es más grande que otro o si son el mismo. ¡Incluso sirve con cadenas!

{% filename %}python{% endfilename %}
```python
print("True" == "False") # True es igual que False. Resultado: False
print(1 > 2) # 1 es mayor que 2. Resultado: False
print(1 < 2) # 1 es menor que 2. Resultado: True
print(1 <= 2) # 1 es menor o igual que 2. Resultado: True
print(1 == 2) # 1 es igual que 2. Resultado:  False
print(1 != 2 ) # 1 es distinto de 2. Resultado: True
print("a" == "a") # La cadena "a" es igual que la cadena "a". Resultado: True
```

## Utilizando booleanos en manim.

Los booleanos se utilizan sobretodo para poder establecer condiciones a la hora de de decidir si un código se ejecuta o no. De nuevo, vamos a adelantar acontecimientos y vamos a introducir las sentencias `if` y `else` en un ejemplo. Vamos a escribir dos palabras: "Paper" y "Rock". Vamos a calcular la longitud de ambas usando `len` y vamos a comprobar cual es más larga. Si "Paper" es más larga, dibujaremos "Paper". Si son iguales, escribiremos las dos. Si "Rock" es mas grande, escribiremos "Rock"

{% filename %}python{% endfilename %}
```python
from manim import *

class BoolAnimation(Scene):
    def construct(self):
        paper = "Paper"
        rock = "Rock"
        if len(paper) > len(rock): # Se puede leer como "Si la longitud de paper es mayor que la longitud de rock, haz lo siguiente"
            displayed_word = paper
        elif len(paper) == len(rock) # Se puede leer como "Sino, si la longitud de paper es igual que la longitud de rock, haz lo siguiente"
            displayed_word = paper + rock
        else: # Se puede leer como "Sino, haz lo siguiente"
            displayed_word = rock

        self.wait()
        self.play(Write(displayed_word))
        self.wait()
```

En este caso está claro que la palabra que va a salir es "Paper". Prueba a combinar distintas condiciones y booleanos para practicar.

> **Comment** ¡Observa! Fíjate como en la línea 8 tenemos tres niveles de indentación. En las sentencias de tipo `if`/`else` también tenemos que tener en cuenta las indentación para enmarcar la condición. 

