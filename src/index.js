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
//
