# Los estudiantes monkey tester
Este proyecto consiste en un monkey engine sobre cypress el cual ejecuta aleatoriamente eventos de usuario sobre la applicación https://losestudiantes.com/uniandes

## Antes de ejecutar el proyecto
Antes de ejecutar debes contar con las siguientes dependencias
1. Node 12 o superior https://nodejs.org/en/

## Pasos para ejecutar el proyecto
1. Clonar el [proyecto](https://github.com/cgarciasantander/losestudiantes-monkey-testing) 
2. Instalar librerías `npm install`
3. Iniciar cypress `npm start` o `npx cypress open`

## Ejecutar pruebas unitarias
Una vez en el dashboard de cypress ejecutar el suite de `monkey_testing_spec.js`. El suite desplegará dos grupos de monkeys.

![Alt text](docs/images/home.gif?raw=true "Title")

### Random clicks
Este grupo de monkeys ejecuta hasta 10 clicks aleatorios a links `a` dentro de la aplicacion.

### Random events
Este grupo de monkeys es ejecuta 10 rondas de 4 tipos de eventos diferentes aleatoriamente:
1. Realizar clicks en links `a`.
2. Realizar clicks en botones `button | input[type="submit"]`.
3. Llenar campos `input[type="text"] | input[type="number"] | input[type="password"] input[type="date"] | input[type="time"] | input[type="textarea"]`.
4. Marcar checkboxes `input[type="checkbox"] | input[type="radio"]`

# Soporte
Para solicitar soporte puedes visitar el proyecto en github
https://github.com/cgarciasantander/losestudiantes-monkey-testing