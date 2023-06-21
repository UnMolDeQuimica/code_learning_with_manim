# Entornos virtuales: Evitando el desastre

Cuando trabajamos con python es muy habitual hacer uso de funciones que no están incluidas en el propio python. Tanto si son librerías como si son paquetes como si son funciones sueltas, es necesario instalarlas en nuestro proyecto para poder hacer uso de ellas. 

Estos paquetes y librerías suelen tener actualizaciones que pueden hacer que nuestro proyecto deje de funcionar por incompatibilidades con otras librerías o simplemente porque han eliminado una funcionalidad que nosotros usábamos. Una opción es simplemente no actualizar las librerías y listo pero... ¿Qué ocurre si tengo otro proyecto distinto en el que necesito versiones distintas de las librerías?

La respuesta son los entornos virtuales. Estos entornos son como cajitas en las que podemos ir poniendo distintas versiones de paquetes en cada una, de forma que nuestros proyectos dependen de las versiones que están en su correspondiente cajita. 


¿No queda del todo claro aún? Pongamos un ejemplo con la propia librería Manim. 

En la versión 0.1.0 de Manim debíamos usar el método play de la siguiente forma: 

{% filename %}python{% endfilename %}
```python
>>> self.play(square.shift, LEFT)
```

Sin embargo, en la versión 0.2.0 la sintaxis se cambió a:

{% filename %}python{% endfilename %}
```python
>>> self.play(square.animate.shift(LEFT))
```

Si tuvieramos un proyecto que utiliza la versión 0.1.0 de Manim y otro que 
utiliza la versión 0.2.0, tenemos un problema, pues la sintaxis es distinta y no correrán ambos proyectos a la vez. 

Una solución muy sencilla es crear un entorno virtual para cada proyecto e instalar la versión de Manim que requiere cada uno. 

¿Cómo hacemos eso?

# Instalando pipenv

Existen muchas formas distintas de crear entornos virtuales para python. Una de las más sencillas y conocidas es la que usaremos en este curso: `pipenv`.

En Windows lo podemos instalar usando el comando:

{% filename %}Windows command-line{% endfilename %}
```bash
> pip install pipenv
```

En Ubuntu/Linux con:

{% filename %}Ubuntu/Linux command-line{% endfilename %}
```bash
$ sudo apt get install pipenv
```

Finalmente, en MacOS se puede instalar con brew:

{% filename %}Ubuntu/Linux command-line{% endfilename %}
```bash
% brew install pipenv
```

# Crear entornos virtuales

Crear un entorno virtual es tan sencillo como movernos a la carpeta en la cual queremos crear el entorno virtual y usar el siguiente comando:

{% filename %}command-line{% endfilename %}
```bash
> pipenv shell
```

De forma automática pipenv nos creará el entorno virtual y estaremos listos para utilizar nuestro entorno libre de interferencias con el mundo exterior. Fíjate que en la carpeta se habrá creado un archivo llamado `Pipfile`. En este archivo se escribirá automáticamente información como la versión de python que se utiliza y los paquetes que se vayan instalando en el entorno.

> **Comment** Cada vez que quieras acceder de nuevo al entorno virtual debes usar el mismo comando `pipenv shell` dentro de la misma carpeta. 

# Instalando paquetes dentro del entorno virtual

Una vez dentro del entorno virtual seremos capaces de instalar paquetes que funcionen única y exclusivamente dentro de ese entorno. Por ejemplo, podemos instalar el paquete numpy. Para ello usaremos el siguiente comando dentro del entorno virtual:

{% filename %} command-line{% endfilename %}
```bash
> pipenv install numpy
```

Ahora tenemos numpy instalado dentro de nuestro entorno y podremos usarlo siempre y cuando estemos dentro del entorno. Si salimos, no tendremos el paquete disponible. Además, se habrá creado un archivo `Pipenv.lock` con información similar a la del archivo `Pipefile`

# Paquetes instalados: pipenv.lock

Podemos listar todos los paquetes que tenemos instalados en nuestro entorno virtual usando el comando:

{% filename %}command-line{% endfilename %}
```bash
> pipenv lock
```

Esto nos creará un archivo llamado `Pipfile.lock` en el cual se guardarán referencias a todos los paquetes que hemos instalado, incluyendo versiones específicas. 

Este archivo es muy útil para compartir el conjunto de paquetes que utiliza un proyecto. Por ejemplo, si descargo un proyecto de github y este tiene un archivo Pipfile.lock puedo simplemente usar el comando `pipenv install`.


Esta no es la única forma de instalar paquetes en grupo. De hecho, la forma habitual es haciendo uso de un archivo llamado `requirements.txt`. Con pipenv podemos instalar desde requirements utilizando el comando:


{% filename %}command-line{% endfilename %}
```bash
> pipenv install -r requirements.txt 
```


# Deberes: Crear entorno virtual para nuestro proyecto. 

Ahora que ya sabes como [crear un proyecto con git](intro_to_git.md) y que sabes como crear un entorno virtual, es hora de que nos pongamos en marcha. Crea una carpeta específica para las animaciones tan chulas que quieres hacer y dentro inicializa un proyecto de git. ¡Seguidamente, crea un entorno virtual y listo!

Es importante que lo pruebes por tu cuenta, pero aquí tienes un ejemplo.

{% filename %}command-line{% endfilename %}
 ```bash
 > mkdir manim_animations
 > cd manim_animations
 > git init
 > pipenv shell
 ```
