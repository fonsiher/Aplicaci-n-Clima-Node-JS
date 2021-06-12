# Aplicación Datos Climatológicos en Node JS
App que devuelve datos básicos climatológicos del día actual tales como el clima, la humedad absoluta, la temperatura actual, y las temperaturas tanto máximas como mínimas estimadas según la ciudad que el usuario ingrese por consola.


### Pre-requisitos 📋

Para la realización y prueba del código mostrado en el repositorio se utilizó:
<ul>
  <li>Visual Studio Code</li>
  <li>Node JS  v14.16.0.</li>
  <li>NPM (Node Package Manager)</li>
</ul>
Si desea editar, modificar y ejecutar el código del repositorio necesitará disponer de las herramientas listadas. <br/>

### Instalación 🔧

<h4>Instalación del IDE Visual Studio Code</h4>
<p>Para trabajar con Javascript y Node es necesario ya instalación de un etorno de programación y ejecución <br/>
Si ya lo tienes instaldo pasa al siguiente punto.</p>
<ol>
<li>Se descarga  la última versión de Visual Studio Code, dependiendo de su S.O desde la  página oficial de <a href="https://code.visualstudio.com/Download">Visual Studio</a>. </li>
<li>Ejecutar el archivo descargado, y esperar a que culmine su instalación.</li>
<li>Con el Visual Studio Code instalado y ejecutado, se procede a instalar ciertos plugins necesarios para su buen funcionamiento, y ayuda a la hora de programar</li>
<ul>
<li>HTML CSS Support: Sirve para lograr autocompletar HTML como CSS para lograr un diseño más rápido de la página web. </li>
<li>VS Code JavaScript (ES6) snippets: Para lograr una construcción más rápida de código un poco más avanzado de JS, tales como funciones, objetos, constructores, entre otros. </li>
<li>VS Code JS, CSS, HTML Formatting: Brinda atajos de teclado para varias acciones dentro del IDE, además de que agrega una librería que muestra con colores según el uso o la funcionalidad del código para que se vea una forma más bonita y entendible</li>
<li>Terminal for Visual Studio Code: Se agrega un terminal dentro del mismo Visual Studio Code, que permite abrir ciertos archivos en el terminal, además de generar código directamente en el terminal</li>
<li>TypeScript Importer: Se da un autocompletado o atajos para ciertas funciones de Typescript. </li>
</ul>
<li>Finalmente se está listo para poder trabajar.</li>
</ol>

<br/>
<h4>Instalación de Node Js</h4>
<ol>
<li>-	Se descarga la versión LTS de la página oficial que reconocerá automáticamente el S.O en el que se esté trabajando:  <a href="https://nodejs.org/es/"> Descargar Node </a>
<li>Se aceptan los términos de la licencia y se procede a la instalación.</li>
<li>Una vez instalado para commprobar la correcta instalación se puede crear un pequeño programa en Visual Studio Code con extensión .js y se lo ejecuta en la terminal con el formato: <b>node app.js<b> </li>
  </ol> 
  
<br/>
<h4>Instalación de Node Package Manager NPM</h4>
<ol>
  <li>Para instalar npm hay que escribir en el terminal del Sistema Operativo o del propio Visual estudio:  «npm install npm@latest -g» y pulsar Intro</li>
  <li>Teniendo instalado NPM se coloca en el terminal: «npm init» , aquí dentro de nuestro proyecto aparecerá un archivo muy importante llamando package.json, mismo que muestra nombre, versión, descripción, autor, el archivo main, y finalmente muestra las dependencias del proyecto, es decir todos los paquetes o módulos que se hayan instalando para el proyecto en cuestión. </li>
  </ol>

## Despliegue 📦
<ol>
  <li>Teniendo instalado NPM  a la persona que quiera trabajar con el código traído desde un repositorio o de manera remota se descargará el código sin las librerías y dependencias del proyecto, pero las instará de forma sencilla mediante el comando de terminal «npm install»  que instalará todas las dependencias registradas en el archivo package.json</li>
 </ol>
  <h5> El programa utiliza la librería npm yargs, que permite que el programa pueda ejecutarse en la terminal al estilo de llamados por línea de comandos de bash </h5>
  <h5>El programa dispone un parámetro a ingresar: </h5
  <ul>
      <li>--ciudad -c: Nombre de la ciudad de la cual se desea obtener el clima</li>
  </ul> 

  <h3> El comando para la ejecución del programa se vería de la siguiente manera: </h3> 
  
  <ul>
    <li> Tomando ejemplo datos de la ciudad de DOHA en Qatar </li>
  </ul>
  
```
node app.js  -c "Doha" 
```

  
## Construido con 🛠️

  <h5> Librerías NPM </h5>
* [axios](https://www.npmjs.com/package/axios) - Cliente HTTP para navegadores y node.js basado en promesas.
* [yargs](https://www.npmjs.com/package/yargs) - Ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos y generando una elegante interfaz de usuario.
* [colors](https://www.npmjs.com/package/colors) - Dar color y estilo la impresiones por consola node.js


## Autor ✒️

* **Edwin Hernández** - *Estudiante Ingeniería en Ciencias de la Computación* - [fonsiher](https://github.com/fonsiher)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
