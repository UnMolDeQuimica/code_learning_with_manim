---
previous: "[[bases_oop/variables/Variables|Variables]]"
next: "[[bases_oop/variables/Números|Números]]"
parent: "[[bases_oop/variables/Variables|Variables]]"
---

# Cadenas

>[!Quote]Cita 
>Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar.
>
> *K. Marx y F. Engels*

  

No me refiero a ese tipo de cadenas. En `python`, las cadenas son, en pocas palabras, texto. Por ejemplo, podemos escribir la cadena `"Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar."`. Fíjate que debe ir entre comillas. Estas comillas pueden ser simples `''` o dobles `""`. La decisión es tuya, pero aquí usaremos por norma general las comillas dobles.


Si lo recuerdas, ya has utilizado cadenas antes. Vamos a refrescarte la memoria.


```python title="python"
print("Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar.")
```

La función `print` va a escribir en la consola el texto `Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar.`. Este texto es una cadena y lo podemos guardar en una variable de la siguiente forma.

Crea un archivo llamado strings_tutorial.py y dentro crea una variable y asígnale el valor `"Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar."`. Luego, imprime la variable. Finalmente, ejecuta el código y disfruta del resultado.

Deberías haber escrito un código tal que así:

```python title="python"
my_var = "Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar."

print(my_var)
```

## Encadenando cadenas

Podemos concatenar unas cadenas con otras usando la operación `+`:


```python title="python"
my_var_1 = "Los proletarios no tienen nada que perder salvo sus cadenas,"
my_var_2 = " y tienen todo un mundo que ganar."
my_var_3 = my_var_1 + my_var_2

print(my_var_3)
```

Si ejecutas el código verás que el resultado es el mismo de antes:

```bash title="Terminal"
python strings_tutorial.py
> Los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar.
```

## Truquillos de print

  Podemos utilizar variables dentro de `print` de varias maneras. En el ejemplo anterior, ya hemos visto que podemos meter directamente una variable dentro de `print`. Pero hay una serie de truquillos interesantes que viene bien saber.

* Saltos de línea. Podemos incluir un salto de línea en un `print` utilizando `\n`. Ejemplo:

```python title="python"
print("My name is: \nMiguel Ángel")
```

* f strings: Podemos introducir una variable en `print` usando corchetes para colocarla dentro de una cadena. Por ejemplo:

```python title="python"
name = Miguel Ángel
print("My name is: {name}")
```

* r strings: Supongamos que queremos escribir \n. Sabemos que si lo escribimos tal cual vamos a tener un salto de línea. Para evitarlo, podemos hacer lo siguiente:

```python title="python"
print(r"The \n symbol introduces a line break")
```

#TODO: Ir añadiendo más poco a poco 
## Métodos de las cadenas

En `python` tenemos varios métodos propios de las cadenas. Por ejemplo, el método `upper()` convierte las letras de una cadena en mayúsculas. Por contra, `lower()` convierte a todas las letras en minúsculas. Veámos un ejemplo:

```python title="python"
my_var = "Los proletarios no tienen nada que perder SALVO SUS CADENAS, y tienen todo un mundo que ganar."

print(my_var)
print(my_var.capitalize())
print(my_var.lower())
```

El resultado es:

```bash title="Terminal"
python strings_tutorial.py
> Los proletarios no tienen nada que perder SALVO SUS CADENAS, y tienen todo un mundo que ganar.
> LOS PROLETARIOS NO TIENEN NADA QUE PERDER SALVO SUS CADENAS, Y TIENEN TODO UN MUNDO QUE GANAR.
> los proletarios no tienen nada que perder salvo sus cadenas, y tienen todo un mundo que ganar.
```

Puedes consultar otros métodos propios de las [cadenas aquí](https://www.w3schools.com/python/python_ref_string.asp).
## Escribiendo en Manim

En Manim tenemos la clase `Text` que nos sirve para escribir texto. Vamos a crear un archivo llamado `manim_hello_world.py` y dentro de este una variable con el texto `Hello World` y vamos a hacer una animación de escribir de dicho texto con un segundo de espera antes y después de la animación:

```python title="python"
from manim import *

class HelloWorld(Scene):
    def construct(self):
        hello_world = Text("Hello World")
        self.wait()
        self.play(Write(hello_world))
        self.wait()
```

Ahora, en la consola escribimos:

```shell title="Terminal"
manim  manim_hello_world.py -p
```

¡Ahora, a disfrutar de tu hermosa animación!