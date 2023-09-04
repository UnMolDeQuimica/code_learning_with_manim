---
previous: "[[bases_oop/fundamentos_de_funciones/Poniendo todo junto con un ejemplo|Poniendo todo junto con un ejemplo]]"
children:
  - "[[bases_oop/fundamentos_de_clases/Definición de clases|Definición de clases]]"
  - "[[bases_oop/fundamentos_de_clases/Definición de métodos|Definición de métodos]]"
  - "[[bases_oop/fundamentos_de_clases/El método init|El método init]]"
  - "[[bases_oop/fundamentos_de_clases/El self|El self]]"
---

# Fundamentos de Clases

¿Recuerdas el código de [[primera_animacion/Mi primera animación|mi primera animación]]?

```python title="python"
from manim import *

class FirstAnimation(Scene):
    def construct(self):
        square = Square()
        self.play(
            Create(Square)
        )
        self.wait()
```

Ya que sabes [[bases_oop/fundamentos_de_funciones/Fundamentos de Funciones|lo que son las funciones]], así que ese trozo que pone `def construct(self)` te será algo más familiar. Ahora quiero que te fijes en la palabra `class`. `class` es una palabra reservada en python utilizada para poder comenzar a definir una clase, el equivalente a objeto de la OOP. Eso significa que en tu primera animación definiste una clase llamada `FirstAnimation`. Lo que hay entre paréntesis lo reservaremos para capítulos posteriores. Ahora quiero que te centres en aprender lo básico.