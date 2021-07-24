import { saludar } from "./js/componentes";
import "./styles.css";

const nombre = "Fernando";

saludar(nombre);

//Github
//Abrimos la terminal git-bash y realizamos la siguientes configuracion:
//definimos el nombre de usuario: git config --global user.name "Isaias"
//definimos el correo: git config --global user.email "arqisaias@live.com.mx"
//definimos los colores y que sean mas claros: git config --global color.ui auto
//Inicializamos nuestro repositorio a traves de la terminal en VSCode dentro de nuestro
//proyecto, le indicamos a git que vamos a empezar a trabajar en el proyecto
//Comando: git init
//Antes de comenzar a trabajar es importante crear un archivo de configuracion
//llamado gitignore y se le pone un punto al principio para mantenerlo oculto de cualquier
//configuracion malintencionada de terceros
//.gitignore //aqui pondremos las carpetas que no tendran ningun cambio o seguimiento,
//dentro pondremos lo siguiente:
//node_modules/
//dist/
//En consola ejecutamos el siguiente comando:
//git add .
//Una vez que nuestro proyecto este terminado, con esta funcion le decimos a git que
//nos cree una fotografia de todo nuestro proyecto para volver a restaurarlo como esta
//originalmente en caso de cualquier modificacion o eliminacion no deseada
//Para realizar la fotografia le decimos a git que lo ejecute mediante el siguiente
//comando: git commit -m "proyecto inicializado"
//Para restaurar nuestro proyecto por cualquier modificacion o eliminacion
//de cualquier carpeta mal intencionada se ejecuta el siguiente comando:
//git checkout -- .
//Siguiente paso: Crear un nuevo repositorio en Github
//una vez creado el repositorio, tenemos que copiar y pegar el siguiente comando:
//git remote add origin https://github.com/Arqui-soft/webpack-starter.git
//git branch -M main
//git push -u origin main
//actualizamos la pagina y automaticamente ya aparecera nuestro repositorio en Github
//Si nos ubicamos un poco mas abajo se observa que pondemos añadir un README a nuestro
//proyecto, el cual consiste en agregar informacion adicional a nuestro proyecto
//como informar de que se trata la aplicacion o informacion que sea relevante.
//Para ello nos vamos a VSCode y creamos un archivo llamado README.md
//dentro del README insertamos cierta informacion para probar
//Para subir los cambios a nuestro repositorio haremos lo siguiente:
//git add .
//git commit -m "Readme creado"
//git push
