## Experimentando un poco

### Renombrando el archivo

Vamos a probar a hacer unas cuantas cosas. Comencemos por renombrar el archivo a otra cosa. Por ejemplo: `test_funcion.py`.

¿Qué tendríamos que hacer para correr el código en esta ocasión? La respuesta es usar el siguiente comando:

{% filename %}command-line{% endfilename %}
```command-line
> python test_funcion.py
Esta es mi primera función
```
Como ves, el nombre del archivo solo tiene importancia a la hora de ejecutarlo. 

>**Hint** Prueba a ejecutar el archivo `mi_primera_funcion.py`. Como ya no existe (recuerda que lo hemos renombrado), python devolverá un error quejándose de que el archivo no existe. Poco a poco nos iremos familiarizando con distintos tipos de errores. ¡No les tengas miedo! ¡Resolver errores es una parte importante de hacer código!

### Eliminando la llamada de la función

Ahora probemos a eliminar el llamado de la función. En otras palabras, borramos la línea 4 del código. Si quieres, borra también la 3. Total, no hay nada escrito ahí. Debería quedarte algo así. 

{% filename %}python{% endfilename %}
```python
def mi_primera_funcion():
    print("Ésta es mi primera función")
```

¿Qué crees que veremos cuando en la terminal escribamos `python test_funcion.py`?

La respuesta: Nada de nada. No estamos llamando a la función en ningun lado, así que no se ejecutará jamás.

### Añadiendo tareas a la función

Hemos dicho que una función es como una lista de tareas. Lo siguiente va a ser añadirle más cosas a la lista. Escribe de nuevo la llamada a la función y, justo debajo de `print("Ésta es mi primera función")` escribe otra instrucción. Por ejemplo, añade `print("¡Y ahora he añadido una nueva línea!")`

Ejecuta el programa como hemos hecho hasta ahora y deberías ver algo así:

{% filename %}command-line{% endfilename %}
```command-line
> python test_funcion.py
Esta es mi primera función
¡Y ahora he añadido una nueva línea!
```


### Cambiando el nombre a la función
Por último, vamos a probar a renombrar a la función sin cambiar la línea 5, línea en la que estamos llamando a la función. Por ejemplo, ponle por nombre `mi_segunda_funcion`. No hemos modificado la línea 4, por lo que el código queda algo así:


{% filename %}python{% endfilename %}
```python
def mi_segunda_funcion():
    print("Ésta es mi primera función")
    print("¡Y ahora he añadido una nueva línea!")

mi_primera_funcion()
```

¿Qué crees que pase cuando ejecutemos el código?

Respuesta: Vamos a obtener un error que va a tener esta pinta:

{% filename %}command-line{% endfilename %}
```command-line
> python test_funcion.py
Traceback (most recent call last):
  File "/test_funcion.py", line 5, in <module>
    mi_primera_funcion()
NameError: name 'mi_primera_funcion' is not defined. Did you mean: 'mi_segunda_funcion'?
```

Como ves, nos está diciendo que al ejecutar el archivo `test_funcion` ha dado un error llamado `NameError` en la línea 5. Este error significa que hay algo que tiene un nombre equivocado. `python` intenta ayudarte y te da todas las pistas que puede. En este caso te pregunta si en realidad querías decir `mi segunda_funcion`. Y mira tu por donde, tiene razón. No siempre es tan fácil solucionar un error, pero en este caso está claro como el agua. ¿Te atreves a intentar solucionarlo?

