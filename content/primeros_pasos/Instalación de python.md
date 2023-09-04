---
previous: '[[primeros_pasos/Uso básico de git|Uso básico de git]]'
next: '[[primeros_pasos/Creación de un entorno virtual|Creación de un entorno virtual]]'
parent: '[[primeros_pasos/Primeros pasos|Primeros pasos]]'
---
# Instalar python: Cada uno a su bola

  

Python es un lenguaje de programación multiplataforma. Esto significa que podemos correr código `python` en distintos sistemas operativos y en distinto hardware sin tener que modificar el código.

  

Por desgracia, que el código funcione o no depende más de la [[glosario/Versiones de python|versión de `python`]]  que otra cosa. Al momento de realizar este curso la versión de `python` más actual es `python 3`, más concretamente `python 3.11.4`. Cada versión trae cambios, mayores o menores, así que hay que estar al tanto de qué versión estamos usando para asegurarnos de que nuestro código funciona.

  

Existen herramientas como [pyenv](https://github.com/pyenv/pyenv) que permiten tener varias versiones de `python` en local, pero no nos vamos a meter en eso de momento. Para seguir este tutorial, cualquier versión de `python` superior a la 3.8 debería ser suficiente, aunque se recomienda la versión más actual.

  

En cualquier caso, la instalación de `python` es diferente en cada sistema operativo. Lo ideal sería que siguieras las indicaciones de cada sistema, pero te resumo aquí los pasos que vamos a seguir.

  

## Windows

  

Si ya tienes una versión de `python` instalada, excelente. Si no la tienes, no te preocupes. Pasa directamente a la sección de [[primeros_pasos/Instalación de Manim|instalar manim]].

  
  

## Ubuntu/Linux

  

Ubuntu viene con una versión de `python` instalada por defecto. Para comprobar que versión tienes, utiliza el comando `python3 -V` y verás algo así:

  


```console title="Terminal Linux/Mac"
python3 -V
Python 3.10.6 
```

  
  

Además, será necesario que instales pip3. Para ello, utilizar los siguientes comandos:

  


```console title="Terminal Linux/Mac"
sudo apt update # Actualiza el árbol de paquetes
sudo apt get install python3-pip # Instala pip
```

  

## MacOs

  

Para instalar `python` en MacOS te recomiendo usar `Hombrew`. [Sigue este](https://docs.python-guide.org/starting/install3/osx/) tutorial para instalar `Homebrew` y `python`.