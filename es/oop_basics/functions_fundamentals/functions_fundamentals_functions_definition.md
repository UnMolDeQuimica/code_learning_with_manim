## Definición de funciones

Vamos a comenzar por definir una función. Primero de todo, crea un archivo `.py` en la carpeta que creaste para este proyecto con el entorno virtual activado. A este archivo en el que escribiremos nuestra primera función llámalo `mi_primera_funcion.py`. ¿Ya lo tienes? Pues escribe lo siguiente:

{% filename %}python{% endfilename %}
```python
def mi_primera_funcion():
    print("Ésta es mi primera función")

mi_primera_funcion()
```

Ahora en la terminal escribe

{% filename %} command-line{% endfilename %}
```bash
> python mi_primera_funcion.py
Esta es mi primera función
```

Vamos a ir paso a paso investigando qué ha pasado aquí:

1. **Definición de la función**: En la primera línea hemos escrito `def mi_primera_funcion():`. `def` es una palabra reservada en python para indicar que vamos a `def`inir una función. Esta función se llama `mi_primera_funcion`. Entre paréntesis de momento no hay nada, pero ya llegaremos. Por último, hemos puesto `:`. Esto indica que ya estamos listos para comenzar con lo que va a hacer nuestra función en las siguientes líneas. 

2. **Cosas que hace la función**: En pocas palabras, una función es una lista de tareas. En este caso, la lista solo tiene una orden: `print("Ésta es mi primera función")`. `print()` es una función incluida en python y manda a la consola el mensaje que le metamos, por lo que hemos llamado a una función dentro de otra función. 

3. **Llamar a la función**: En la línea 4 hemos escrito `mi_primera_funcion()`. Esto llama a la función y hace que se ejecute. Si eliminamos esa línea, la función no se ejecuta. 

4. **Ejecutar el código**: Al escribir en la consola `python mi_primera_funcion.py` le hemos dado una instrucción al ordenador: Dile a `python` que corra el código del archivo `mi_primera_funcion.py`
