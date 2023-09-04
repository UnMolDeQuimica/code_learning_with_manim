---
previous: "[[bases_oop/fundamentos_de_clases/Definición de métodos|Definición de métodos]]"
next: "[[bases_oop/fundamentos_de_clases/El self|El self]]"
parent: "[[bases_oop/fundamentos_de_clases/Fundamentos de Clases|Fundamentos de Clases]]"
---
## El método `__init__`
En python, las clases tienen un método especial llamado `__init__` que sirve para *inicializar* una clase. En otras palabras, podemos indicar qué valor debería tener una cierta variable dentro de una clase. Con un ejemplo se entiende mejor.

Antes hemos escrito una clase llamada `Table` con un número de patas específico, con una anchura específica, con una longitud específica, con una altura específica y un material específica.

Si queremos tener mesas con valores distintos, en lugar de dejar esos valores metidos a fuego en el código, podemos hacer uso del método `__init__` de la siguiente manera:

```python title="python"
class Table:
    def __init__(self, legs, lenght, widht, height, material):
        self.legs = legs
        self.lenght = lenght
        self.widht = widht
        self.height = height
        self.material = material

wood_table = Table(legs=4, lenght=1, width=1, height=1, material="Wood")

metal_table = Table(legs=4, lenght=1, width=1, height=1, material="Metal")  

print(wood_table.material)
print(metal_table.material)
```

  

Vamos a explicar que hemos hecho aquí. Primero hemos comenzado definiendo la clase `Table` igual que en ocasiones anteriores. Seguidamente, hemos definido el método `__init__` que va a tener como parámetros `self`, `legs`, `lenght`, `widht`, `height`, `material`. Dentro del método `__init__` hemos definido las variables internas `self.legs`, `self.lenght`, `self.widht`, `self.height`, `self.material` en base a los parámetros `legs`, `lenght`, `widht`, `height`, `material` que le entran a la función. Luego hemos definido las variables `wood_table` y `metal_table` como *instancias* de la clase `Table` idénticas en todos los aspectos exceptuando el `material` que las compone.

  
Aquí ha habido una palabra importante: *instancia*. Para que nos entendamos, podemos imaginar una clase `Human` que defina lo que es un ser humano con todas y cada una de sus posibles características. Tú, yo, y cualquier otra persona pertenecemos a esa clase `Human`, pero somos diferentes, únicos e irrepetibles. Todos somos *instancias* de esa clase `Human`, distintos en alguno o muchos de los parámetros que nos definen.

Hablamos de *instanciar* una clase cuando creamos una clase con todo un conjunto de variables específicas.

>[!danger]¡Ojo cuidao'!
> Dos instancias pueden ser idénticas entre sí y luego ser utilizadas de forma diferente. Por ejemplo, podríamos instanciar dos clases `Table` con los mismos argumentos pero luego usar cada una de ellas en una parte distinta del código.