## Parámetros y argumentos

Hasta ahora hemos estado usando funciones como `def mi_funcion()`, pero podemos hacer algo más interesante si rellenamos esos paréntesis con algo. 

Escribe el siguiente código en tu archivo:

{% filename %}python{% endfilename %}
```python
def sumar(a, b):
    print(a+b)

sumar(2, 3)
```

¿Qué acabamos de hacer? Hemos creado una función llamada `sumar` a la que le metemos dos **parámtros**: *a* y *b*. Esta función va a sumar *a* y *b* y va a imprimir el resultado en la consola. Si ejecutas el código, verás que devuelve `5` como resultado. Esto es porque hemos metido como **argumentos** los números 2 y 3, que sustituyen a *a* y a *b*. ¡Prueba a cambiar los números dentro de `sumar`!

¿Cuál es la diferencia entre *parámetros* y *argumentos*? En pocas palabras, *parámetro* serían *a* y *b*, los nombres con los que hemos definido lo que le vamos a meter a la función. Por otro lado, los *argumentos* son los valores que realmente hemos introducido realmente en la función. 
