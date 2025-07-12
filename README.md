# Tarea App - SPA Angular (Prueba Técnica)

Este proyecto es una aplicación web SPA creada con **Angular 12** como parte de una prueba técnica para el cargo de **Desarrollador Frontend Junior**. Permite gestionar tareas locales desde un archivo JSON simulado como backend.

## Funcionalidades

- ✅ Listar tareas con título, descripción y estado
- ✅ Marcar tareas como completadas
- ✅ Agregar nuevas tareas con formulario
- ✅ Lectura de tareas desde archivo `JSON` local (simulación de backend)

## Tecnologías utilizadas

- Angular 12
- TypeScript
- HTML / CSS
- JSON como fuente de datos simulada

## Estructura del proyecto

src/
    app/
    components/
        task-list/   -- Muestra las tareas
        task-form/   -- Formulario para agregar las tareas
    models/
        task-model.ts   -- Interfaz Task
    services/
        task.service.ts   -- Servicio de tareas


## Requisitos

- Node.js v14.21.3
- npm v6.14.18
- Angular CLI v12.2.18


## Instalación

1. Clonar este repositorio o descargar el código.
2. Instalar dependencias:

   ```bash
   npm install





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
