# Uso básico del CLI de Manim

Un CLI (command line interface) es un conjunto de comandos que podemos lanzar desde la terminal para comunicarnos con un programa. En este caso, estamos intentando comunicarnos con Manim. Al crear tu primera animación, has utilizado el CLI de Manim para producir una animación de un cuadrado.

Ahora, sin modificar el archivo, utiliza el siguiente comando:

{% filename %}command-line{% endfilename %}

```command-line
> manim my_first_animation.py -ps
```

Lo que verás ya no es una animación, sino que se te abrirá  una imagen correspondiente al último fotograma de tu animación.

¿Cómo hemos hecho eso? Has cambiado la flag `-p` por la flag `-ps`, eso está claro. ¿Qué diferencia hay?

Por lo general, usaremos los siguiente comandos:

| Comando | Descripción            | Ejemplo                            |
| ------- | ----------------------- | ---------------------------------- |
| `-p`  | Ver animación al terminal el renderizado | `manim my_first_animation.py -p` |
| `-s` | Renderizar último fotograma | `manim my_first_animation.py -s`
| `-q`  | Nivel de calidad. Se puede elegir entre `l` (baja), `m` (media), `h` (alta) y `k`(muy alta)  |           `manim my_first_animation.py -qm`                         |

Además, podemos encadenar estos comandos para producir animaciones con disintas características. Por ejemplo si usamos el comando `manim my_first_animation.py -pqm`, se renderizará la animación en calidad media y se abrirá el video correspondiente cuando esté listo. Por otro lado, si usamos el comanto `manim my_first_animation.py -psql` se renderizará la animación en calida baja y se abrirá una imagen con el último fotograma. 

Puedes usar el comando `manim --help` o echar un vistazo a la [documentación](https://docs.manim.community/en/stable/guides/configuration.html?highlight=CLI#a-list-of-all-cli-flags) de manim para ver que otras flags hay disponibles. 