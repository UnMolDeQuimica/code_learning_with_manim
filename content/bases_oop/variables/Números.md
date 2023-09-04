---
previous: "[[bases_oop/variables/Cadenas|Cadenas]]"
next: "[[bases_oop/variables/Booleanos|Booleanos]]"
parent: "[[bases_oop/variables/Variables|Variables]]"
---

# Números

Cuando hablamos de números, podemos tener de muchos tipos. Por ejemplo, el número 3 es un número natural. El número -3 es un entero. El número 0.2 es un número racional y el número π es un número irracional.

En `python` tenemos, a grandes rasgos, dos tipos de números: enteros `int` y de decimal flotante `float`, equivalente a los decimales normales. Por suerte, `python` nos permite realizar operaciones entre estos tipos de números sin casi ninguna restricción.
## Operaciones

Las operaciones principales que podemos realizar entre los distintos números son la suma, la resta, la multiplicación, la división, la exponenciación y el cálculo del resto.

Vamos a poner ejemplos de cada una:

```python title="python"
a = 10
b = 5

print(a+b) # Resultado 15
print(a-b) # Resultado 5
print(a*b) # Resultado 50
print(a/b) # Resultado 2
print(a**b) # Resultado 100000
print(a%b) # Resultado 0

c = 11
d = 5

print(c+d) # Resultado 16
print(c-d) # Resultado 6
print(c*d) # Resultado 55
print(c/d) # Resultado 2.2
print(c**d) # Resultado 161051
print(c%d) # Resultado 1
```

  
Quizá la operación que resulta menos evidente es el cálculo del resto (o del residuo). Consiste en realizar la división de un número entre otro y buscar el residuo de dicha división. Por ejemplo, en el caso de 10 y 5, el residuo es 0. En el caso de 11 dividido 5 el residuo es 1. En el caso de 7 dividido 4 el residuo es 3.

## Convirtiendo números a cadenas y cadenas a números.

Existen métodos para convertir números en cadenas. Supongamos que queremos hacer `print` de la edad de alguien:


```python title="python"
name = "Miguel Ángel"
age = 27

print(f"My name is {name} and my age is {age}") # Funciona
print("My name is " + name + " and my age is " + age) # No funciona
```


En el segundo caso no funciona porque estamos intentando sumar una cadena (`string`) con un entero (`int`). Esto lo podemos solucionar usando el método `str()`:


```python title="python"
name = "Miguel Ángel"
age = 27

print("My name is " + name + " and my age is " + str(age)) # Ahora funciona
```

Podemos hacer el paso contrario: convertir cadenas a números. Para ello debemos decidir si queremos que sea un entero (`int`) o un decimal de punto flotante (`float`).

```python title="python"
age = int("27")
height = float("1.70")
```
## Números en Manim

Una de las grandes ventajas de Manim es el uso de valores numéricos para realizar las animaciones. Hagamos uso del [[bases_oop/variables/Cadenas#Escribiendo en Manim|ejemplo anterior]] para [[glosario/Principio DRY|ejemplificar]]:

Vamos a escribir de nuevo `Hello World` pero esta vez vamos a mover el texto dos unidades hacia arriba. Luego, vamos a escribir abajo un valor numérico usando `Tex` en lugar de `Text` movido dos unidades hacia abajo. Para esto es importante que tengas LaTeX instalado como comentamos en [[primeros_pasos/Instalación de otras dependencias útiles| la instalación de otras dependencias útiles]].

```python title="python"
from manim import *

class HelloWorld(Scene):
    def construct(self):
        numerical_value = 3
        hello_world = Text("Hello World").shift(2*UP)
        tex_numerical_value = Tex(str(numerical_value)).shift(2*DOWN)
        self.wait()
        self.play(Write(hello_world))
        self.play(Write(tex_numerical_value))
        self.wait()
```