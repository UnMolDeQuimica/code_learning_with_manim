# Fundamentos de Clases
---

¿Recuerdas el código de [tu primera animación](../my_first_animation/first_animation.md)?

```python
from manim import *

class FirstAnimation(Scene):
    def construct(self):
        square = Square()
        self.play(
            Create(Square)
        )
        self.wait()
```

Fijate en la palabra `class`. `class` es una palabra reservada en python utilizada para poder comenzar a definir una clase. Eso significa que en tu primera animación definiste una clase llamada `FirstAnimation`. Lo que hay entre paréntesis lo reservaremos para capítulos posteriores. Ahora quiero que te centres en aprender lo básico. 


## Definición de clases

Antes de nada, vamos a aprender cómo se define una clase. Supongamos que queremos crear una clase que represente lo que es una mesa. ¿Cómo lo hacemos? Hay extensos tratados de filosofía que versan sobre lo que es el ser, sobre la imposibilidad de definir perfectamente hasta el objeto más simple e incluso discuten sobre la existencia de la realidad. Pero vamos a los simple: Una mesa tiene cuatro patas, una longitud, una anchura, una altura y estará hecho de cierto material. ¡Vamos a crear una clase Mesa!

Para ello, crea un nuevo archivo .py al que llamaremos `mesa.py` y escribe el siguiente código.

```python
class Mesa:
    patas = 4
    longitud = 2
    anchura = 1
    altura = 1.2
    material = "Madera"
```

Esto está muy bien, pero por lo general deberíamos usar el inglés a la hora de programar. No es que el inglés sea un idioma mejor, es simplemente la lengua franca de nuestro tiempo y ayuda a la comunicación. La vida sería muy difícil si cada uno programara en su propia lengua. Vamos a reescribir esto: 


```python
class Table:
    legs = 4
    lenght = 2
    widht = 1
    height = 1.2
    material = "Wood"
```

¡Eso es! Ahora que tenemos nuestra clase `Table` creada, añade esto a 