---
previous: "[[bases_oop/fundamentos_de_funciones/Experimentando un poco|Experimentando un poco]]"
next: "[[bases_oop/fundamentos_de_funciones/Devolver valores|Devolver valores]]"
parent: "[[bases_oop/fundamentos_de_funciones/Fundamentos de Funciones|Fundamentos de Funciones]]"
---
## Indentación: Fundamental en python

`python` es un lenguaje que requiere de indentación. Esto quiere decir que tenemos que escribir espacios en blanco para que python sepa a qué pertenecen las cosas. Volvamos a nuestra función ejemplo:

```python title="python"
def mi_segunda_funcion(): # Línea sin indentación
    print("Ésta es mi primera función") # Línea con indentación
    print("¡Y ahora he añadido una nueva línea!") # Línea con indentación
# Linea en blanco
mi_primera_funcion() # Línea sin indentación
```


La línea 1 comienza con la palabra `def` con la `d` en el espacio correspondiente al primer caracter. Sin embargo, la segunda línea comienza con cuatro espacios vacíos y luego la palabra `print`. Dejar estos espacios vacíos se llama *indentación* y es fundamental en python.


> [!abstract]Importante
> Por lo general, las indentaciones deben contener 4 espacios. Los editores de código suelen venir por defecto con esta configuración y, al apretar la tecla `tab` suelen aplicar los 4 espacios de golpe, evitando así que tengamos que meterlos a mano. Es importante verificarlo por si acaso, ya que a veces vienen con 2 por defecto.

Si quitas la indentación a la línea 3 pasa lo siguiente:

```python title="python"
def mi_segunda_funcion(): # Línea sin indentación
    print("Ésta es mi primera función") # Línea con indentación
print("¡Y ahora he añadido una nueva línea!") # Línea con indentación
# Linea en blanco
mi_primera_funcion() # Línea sin indentación
```

```shell title="Terminal"
python test_funcion.py
> ¡Y ahora he añadido una nueva línea!
> Ésta es mi primera función
```
  
¿Por qué pasa esto? Básicamente le hemos dicho a python
 

>¡Eh! ¡He creado una función llamada `mi_segunda_funcion` que lo que hace es escribir en la consola `"Ésta es mi primera función"`. Ahora que sabes que he hecho esta función, escribe `¡Y ahora he añadido una nueva línea!`. Por último, llama a la función `mi_segunda_funcion`. 

Esto se lo hemos especificado quitando la indentación en la línea 3. De deberes te devolver a la función original sin usar `ctrl+z` y sin copiar ejemplos anteriores. Debes añadir la indentación por tu cuenta.

> [!danger]PELIGRO
> No me cansaré de decirlo. Fíjate en la indentación para estar seguro de que tu código hace lo que tú quieres que haga. Más adelante veremos que la indentación es necesaria en muchas otras partes del código.