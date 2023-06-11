# Archivos en Manim

Al crear una animación por primera vez, verás que en la carpeta donde has hecho la animación ha aparecido otra carpeta llamada `media`. Esa carpeta contiene los resultados (tanto finales como parciales) de las animaciones. 

Ahora mismo, deberías ver dos carpetas: `images` que contiene las imagenes .png resultantes de cuando corremos manim con la flag `-s` y `videos`, que contiene las animaciones creadas en formato .mp4. 

En cada carpeta habrá otra carpeta específica para cada archivo .py, en este caso se debería llamar `my_first_animation`. Dentro de cada una de ellas, habrá una carpeta por cada nivel de calidad que hayas elegido, por ejemplo 1080p60. Por último, dentro de cada carpeta habrá un archivo .mp4 con el nombre que le dimos a la clase dentro de nuestro código de python. En nuestro caso es `FirstAnimation`. Si lo abres, verás que es exactamente la misma animación que vimos antes. Ahí es donde vive. 

De forma un tanto más visual, la estructura queda algo así:

```
├── media
│   ├── images
│   │   └── test
│   │       └── Test_ManimCE_v0.17.3.png
│   └── videos
│       └── my_first_animation
│           └── 1080p60
│               ├── partial_movie_files
│               │   └── FirstAnimation
│               │       ├── 1413466013_3532544039_223132457.mp4
│               │       └── partial_movie_file_list.txt
│               └── FirstAnimation.mp4
├── Pipfile
└── test.py
```