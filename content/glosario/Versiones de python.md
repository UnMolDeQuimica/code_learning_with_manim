Seguro que alguna vez has visto en tu móvil que hay aplicaciones que se actualizan. Esto significa que antes había un código en una versión y ahora lo han cambiado a una nueva versión. 

Con `python` pasa algo parecido. Existen varias [versiones de `python`](https://www.python.org/doc/versions/) con diferentes funciones y características. Eso significa que es posible que haya código que en una versión funcione y en otra no, especialmente cuando hablamos de cambios muy grandes. 

A la hora de cambiar de versión existen varios formatos. Python se rige por el sistema *MAJOR.MINOR.PATCH*, en el cual el primer número indica una versión principal de python, el segundo un pequeño cambio dentro de esa versión y el tercero un arreglo respecto a los cambios del segundo número. 

Por ejemplo, tenemos `python 2.7.1` , que cuenta con las características principales de `python 2.0` más algunas adicionales que lo han llevado a la versión `2.7`. Había cosas que se rompían porque nadie es perfecto, así que las han arreglado y han lanzado la versión `2.7.1`. 

Si hicieras una librería usando `python 2.7.1` y luego intentaras correrla en `python 3.7.1`, es posible que no funcione, ya que hay grandes cambios de la versión 3 a la versión 2, especialmente de sintaxis. Si intentas usar una librería hecha en `python 3.7.1` en `python 2.7.1`, lo más seguro es que no funcione, ya que muchas funcionalidades nuevas que no estaban presentes antes y, por lo tanto, `python 2.7.1` no sabe que hacer con todo esto. 

Una forma de gestionar versiones de `python` dentro de un mismo ordenador es [pyenv](https://github.com/pyenv/pyenv), aunque se escapa del alcance de este cursillo. 