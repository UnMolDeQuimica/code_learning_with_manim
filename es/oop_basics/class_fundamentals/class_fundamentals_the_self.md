## El `self`

Otra palabreja que hemos visto es `self`. Se trata de una palabra reservada de python que sirve para indicar a una clase que se trata de algo *propio*. Además, es un parámetro obligatorio en la definición del método `__init__`. Su utilidad queda mejor reflejada con ejemplos. 

Antes hemos definido la variable interna `self.material` como proveniente del parámetro `material` al definir el método `__init__`. Esto es lo que nos ha permitido recuperar ese valor al hacer `wood_table.material`. Si borramos la línea 7 en la que pone `self.material = material` veremos que el código nos devuelve un error al ejecutarlo de nuevo. 

Otro ejemplo: Al crear nuestra primera animación hemos definido el método `construct` que toma como parámetro `self`. Esto permite el uso de la función *dentro* de la propia clase para modificarse a sí misma. 

Construyamos un ejemplo distinto desde cero. Vamos a crear un archivo que se llamará `counter.py` y dentro vamos a definir una clase `Counter`. A esta clase le vamos a pasar un número inicial y un número de aumento. Dentro de la clase tendremos dos variables internas asociadas a esos parámetros y tendremos también una variable par el valor actual. Además, vamos a crear un método llamado `add_to_counter` que nos permitirá añadir el valor de aumento al valor actual del contador. ¿Suena difícil? ¡Nah! ¡Vamos a ello!

{% filename %}python{% endfilename %}
```python
class Counter:
    def __init__(self, initial_value, increase_value):
        self.initial_value = initial_value
        self.increase_value = increase_value
        self.current_value = self.initial_value

    def add_to_counter(self):
        self.current_value = self.current_value + self.increase_value
```

Dentro del mismo archivo vamos a instanciar nuestra clase en una variable llamada contador y vamos a aplicarle el método 3 veces:


{% filename %}python{% endfilename %}
```python
counter = Counter(initial_value=0, increase_value=1)

counter.add_to_counter()
counter.add_to_counter()
counter.add_to_counter()

print(counter.current_value)
```

En este ejemplo, deberíamos obtener como resultado `3`. Repasemos de nuevo paso a paso para explicar qué estamos haciendo aquí: 

1. Definimos la clase Counter.
2. Definimos el método `__init__` con los parámetros `self` (recordemos que es obligatorio), `initial_value` y `increase_value`
3. Dentro del método `__init__` hemos incluido las variables `self.initial_value` y `self.increase_value` que provienen de los parámetros con el mismo nombre y la variable `self.current_value` que empieza con el mismo valor que `self.initial_value`.
4. Añadimos el método `add_to_counter`. Como parámetro, indicamos `self`, lo que significa que este método solo se puede aplicar a instancias de `Counter`. ¿Motivo? Está modificando la variable interna `self.current_value`. Esta variable, al ser interna, no existe fuera de la clase `Counter`. Aunque crearamos otra clase con una variable del mismo nombre no podríamos aplicarla. Ahora, esta función solo vive dentro de `Counter` para modificar el estado de una instancia de `Counter`.
5. El método `add_to_counter` modifica el valor de `self.current_value`. El nuevo valor es igual al valor anterior sumado al `self.increase_value`.
6. Instanciamos la clase en la variable `counter`.
7. Aplicamos a la variable `counter` el método `add_to_counter` tres veces seguidas.
8. Obtenemos el valor de la variable `self.current_value` usando `counter.current.value`

> **Hint** **¡Fíjate!** Cuando llamamos a los métodos de una función, estos acaban en paréntesis como en `counter.add_to_counter()`. Cuando accedemos a las variables de clase como `counter.current_value` no ponemos los paréntesis. También presta atención a un detalle: La variable interna `self.current_value` se llama usando `counter.current_value`. Esto significa que, en este caso `self` sería equivalente a `counter`. A esto me refería antes cuando decía que `self` hace referencia a sí mismo, es decir, a la instancia de la clase. 

Fíjate en que la función `add_to_counter` no devuelve nada, no tiene `return`. Si en lugar de escribir `counter.add_to_counter()` escribimos `counter = counter.add_to_counter()`, obtenemos un error:

```python
class Counter:
    def __init__(self, initial_value, increase_value):
        self.initial_value = initial_value
        self.increase_value = increase_value
        self.current_value = self.initial_value

    def add_to_counter(self):
        self.current_value = self.current_value + self.increase_value

counter = Counter(initial_value=0, increase_value=1)

counter = counter.add_to_counter()
counter = counter.add_to_counter()
counter = counter.add_to_counter()

print(counter.current_value)
```

{% filename %}command-line{% endfilename %}
```bash
> python counter.py
Traceback (most recent call last):
  File "/home/miguel/umdq/git_practice/counter.py", line 13, in <module>
    counter = counter.add_to_counter()
AttributeError: 'NoneType' object has no attribute 'add_to_counter'
```

¿Qué está ocurriendo? Primero estamos diciendo que la variable counter es una instancia de Counter con `initial_value = 0` y `increase_value = 1`. Luego, hemos dicho que la variable counter es igual al *resultado* de la variable counter tras aplicarle el método `add_to_counter`. Sin embargo, como `add_to_counter` no tiene return, no hay un *resultado* de esa función, lo cual nos da una variable de tipo *None*, totalmente distinta a la clase `Counter`. Por supuesto, *None* no tiene un método llamado `add_to_counter`, `python` nos dice que `'NoneType' object has no attribute 'add_to_counter'`, es decir, que el tipo `None` no tiene `add_to_counter`. 

Vamos a hacer que el código de arriba funcione. Para ello, hacemos un pequeño cambio en la función `add_to_counter`:

{% filename %}python{% endfilename %}
```python
    def add_to_counter(self):
        self.current_value = self.current_value + self.increase_value
        return self
```

¡Ajá! Ahora le hemos dicho a la función que devuelva la instancia misma de la clase. Ahora prueba de nuevo y verás que funciona perfectamente. 


> **Comment** **En resumen** `self` es una palabra que hace referencia a la instancia misma de la clase. Podemos definir variables de clase que sean propias de cada instancia mediante el uso del método `__init__` y `self`. Además, podemos definir métodos que modifiquen el estado de la propia instancia de la clase utilizando `self` como parámetro. 


