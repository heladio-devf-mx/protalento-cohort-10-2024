# Proyecto de React (UI) de muestra para Protalento 

## Crear el proyecto de React
1. Colocarnos en la carpeta donde vamos a crear el proyecto.
2. Ejecutar el siguiente comando para que Vite cree la estructura del proyecto
- ```npm create vite@latest . -- --template react```
3. Instalar dependencias
- ```npm install```
4. Arrancar el proyecto
- ```npm run dev```

## Inicializar el repositorio en la carpeta de mi proyecto
Ejecutar el comando:
- ```git init```
Agregar los archivos al repositorio mediante un commit.
- ```git add .```
- ```git commit -m 'Creación del proyecto de React.'```

## Crear el repositorio en Github y subimos el proyecto recién creado
Crear en Github un repositorio para el proyecto de React.
- el demo se llama: ```protalento-10-demo-reactUI```
Enlazar el repositorio de Github con el repositorio de mi ambiente local:
- Ejecutar los siguientes comandos que me da Github. Adecual la URL de cada uno de sus repositorios.

```
git remote add origin https://github.com/heladio-devf-mx/protalento-10-demo-reactUI.git
git branch -M main
git push -u origin main
```

## Limpiar los componentes pre-existentes y configurar Dependencias.
Limpiamos el contenido del componente principal App.jsx.

### Identificamos las depencias para el proyecto "maquetado".
- Imagen creada en clase, se importará en la carpeta Assets.
Paquete necesarios:
- Bootstrap (Estilos y componentes)
  - [Referencia y configuración](https://blog.logrocket.com/using-bootstrap-react-tutorial-examples/)
  - Instalar con el comando: ```npm install bootstrap```
- React Router + DOM (Rutas)
  - [Referencia](https://v5.reactrouter.com/web/guides/quick-start/installation)
  - Instalar con el comando: ```npm install react-router-dom```
- React Hook Form + Yup + Hookfrom Resolver (Formularios)
  - [Referencia](https://www.react-hook-form.com/)
  - Instalar con el comando: ```npm install react-hook-form```

## Configurar El Router para las rutas de la aplicación
1. Crear carpeta ```router``` y adentro el archivo ```RoutesIndex.js```
con el contenido necesario.
2. En el archivo ```RoutesIndex.jsx``` va la configuración de rutas y componentes (páginas).
3. Configurar la aplicación en el copmponente ```App.jsx``` para que tenga el contexto del ```BrowserRouter```.
4. Importar el RoutesIndex para que las rutas funcionen ahora sí. Esto mostrará el componente que las rutas indiquen en mi aplicación.

### Crear componente NavBar para navegar en la aplicación
1. En el componente ```NavBar``` Se configuran las rutas correspondientes para el proyecto.
2. Se crean las páginas o componentes necesarios (aunque sea semi-vacíos) para validar que las rutas funcionen.
3. Si hace falta se crean componenes como el Header para complementar la interfase de la página.

## Configurar El Contexto para el estado global de la aplicación
### Contexto de Películas
1. Crear carpeta ```contexts``` dentro de ```src``` y adentro el archivo ```MoviesContext.js```
con el contenido necesario.
2. En el Contexto de las películas o el estado global, queremos que se pueda conectar con el API para pedir la lista de películas (según el ejmplo).
En el archivo de MoviesContext.jsx se agrega lo siguiente:
  1. Crear objeto del context sin un valor por defecto (vacío).
  2. Agregar un Provider: es quien va a proveer de información y/o funciones al contexto
  2.1. Lo haremos a través de un componente de React
  2.2. Definimos qué es lo que se compartirá a través del cotexto.
  2.3. Cada que entremos a este contexto, queremos que recupere la lista de películas
  2.4. Configurar la comunicación con el API si hace falta
  2.5. Crear el servicio si hiciera falta.
    1. Crear carpeta ```services``` dentro de ```src``` y adentro el archivo ```moviesService.js```
con el contenido necesario.
3. Configurar el contexto para poder usarlo.
4. Usar el contexto de Movies en el o los componentes necesarios
4.1. Importamos el contexto y el componente hijo que lo requiera (MoviesList).
4.2. Crear el componente hijo MoviesList (ver Componente).
4.3. 4.1. Importamos el contexto y el componente hijo que lo requiera (MoviesDetail).

- Es parte del desarrollo ir puliendo estilos (CSS).

### Contexto de Seguridad (Auth)

## Crear los componentes para la lista de películas y el detalle

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
