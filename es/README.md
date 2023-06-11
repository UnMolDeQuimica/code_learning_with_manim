# Introducción a la programación en python usando ManimCE

Este documento pretende ser una breve introducción al lenguaje de programación [`python`](https://www.python.org/) y a la programación en general utilizando la librería [ManimCE](https://www.manim.community/).

Para seguirlo no es necesario tener conocimientos previos de otros lenguajes de programación, aunque pueden resultar muy útiles. Además, por lo general estará centrado en Windows, aunque una vez instaladas la mayoría de dependencias no será problema el uso de otros sistemas operativos.

El sistema que seguiremos en este curso puede parecer poco convencional a los que tengan algo de experiencia en `python`. Por ejemplo se revisarán las bases de lo que es una clase antes de saber lo que es una variable. Sin embargo, está pensado para poder tener primero una imagen global de lo que es `python` e ir poco a poco profundizando en lo particular, de forma que revisitemos conceptos introducidos anteriormente o que habíamos usado sin darnos cuenta. Una vez tengamos las bases necesarias, nos introduciremos en ManimCE comenzando por los MObjects, siguiendo con las animaciones y terminando con métodos algo más complejos.

Dado que el objetivo del curso es presentar una introducción, no haremos cosas increíblemente complejas. Me basta con que aprendamos a hacer cosas simples y bellas que sirvan como base para que cada uno explore los límites de su imaginación.

A modo de resumen (y de guía durante la confección del documento), seguiremos los siguientes pasos:

- [ ] Primeros pasos
  - [ ] Uso básico de la interfaz de línea de comandos
  - [ ] Uso básico de git
  - [ ] Creación de entorno virtual
  - [ ] Instalación de Manim
  - [ ] Instalación de otras dependencias útiles
  - [ ] Editores de código

- [ ] Mi primera animación
  - [ ] Creación de archivo .py
  - [ ] Primera animación simple y sencilla
  - [ ] Uso básico del CLI de Manim
  - [ ] Archivos en manim

- [ ] Bases de OOP y Python

  - [ ] Fundamentos de Clases
  - [ ] Fundamentos de Funciones
  - [ ] Variables
    - [ ] Cadenas
    - [ ] Números
    - [ ] Booleanos
    - [ ] Listas
    - [ ] Tuplas
    - [ ] Sets
    - [ ] Diccionarios
  - [ ] Operaciones
  - [ ] Lógica
    - [ ] Condicionales
    - [ ] Bucles while
    - [ ] Bucles for
  - [ ] Comentarios y Docstrings
- [ ] Funciones: En mayor profundidad
  - [ ] Definición de funciones
  - [ ] Devolver valores
  - [ ] Parámetros y argumentos
  - [ ] Decoradores
  - [ ] Tipado de funciones

- [ ] Clases: En mayor profundidad
  - [ ] Definición de clases
  - [ ] Definición de métodos
  - [ ] Variables de clase
  - [ ] Método `__init__`
  - [ ] El `self`
  - [ ] Herencia: En profundidad
  - [ ] Sobreescritura de funciones

- [ ] Librerías y paquetes:
  - [ ] PyPI
  - [ ] Instalación de paquetes via pip
  - [ ] Uso de paquetes en un archivo .py
  - [ ] Librerías que deberías conocer
    - [ ] Numpy
    - [ ] Random
    - [ ] Otras que se me vayan ocurriendo por el camino
  - [ ] Documentación
  
- [ ] MObjects
  - [ ] VMObjects
  - [ ] ImageMObjects y leer archivos
  - [ ] Text
  - [ ] Tex y LaTeX
  - [ ] Group y VGroup
  - [ ] Dict y VDict
  - [ ] Métodos de los MObjects
  - [ ] MObjects personalizados

- [ ] Posicionamiento
  - [ ] self.add
  - [ ] mobject.shift
  - [ ] mobject.move_to
  - [ ] mobject.next_to
  - [ ] mobject.move_to
  - [ ] mobject.next_to

- [ ] Animaciones

  - [ ] FadeIn y FadeOut
  - [ ] Create, Write, Uncreate y Unwrite
  - [ ] Transform y ReplacementTransform
  - [ ] Método .animate
  - [ ] run_time y func_rate
  - [ ] AnimationGroup
  - [ ] Animaciones personalizadas

- [ ] Aumentando la complejidad

  - [ ] Numpy y Manim.
  - [ ] Cámaras
  - [ ] Gráficos
  - [ ] Updaters
  - [ ] Escenas 3D
  - [ ] Renderers
  - [ ] Plugins
  - [ ] Interactividad

- [ ] Ejercicios bastante más complejos

  - [ ] Pensar en ejercicios o buscarlos
    - [ ] Fractales
    - [ ] Espiral de números primos
    - [ ] Sorting algorithms