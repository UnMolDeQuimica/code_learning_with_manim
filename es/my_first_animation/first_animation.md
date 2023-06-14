# Ahora sí, nuestra primera animación

Ahora que ya has escrito tu primer programa simple como él solo, vamos a crear nuestra primera animación. Para ello, crea un archivo llamado `my_first_animation.py` y ábrelo igual que antes. Ahora, copia el siguiente código dentro del archivo:


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

Ahora, vete a la terminal y escribe lo siguiente:

{% filename %}command-line{% endfilename %}
```command-line
> manim my_first_animation.py -p
```
Si está todo correcto, se abrirá tu reproductor de videos predeterminado y verás tu hermosa creación. 


# ¿Qué es lo que hemos hecho?

Te explico: 

- En la primera línea le hemos dicho a python que busque entre sus librerías la librería manim y que de ahí nos lo traiga todo. Eso es lo que significa `from manim import *`
- Luego hemos credo una clase llamada `FirstAnimation` que hereda de la clase `Scene`. Esto, que ocurre en la línea 3, ahora suena muy extraño y místico, pero ya llegaremos. 
- Hemos sobreescrito el método `construct` de la clase `Scene`. Esta sobreescritura comienza en la línea 4 y termina en la línea 9. De nuevo, suena a magia pero ya llegaremos en el futuro. 
- En la linea de comandos hemos llamado a `manim` y le hemos dicho que abra el archivo `my_first_animation.py` para hacer una animación. Además, con la flag `-p` le hemos dicho que queremos previsualizar el resultado. Ahora que dominas un poco más la linea de comandos no es tan extraño ¿verdad?
