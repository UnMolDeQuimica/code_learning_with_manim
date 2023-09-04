---
previous: "[[bases_oop/estructuras_de_datos/Estructuras de datos|Estructuras de datos]]"
next: "[[bases_oop/estructuras_de_datos/Tuplas|Tuplas]]"
parent: "[[bases_oop/estructuras_de_datos/Estructuras de datos|Estructuras de datos]]"
---
# Definiendo listas
Las listas o arreglos (de arrays en inglés) son secuencias ordenadas de elementos. Se declaran utilizando el símbolo `[` , se ponen los elementos dentro separados por comas y se cierran con `]`. Además, a diferencia de las [[bases_oop/estructuras_de_datos/Tuplas|tuplas]], las listas son mutables, es decir, las podemos modificar.

Supongamos que queremos hacer una pequeña lista de la compra:
- Zanahoria 
- Pimiento
- Cebolla

En `python` escribiríamos así la lista:

```python title="python"
shopping_list = ["Carrot", "Pepper", "Onion"]
```

# Devolviendo valores de las listas

Si quisiéramos, podríamos devolver todos los elementos de la lista con `print`, pero también podemos devolver un elemento específico de la lista indicando su posición:

```python title="shopping_list.py"
shopping_list = ["Carrot", "Pepper", "Onion"]

print(shopping_list)
print(shopping_list[0])
print(shopping_list[1])
print(shopping_list[2])
```

Si hacemos correr nuestro programa, obtendremos lo siguiente:

```shell
python shopping_list.py

> ['Carrot', 'Pepper', 'Onion']
> Carrot
> Pepper
> Onion
```

>[!hint]¡Fíjate!
> Los índices de las listas comienzan por el cero. Es decir, el primer elemento tiene índice 0, el segundo tiene índice 1, el tercero tiene índice 2 y así sucesivamente.

# Añadiendo elementos a una lista
¡NO! ¡SE ME HA OLVIDADO INCLUIR SAL! 
Tranqui: Podemos añadir elementos a la lista utilizando el método `append`:

```python title="shopping_list.py"
shopping_list = ["Carrot", "Pepper", "Onion"]
print(shopping_list) # No contiene el elemento "Salt"

shopping_list.append("Salt")
print(shopping_list) # Ahora contiene el elemento "Salt"
```

Resultado:

```shell
python shopping_list.py
> ['Carrot', 'Pepper', 'Onion']
> ['Carrot', 'Pepper', 'Onion', 'Salt']
```

# Quitando elementos de una lista
¡Eh! ¡Acabo de caer en cuenta! Tengo zanahorias que me ha regalado la vecina. No pasa nada: podemos usar el método `remove` para eliminarlas de la lista:

```python title="shopping_list.py"
shopping_list = ["Carrot", "Pepper", "Onion", "Salt"]
print(shopping_list) # Contiene "Carrot"

shopping_list.remove("Carrot")
print(shopping_list) # Ya no contiene "Carrot"
```

Resultado:

```shell
python shopping_list.py
> ['Carrot', 'Pepper', 'Onion', 'Salt']
> ['Pepper', 'Onion', 'Salt']
```

El método `remove` solo sirve si el elemento se encuentra en la lista. En caso contrario devuelve un error. Por ejemplo:

```python title="shopping_list.py"
shopping_list = ["Carrot", "Pepper", "Onion", "Salt"]
shopping_list.remove("Letuce") # Va a causar un error.
```

Resultado:

```shell
python shopping_list.py
> Traceback (most recent call last):
>  File "<stdin>", line 1, in <module>
> ValueError: list.remove(x): x not in list
```


Además, si tenemos elementos repetidos solo elimina el primero de todos:

```python title="shopping_list.py"
shopping_list = ["Carrot", "Pepper", "Onion", "Salt", "Carrot"]
print(shopping_list) # Contiene "Carrot" dos veces.

shopping_list.remove("Carrot")
print(shopping_list) # Solo contiene "Carrot" al final de la lista.
```

Resultado:

```shell
python shopping_list.py
> ['Carrot', 'Pepper', 'Onion', 'Salt', 'Carrot']
> ['Pepper', 'Onion', 'Salt', 'Carrot']
```


# Eliminando elementos por índice

En ocasiones nos interesará eliminar elementos según su índice y no su contenido. Cojamos como ejemplo el caso anterior. Me he dado cuenta de que he añadido *Carrot* dos veces y quiero eliminar la segunda vez. Para ello, puedo usar el método `pop`:

```python title="shopping_list.py"
#                   0         1         2       3        4
shopping_list = ["Carrot", "Pepper", "Onion", "Salt", "Carrot"]
print(shopping_list) # Contiene "Carrot" dos veces.

shopping_list.pop(4)
print(shopping_list) # Solo contiene "Carrot" al principio de la lista.
```

Resultado: 

```shell
python shopping_list.py
> ['Carrot', 'Pepper', 'Onion', 'Salt', 'Carrot']
> ['Carrot', 'Pepper', 'Onion', 'Salt']
```


El método `pop` también nos sirve para recuperar elementos por índice a la vez que los eliminamos de la lista. Supongamos que quiero averiguar cuál es el primer elemento de la lista para ir a buscarlo por el supermercado y a la vez quiero *tacharlo* para que no me salga más:

```python title="shopping_list.py"
#                   0         1         2       3
shopping_list = ["Carrot", "Pepper", "Onion", "Salt"]
print(shopping_list)

first_item = shopping_list.pop(0)
print(shopping_list)
print(first_item)
```

Resultado:
```shell
python shopping_list.py
> ['Carrot', 'Pepper', 'Onion', 'Salt']
> ['Pepper', 'Onion', 'Salt']
> Carrot
```

# Devolviendo varios valores de una lista

Hemos visto antes que podemos [[bases_oop/estructuras_de_datos/Listas#Devolviendo valores de las listas|devolver el valor de un elemento de la lista según su índice]].

En `python` es posible devolver varios valores de una sola vez indicando el primer elemento y el último que nos interesa:

```python title="shopping_list.py"
#                   0         1         2       3
shopping_list = ["Carrot", "Pepper", "Onion", "Salt"]
print(shopping_list[0:2])
```

Resultado: 

```shell
python shopping_list.py
> ['Carrot', 'Pepper']
```

¡Eh! ¡Yo había pedido desde el elemento 0 ("Carrot") hasta el elemento 2 ("Onion")! ¿Qué le ha pasado a mi "Onion"?

`python` *entiende*  que quieres comenzar en cierto elemento (0 equivalente a *Carrot*) y quieres parar **antes** de cierto otro elemento (2 equivalente a *Onion*), por lo que no incluye al elemento final indicado. 

#TODO: Not finished
