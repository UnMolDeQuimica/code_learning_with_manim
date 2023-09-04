A la hora de escribir código es habitual que tengamos que escribir cosas que ya han sido escritas por alguien antes. Veamos un ejemplo:

```python
from manim import *

class Example(Scene):
	def construct(self):
		shift_amount = 1
		circle = Circle().shift(shift_amount*RIGHT)
		self.add(circle)
```

De todas estas palabras, las únicas originales mías son `shift_amount` y `circle`.  El resto vienen o bien de `python`  o bien de `manim`. Además, las dos únicas que he metido las he repetido una vez cada una. 

El autocompletado de sintaxis es una herramienta que traen la mayoría de [[primeros_pasos/Editores de código|editores de código]] para que tengamos que escribir menos. Con escribir `s`, mi editor ya me está proponiendo usar las palabras `shift`, `shift_amount` y muchas otras que son habituales en `python` o que vienen de las librerías que estoy usando. 
