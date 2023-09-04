---
next: "[[bases_oop/fundamentos_de_funciones/Parámetros y argumentos|Parámetros y argumentos]]"
previous: "[[bases_oop/fundamentos_de_funciones/Indentación. Fundamental en python|Indentación. Fundamental en python]]"
parent: "[[bases_oop/fundamentos_de_funciones/Fundamentos de Funciones|Fundamentos de Funciones]]"
---
## Devolver valores
Hasta ahora hemos usado la función `print` para hacer que aparezcan mensajes en la consola. Sin embargo, a veces nos interesa que una función devuelva un valor específico sin que salga impreso. Para esto usamos la palabra reservada `return`. Veámos la siguiente función a modo de ejemplo:

```python title="python"
def ejemplo_de_return():
    return "Esto es un ejemplo"

ejemplo_de_return()
```

Si ejecutamos este código, veremos que no pasa nada. Metámos ahora un `print`:

```python title="python"
def ejemplo_de_return():
    return "Esto es un ejemplo"

print(ejemplo_de_return())
```

```shell title="Terminal"
python test_funcion.py
> "Esto es un ejemplo"
```

Ahora sí, podemos ver en la consola impreso el texto que hemos metido en la función. Prueba ahora a hacer lo mismo pero quitando el `return` a la función y verás que nada sucede.

### ¿Para qué sirve `return` entonces?

En pocas palabras, para lo que hemos hecho: poder usar los valores de una función y meterlos en algún otro lugar. En el ejemplo anterior hemos definido la función `ejemplo_de_return` como una función que *devuelve* el texto "Esto es un ejemplo". A la función `print` de más abajo le hemos dicho que imprimiera el resultado de la función `ejemplo_de_return`.

En la mayoría de casos no usaremos `print` para casi nada pero si que usaremos muchísimo `return`, ya que nos interesará conectar los resultados de unas funciones con otras funciones.