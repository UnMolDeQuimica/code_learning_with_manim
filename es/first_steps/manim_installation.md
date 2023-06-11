# Instalando Manim

La instalación de Manim puede seguirse en la [documentación oficial del proyecto](https://docs.manim.community/en/stable/installation.html), por lo que no me detendré a explicar el proceso. 

Aprovecharé este espacio para poder explicar qué estamos instalando. 

Además, daré una pequeña anotación para los usuarios de Windows, para los cuales este proceso puede matar varios pájaros de un solo tiro. 

## Windows

Si eres usuario de Windows, espero que hayas venido directo desde la [instalación de python](installing_python.md#windows). Necesito que antes de continuar instales una cosilla sabrosa llamada `chocolatey`. Para ello, puedes seguir las instrucciones que encontrarás [aquí](https://chocolatey.org/install), pero se resume en utilizar los siguientes comandos:

{% filename %} command-line{% endfilename %}
```command-line
> Set-ExecutionPolicy AllSigned
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Tras la instalación, usa el comando `choco` para comprobar que todo está ok. Si todo funciona correctamente, usa el comando `choco install manimce`. Con esto habrás instalado de un plumazo manim y python3. 

Ahora puedes ir al apartado de [entornos virtuales](virtualenvirontments. md) y continuar desde allí.

# ¿Qué estamos instalando?

Manim es una librería que permite la creación de animaciones mediante código python. Para conseguirlo, depende de muchas librerías (tanto de python como de externos). Entre las principales librerías externas a python tenemos las siguientes:

* [Cairo](https://www.cairographics.org/): Librería para la creación de gráficos 2D. 
* [OpenGL](https://www.opengl.org/): Librería para el renderizado de gráficos 3D.
* [FFmpeg](https://ffmpeg.org/): Con Cairo y OpenGL generamos fotogramas. FFmpeg se encarga de encadenar esos fotogramas para generar videos. 

Todo lo demás son paquetes de python que ayudan a facilitar el proceso de crear las animaciones via código python. Por ejemplo, tenemos a [`NumPy`](https://numpy.org/), una librería de python utilizada para hacer gran cantidad de cálculos con gran eficiencia.

