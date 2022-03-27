# Data Lovers

## Índice

* [1. Introducción](#1-Introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-Historias-de-usuario)
* [4. Plan de acción](#4-Plan-de-acción)
* [5. Problemas detectados en test de usabilidad](#5-Problemas-detectados-en-test-de-usabilidad)
***
## 1.Introducción
En este proyecto desarrollaremos una pagina web que permita visualizar un conjunto de datos de Studio Ghibli y manejarlo a través de filtrados, ordenamientos y/o cálculos agregados. 
## 2.Resumen del proyecto
#### ¿Quiénes son los principales usuarios del producto?
Nuestro producto se dirige a todas las personas que sean fans de las animaciones producidas por Studio Ghibli, o se sientan de alguna forma identificadas con la animación, personajes, etc y deseen conocer más.
#### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Adquirir información ordenada, de forma rápida y fácil, sin necesidad de buscar uno por uno.
#### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Los datos más relevantes que desean conocer son:
* Personajes
- Edad, género, nombre, animación
Porque desean conocer los personajes más queridos, 
* Directores
* Productores
* Vehículos
* Locaciones
* Animaciones

#### ¿Cuándo utilizarían o utilizarían el producto?
#### Toda tu investigación previa debe tener como resultado todas las Historias de Usuario de tu proyecto.
## 3.Historias de usuario
#### Desarrollo
#### Prototipo de baja fidelidad
###### Boceto 1:

###### Boceto 2:
#### Prototipo de alta fidelidad

## 4.Plan de acción
#### Objetivos de aprendizaje Priorizados
###### Briggtte
###### Jammie
## 5.Problemas detectados en test de usabilidad
#### Problema 1:
Al correr el primer test, tuvimos un error con la función Set() ya que el package no la reconocía; la función sí realizaba el filtrado; sin embargo el test no se ejecutaba.

(images/Error1_1.jpeg)

Para solucionar el problema, se insertó una línea de código en el archivo main.js para deshabilitar lo indefinido. Luego, en el archivo .eslintrc se colocó en el env el código "es6": true.
(images/Error1_2.jpeg)
(images/Error1_3.jpeg)
#### Problema 2:
Luego de ejecutar el test, pudimos identificar que el test salió un error ya que el array inicial era extenso, entonces creamos un nuevo array con los datos a testear.
(images/Error2_1.jpeg)
(images/Error2_2.jpeg)

En base a ello, se prosiguió con testear las demás funciones del archivo data.js, consiguiendo finalmente npm run test
100% en Stmts, Funcs, Lines y 87.5% en Branch.