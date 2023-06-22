## Definición de métodos
En las clases podemos definir funciones a las que llamaremos métodos de la clase. Esto lo podemos hacer igual que cuando definimos funciones normales, solo que en este caso estarán dentro de la definición de la clase. Vamos a crear un archivo llamado calculator.py y dentro vamos a crear una clase llamada `Calculator` a la que le vamos a meter 4 funciones principales: `addition`, `substraction`, `multiplication` y `division`.


{% filename %}python{% endfilename %}
```python
class Calculator:
    def addition(a, b):
        return a + b

    def substraction(a, b):
        return a - b

    def multiplication(a, b):
        return a * b

    def division(a, b):
        return a / b
```

Si probamos a usar alguna de las funciones igual que hemos hecho en el capítulo anterior, obtendremos un error de tipo `NameError`, lo que significa que la función no está definida:


{% filename %}python{% endfilename %}
```python
class Calculator:
    def addition(a, b):
        return a + b

    def substraction(a, b):
        return a - b

    def multiplication(a, b):
        return a * b

    def division(a, b):
        return a / b

print(addition(2,3))
```

{% filename %}command-line{% endfilename %}
```bash
> python calculator.py
Traceback (most recent call last):
  File "/calculator.py", line 14, in <module>
    print(addition(2,3))
NameError: name 'addition' is not defined

```

Sustituye la línea 14 por `print(Calculator.addition(2,3))` y vuelve a correr el código. Ahora el resultado debería ser el esperado: `5`

¿Qué hay de distinto? En lugar de llamar a la *función* `addition` hemos llamado al *método* `addition` de la clase `Calculator`. Fíjate en que se escribe primero el nombre de la clase, luego un punto y por último el nombre del método. El punto sirve para decir

> ¡Eh! ¡python! ¡De la clase `Calculator` llama al método `addition`¡

Te dejo de ejercicio hacer el resto de operaciones con los números 10 y 5 como argumentos. 

> **Message** **¡Fíjate!** Cuando hemos creado nuestra primera animación, hemos definido un método llamado `construct` que tiene como parámetro la palabra `self` y ahí hemos hecho cosas. Cada vez estamos más cerca para entender qué está pasando. 

