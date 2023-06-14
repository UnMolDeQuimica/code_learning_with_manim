# Fundamentos de Clases
---

¿Recuerdas el código de [tu primera animación](../my_first_animation/first_animation.md)?

{% filename %}python{% endfilename %}
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
Ya que sabes [lo que son las funciones](functions_fundamentals.md), así que ese trozo que pone `def construct(self)` te será algo más familiar. Ahora quiero que te fijes en la palabra `class`. `class` es una palabra reservada en python utilizada para poder comenzar a definir una clase, el equivalente a objeto de la OOP. Eso significa que en tu primera animación definiste una clase llamada `FirstAnimation`. Lo que hay entre paréntesis lo reservaremos para capítulos posteriores. Ahora quiero que te centres en aprender lo básico. 

