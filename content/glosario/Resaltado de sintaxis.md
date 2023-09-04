Los lenguajes de programación se escriben en texto plano que luego es interpretado o compilado por un ordenador que da sentido a las instrucciones que le entran. En ese texto no todos los caracteres son iguales. Por ejemplo, los lenguajes de programación cuentan con palabras clave necesarias para su funcionamiento como la palabra clave `class` utilizada cuando queremos crear una clase nueva en `python`. Otro ejemplo son los enteros `1`, que son distintos de las cadenas `"1"`. Y así con muchos otros tipos de *texto plano* que tiene funciones y significados distintss en el código.

El resaltado de sintaxis distingue entre los diferentes tipos de *texto plano* y aplica automáticamente a cada uno un color diferente para que sea más fácil distinguir una cosa de otra. 

Aquí tienes un ejemplo entre la diferencia de código en texto plano y código con resaltado de sintaxis.

```text
from manim import *

class Example(Scene):
	def construct(self)
		circle = Circle()
		self.add(circle)
```

```python
from manim import *

class Example(Scene):
	def construct(self)
		circle = Circle()
		self.add(circle)
```

La mayoría de [[primeros_pasos/Editores de código|editores de código]] vienen con resaltado de sintaxis por defecto y suelen permitir una gran personalización con una gran variedad de temas que la comunidad ha creado. A modo de ejemplo, puedes echar un vistazo a [https://vscodethemes.com/](https://vscodethemes.com/)