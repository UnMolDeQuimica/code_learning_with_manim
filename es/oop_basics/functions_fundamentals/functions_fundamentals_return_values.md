## Devolver valores

Hasta ahora hemos usado la función `print` para hacer que aparezcan mensajes en la consola. Sin embargo, a veces nos interesa que una función devuelva un valor específico sin que salga impreso. Para esto usamos la palabra reservada `return`. Veámos la siguiente función a modo de ejemplo:

{% filename %}python{% endfilename %}
```python
def ejemplo_de_return():
    return "Esto es un ejemplo"

ejemplo_de_return()
```

Si ejecutamos este código, veremos que no pasa nada. Metámos ahora un `print`:

{% filename %}python{% endfilename %}
```python
def ejemplo_de_return():
    return "Esto es un ejemplo"

print(ejemplo_de_return())
```

{% filename %}command-line{% endfilename %}
```bash
> python test_funcion.py
"Esto es un ejemplo"
```

Ahora sí, podemos ver en la consola impreso el texto que hemos metido en la función. Prueba ahora a hacer lo mismo pero quitando el `return` a la función y verás que nada sucede. 

### ¿Para qué sirve `return` entonces?

En pocas palabras, para lo que hemos hecho: poder usar los valores de una función y meterlos en algun otro lugar. En el ejemplo anterior hemos definido la función `ejemplo_de_return` como una función que *devuelve* el texto "Esto es un ejemplo". A la función `print` de más abajo le hemos dicho que imprimiera el resultado de la función `ejemplo_de_return`.

En la mayoría de casos no usaremos `print` para casi nada pero si que usaremos muchísimo `return`, ya que nos interesará conectar los resultados de unas funciones con otras funciones. 
