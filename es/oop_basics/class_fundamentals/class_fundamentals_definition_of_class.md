## Definición de clases

Igual que con las funciones, antes de nada, vamos a aprender cómo se define una clase. Supongamos que queremos crear una clase que represente lo que es una mesa. ¿Cómo lo hacemos? Hay extensos tratados de filosofía que versan sobre lo que es el ser, sobre la imposibilidad de definir perfectamente hasta el objeto más simple e incluso discuten sobre la existencia de la realidad. Pero vamos a los simple: Una mesa tiene cuatro patas, una longitud, una anchura, una altura y estará hecho de cierto material. ¡Vamos a crear una clase Mesa!

Para ello, crea un nuevo archivo .py al que llamaremos `mesa.py` y escribe el siguiente código.

{% filename %}python{% endfilename %}
```python
class Mesa:
    patas = 4
    longitud = 2
    anchura = 1
    altura = 1.2
    material = "Madera"
```

Esto está muy bien, pero por lo general deberíamos usar el inglés a la hora de programar. Hasta ahora te he dejado hacer las cosas en castellano, pero eso se acabó. En este tutorial se habla en inglés. No es que el inglés sea un idioma mejor, es simplemente la lengua franca de nuestro tiempo y ayuda a la comunicación. La vida sería muy difícil si cada uno programara en su propia lengua. Con una lengua común, podemos entender código escrito por cualquiera.

Borra tu archivo `mesa.py` y crea otro llamado `table.py`. Además, vamos a reescribir el código:

{% filename %}python{% endfilename %}
```python
class Table:
    legs = 4
    lenght = 2
    widht = 1
    height = 1.2
    material = "Wood"
```

¡Eso es! Ahora que tenemos nuestra clase `Table` creada, añade esto justo debajo. 

{% filename %}python{% endfilename %}
```python
print(Table.legs)
```

Si ejecutas el código, deberías ver en consola que se devuelve el valor `4`.

> **Hint** **¡Fíjate!** Aquí también estamos indentando igual que en las funciones. Todo aquello que forme parte de la clase debe estar al menos a un nivel de indentación, esto es, con cuatro espacios antes. 


¡Enhorabuena! Has creado tu primera clase. 
