# Git gud con git:

¿Qué es git?

Git es un sistema de control de versiones creado por Linus Torvalds en 2005.

De acuerdo. Otra vez: ¿Qué es git?

> *Git es un sistema de control de versiones distribuido de naturaleza décentralisée que impregna una amalgama sinérgica de teoría de grafos dirigidos acíclicos, funciones hash criptográficas y principios de conjuntos diferenciales. Este ingenioso artefacto matemático, concebido para registrar la evolución histórica de un proyecto, utiliza el poder del grafo para estructurar y visualizar las relaciones jerárquicas entre los commits, mientras que las funciones hash confieren integridad y unicidad a los identificadores de los objetos. Mediante la utilización de conjuntos de cambios, Git administra eficazmente las diferencias entre los estados de los archivos, plasmando así la esencia misma de la transformación diferencial. En suma, Git, con su elegante orquestación de conceptos matemáticos, se erige como una herramienta imprescindible para el control y la coordinación de las versiones, permitiendo a los artífices del software entrelazar la trama histórica de sus creaciones con maestría y solvencia.*
>
> <cite>Chat GPT</cite>

Venga va, vamos a una pregunta más fácil:

# ¿Para qué usamos git?

Supongamos que tenemos un archivo de texto llamado `receta.txt` y que tiene dentro una receta para preparar tortilla de patatas. Aunque la tortilla que hacemos siguiedo la receta está buena, sabemos que la podemos mejorar. Se nos ocurre introducir cebolla como nuevo ingrediente, así que abrimos nuestro archivo `receta.txt`, lo editamos y guardamos. Efectivamente, la tortilla nos ha salido mejor que antes. Sin embargo, sospechamos que podemos ir incluso a mejor y añadimos curry a la lista de ingredientes igual que antes. Error fatal: Ahora la tortilla sabe a rayos, asi que decidimos eliminar al curry de nuestra lista abriendo el archivo, editandolo de nuevo y guardando otra vez. 


Un dia decidimos compartir nuestra receta con algunos amigos, pero no se fían un pelo de nuestras habilidades culinarias y quieren saber qué proceso hemos seguido para llegar a tener la receta de tortilla de patatas ideal. Como nos ha llevado años perfeccionar la técnica, no nos acordamos exactamente de todos los pasos y cuando nos preguntan por este o aquel ingrediente no estamos seguros de si los llegamos a usar o no.

Para salvar la situación en próximas ocasiones, podríamos anotar en el propio archivo los cambios que estamos realizandoa  modo de comentario de tal manera que podamos entender en qué pensabamos cuando añadimos o quitamos ingredientes. Sin embargo eso puede ensuciar mucho la receta y en lugar de leer los pasos a seguir, estamos leyendo el historial de cambios de la receta. 

En su lugar, podríamos tener otra archivo llamado `cambios.txt` en el cual anotemos todos los cambios que hacemos, cuando los hemos hecho y, especialmente, por qué los hemos hecho. 

Git es un sistema que hace la misma función que el archivo `cambios.txt` pero de forma mucho más eficiente y eficaz, además de tener otras muchas funciones que nos ayudan en el desarrollo de software. 


## Instalar git

La instalación de git es diferente en cada sistema operativo. Dado que este documento puede quedarse obsoleto, recomiendo seguir las instrucciones de la [documentación oficial](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


## Aprender con un ejemplo

### Crear reposotorio de git en local
Ahora que tenemos git instalado, vamos a empezar con un ejemplo. Para ello, vamos a abrir una terminal y a crear una carpeta llamada `git_practice` de forma similar a como hicimos en [Uso básico de la interfaz de línea de comandos](command_line.md) e iniciaremos el repositorio de git con el comando `git init`

{% filename %}command-line{% endfilename %}
```command-line
> mkdir git_practice
> cd git_practice
> git init
Inicializado repositorio Git vacío en /home/miguel/git_practice/.git/
```

Este último mensaje significa que ahora git estará vigilando los cambios que realizamos en la carpeta git_practice.

### Creación de credenciales en local
Para poder indicar quienes realizan los cambios en el repositorio, es necesario utilizar los siguientes comandos indicando tu nombre y tu email:

{% filename %}command-line{% endfilename %}
```command-line
git config --global user.name "Miguel Ángel"
git config --global user.email "unmoldequimica@gmail.com"
```


### Creando archivos en git: `git add` y `git commit`

Ahora que tenemos nuestro repositorio inicializado y nuestras credenciales indicadas, podemos crear un archivo nuevo llamado `receta.txt`. En windows podemos abrir la carpeta y crear un archivo de texto nuevo con el bloc de notas. En Ubuntu/Linux y MacOS podemos hacer lo mismo o podemos usar el comando `touch`:

{% filename %}Ubuntu/Linux and MacOS command-line{% endfilename %}
```command-line
$ touch receta.txt
```

En cualquier sistema operativo podemos usar el comando `git status` para que se nos muestren los cambios que hemos realizado en nuestra carpeta git_practice:

{% filename %}command-line{% endfilename %}
```command-line
> git status
En la rama master

No hay commits todavía

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
	receta.txt

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)
```

Podemos ver que git sabe que hemos creato el archivo `receta.txt` pero aún no está monitorizando los cambios que le hemos realizado. Para ello, usaremos el comando `git add <nombre-del-archivo>`, lo cual añadirá el archivo a la zona de stage. Si volvemos a usar el comando `git status` veremos que los cambios están pendientes de ser confirmados:

{% filename %}command-line{% endfilename %}
```command-line
> git add receta.txt
> git status
En la rama master

No hay commits todavía

Cambios a ser confirmados:
  (usa "git rm --cached <archivo>..." para sacar del área de stage)
	nuevos archivos: receta.txt
```

> **Info** Información extra: En ocasiones realizaremos muchos cambios en muchos archivos diferentes. Ir uno a uno puede resultar tedioso. Para añadirlos todos al área de stage podemos usar el comando `git add .`


La confirmación de los cambios se hace mediante *commits*. Una forma de enteder los commits es como fotos del estado de nuestros archivos. Cuando usamos el comando `git add` estamos colocando a los archivos delante de la cámara. Cuando usamos el comando `git commit` estamos presionando el botón para hacer la fotografía. Además, esta fotografía debe llevar, casi obligatoriamente, una etiqueta que nos ayude a entender por qué hemos hecho la foto en ese momento. En este caso, podemos usar el siguiente comando:

{% filename %}command-line{% endfilename %}
```command-line
> git commit -m "Creates receta.txt file"
[master (commit-raíz) 7914d38] Creates receta.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 receta.txt

```

Veámos que hemos escrito: `git commit` indica a git que comando queremos usar, en este caso `commit`. `-m` indica que queremos incluir un mensaje. Te recomiendo hacerlo de esta forma por el momento. Si no incluyes el `-m`, git automáticamente te llevará al editor vim para que introduzcas un mensaje y [créeme que no quieres eso](https://preview.redd.it/46nxs3303bo21.jpg?auto=webp&s=5ea3df4b5adb05585fa72961878583bf093b81cd). Por último, entre comillas introducimos nuestro mensaje. 


> **Danger** Enserio: No te olvides de usar `-m`. Vim es un poder que debería mantenerse lejos de los principiantes por su salud mental. 

### Creando ramas: `git branch`

Una de las enormes ventajas de git es la posibilidad de trabajar en paralelo con otras personas sin interferir mucho los unos con los otros. Para ello, existe el comando `git branch` que nos permite crear ramas de nuestro repositorio que luego podremos integrar de nuevo con la rama principal. Si te fijas, en el mensaje anterior nos ha indicado la palabra `master`.`master` es la rama que se crea por defecto en git inicialmente. Si hacer commit es como sacer una foto de tus archivos, una rama es hacer una copia de tus archivos para que les hagas nuevas fotos y poder decidir más adelante si esas son las fotos con las que te quedas finalmente o no. Por su lado, tus compañeros pueden hacer sus propias copias con sus propias fotos y así nadie se molesta con nadie. 

> **Note** Nota: El comando para crear ramas es `git branch "<nombre-de-tu-rama>"`, pero para movernos a la rama nueva debemos usar el comando `git switch <nombre-de-tu-rama>` (sin las comillas). Se puede hacer todo de una sola vez usando el comando `git checkout -b "<nombre-de-tu-rama>"`

Vamos a crear una rama llamada _`first_ingredients`_ en la que vamos a añadir los principales ingredientes a nuestra receta:

{% filename %}command-line{% endfilename %}
```command-line
> git branch "first_ingredients"
> git switch first_ingredients
Cambiado a rama 'first_ingredients'
```

Ahora abrimos el archivo y añadimos los ingredientes. Por ejemplo:
{% filename %}bloc de notas: receta.txt{% endfilename %}
```
Ingredientes:
- Huevos
- Patata
- Sal
- Pimienta
```

Guardamos y comitamos los cambios:

{% filename %}command-line{% endfilename %}
```command-line
> git add receta.txt
> git commit -m "Adds basic ingredients"
En la rama first_ingredients
nada para hacer commit, el árbol de trabajo está limpio
```

Con esto ya hemos hecho los cambios en nuestra rama _`first_ingredients`_.


### Juntando ramas: `git merge`

Hagámos una experimento rápido: Vayámos a nuestra rama master y abramos nuestro archivo `receta.txt` a ver que nos encontramos:

{% filename %}command-line{% endfilename %}
```command-line
> git switch master
Cambiado a rama 'master'
```

Si abrimos el archivo, veremos que está vacio. ¿Y MIS CAMBIOS DÓNDE ESTÁN?

Tranqui, los cambios están en la rama _`first_ingredients`_, por lo que es normal que no estén en la rama _`master`_. Si los quieres traer, hay que usar el comando `git merge <nombre-de-tu-rama>`:

{% filename %}command-line{% endfilename %}
```command-line
> git merge first_ingredients
Actualizando 7914d38..3f4afcc
Fast-forward
 receta.txt | 5 +++++
 1 file changed, 5 insertions(+)
```

Si abres de nuevo el archivo, verás que están todos los cambios que hemos hecho. Sé que si estás tu solo, este flujo parece de lo más innecesario pero créeme, si trabajas con otras personas o estás en un proyecto complejo en el que quieres probar grandes cambios sin romper tu código, es muy útil. 


### Volviendo a cambios anteriores: `git log` y `git reverse`

Vamos a liarla un poco. Vamos a borrar todo lo que hay en el archivo y vamos a hacer un commit: 

{% filename %}command-line{% endfilename %}
```command-line
> git add receta.txt
> git commit -m "I deleted everything muahahahahahah"
[master 28d75a6] I deleted everything muahahahahahah
 1 file changed, 5 deletions(-)
```

¿Qué pasa si quiero recuperar la lista que tenía? Podemos usar el comando `git log` para ver todos los commits que se han hecho hasta ahora:

{% filename %}command-line{% endfilename %}
```command-line
>  git log
commit 28d75a6eb72d029bca4d10c70616b0fae95a38fd (HEAD -> master)
Author: Miguel Ángel Rodríguez Vidal <unmoldequimica@gmail.com>
Date:   Sun Jun 11 21:14:21 2023 +0200

    I deleted everything muahahahahahah

commit 3f4afcc990bcb6fc3404d51b9abe0c747d76af26 (first_ingredients)
Author: Miguel Ángel Rodríguez Vidal <unmoldequimica@gmail.com>
Date:   Sun Jun 11 21:09:42 2023 +0200

    Adds basic ingredients

commit 7914d38d4b5bcb803c11938f34ed50d373b51ff6
Author: Miguel Ángel Rodríguez Vidal <unmoldequimica@gmail.com>
Date:   Sun Jun 11 20:39:28 2023 +0200

    Creates receta.txt file
```

Podemos ver que el commit que queremos eliminar es en el que hemos eliminado cosas. Es fácil de identificar gracias al comentario que hemos puesto. Su código identificador comienza por `28d75a6` y eso es más que suficiente para volver atrás. Para ello, usamos el comando `git revert` de la siguiente manera:

{% filename %}command-line{% endfilename %}
```command-line
> git revert --no-edit 28d75a6 
[master 1fdebb6] Revert "I deleted everything muahahahahahah"
 1 file changed, 5 insertions(+)
```

Con esto hemos vuelto a atrás y se ha escrito automáticamente un mensaje indicando esta acción. Si no puedes salir del log, presiona la tecla q. 


> **Note** Por supuesto puedes escribir un mensaje personalizado si quieres especificar el motivo del revert. ¿Te animas a probar?


# Subiendo mis archivos a la nube: github

Como último paso, vamos a compartir nuestra receta por el mundo. Para ello, vamos a crear un repositorio nuevo en [github.com](www.github.com). Github almacena tu código (y el de muchísima otra gente) para que puedas tenerlo en la nube y cualquiera tenga acceso a él. Por supuesto, siempre puedes hacer que un repositorio sea privado y que nadie lo mire ni lo toque. Cuando el repositorio es público, los usuarios de github podrán clonar tu repositorio y hacer cambios en sus ramas locales. Esas ramas podrán subirlas a github y podrán crear _Pull requests_, en las que podrás ver los cambios que han realizado y decidir si entran al código principal o no. 

Además, podrán abrir _issues_, lo que significa que podrán reportar errores en el código o podrán solicitar otro tipo de mejoras que tú u otro colaborador podéis trabajar en un _Pull request_. 

Por otra parte, tu también podrás hacer exactamente lo mismo pero con los proyectos de otros. Los podrás clonar, podrás solicitar mejoras y podrás contribuir. 

Para entrar a todo este hermoso mundo, regístrate y crea un repositorio vacío como se indica en [las instrucciones](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) y seguidamente sigue [estos otros pasos](https://docs.github.com/es/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github). Me gustaría describirlos aquí, pero pueden estar sujetos a cambios y mejor tener a mano siempre la documentación oficial de github. 

> **Info** Dato: Una vez tengas configurada tu cuenta al 100 %, podrás subir al repositorio remoto las ramas que hayas [creado localmente](#creando-ramas-git-branch) usando el comando `git push`. ¡Ánimo!


# Mucho git por conocer

Git es algo que se aprende a usar en el día a día. Hay mil y un comandos que no hemos explorado porque esto es un curso de python y de Manim, no de git. Sin embargo, te animo a echarle un vistazo a la [documentación oficial](https://git-scm.com/doc) y a investigar por tu propia cuenta. 

Te recomiendo visitar repositorios como el [ManimCE](https://github.com/ManimCommunity/manim) y te pasees largo y tendido por ahí para que veas el gran poder de git en acción. Y ya, si quieres petarlo, puedes contribuir a la comunidad solucionando los posibles _issues_ que pueda haber. Pero antes de eso: ¡continúa con el tutorial para aprender a programar con python!
