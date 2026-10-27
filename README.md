# Laboratorio 06: API RESTful con Express.js
 
API que administra el recurso **Cursos** con operaciones CRUD, middlewares propios y arquitectura por capas.
Curso: Introducción al Desarrollo Web (UNSA).
 
## Requisitos
 
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- Postman (para ejecutar la colección de pruebas)
## Instalación y ejecución
 
```bash
npm install
npm start
```
 
El servidor queda disponible en `http://localhost:3000`. Para detenerlo: `Ctrl + C`.
 
> `npm install` solo se ejecuta la primera vez (o cuando cambien las dependencias), porque la carpeta `node_modules` no se sube al repositorio.
 
## Estructura del proyecto
 
```
├── app.js                      # Configuración de Express y middlewares
├── controllers/
│   └── cursoController.js      # Lógica de cada endpoint
├── data/
│   └── cursos.js               # Datos en memoria
├── middlewares/
│   ├── logger.js               # Método, URL, código y tiempo de respuesta
│   └── errorHandler.js         # Manejo global de errores (500)
├── routes/
│   └── cursoRoutes.js          # Definición de rutas
├── postman/                    # Colección de pruebas exportada
└── evidencias/                 # Capturas de las pruebas
```
 
## Endpoints
 
| Método | Ruta | Descripción | Códigos |
|---|---|---|---|
| GET | `/api/cursos` | Lista todos los cursos. Admite `?creditos=4` | 200 |
| GET | `/api/cursos/:id` | Obtiene un curso por id | 200, 404 |
| POST | `/api/cursos` | Crea un curso (`nombre`, `codigo`, `creditos`) | 201, 400 |
| PUT | `/api/cursos/:id` | Actualiza un curso | 200, 404 |
| DELETE | `/api/cursos/:id` | Elimina un curso | 200, 404 |
 
Formato de las respuestas:
 
```json
{ "status": "success", "data": { } }
{ "status": "fail", "message": "..." }
{ "status": "error", "message": "Error interno del servidor" }
```
 
## Middlewares
 
1. `express.json()`: lee el cuerpo JSON de las peticiones.
2. **Logger** (`middlewares/logger.js`): imprime método, URL, código de estado y tiempo de respuesta en ms.
3. **Manejador de errores** (`middlewares/errorHandler.js`): responde 500 en JSON ante errores no controlados, y 400 si el JSON enviado está mal formado.
## Pruebas con Postman
 
1. Importar `postman/Cursos API - Lab 06.postman_collection.json` en Postman.
2. Iniciar el servidor con `npm start`.
3. Ejecutar la colección con **Run**. Reiniciar el servidor antes de cada corrida, porque los datos se guardan en memoria y las pruebas los modifican.
La colección tiene 4 carpetas: Lecturas, Escrituras, Eliminación y Errores.
 
### Sobre la ruta `/api/error` (carpeta 4)
 
La petición **4.1 GET fuerza error 500** necesita una ruta de prueba que lance un error a propósito. Esa ruta **no forma parte de la API final**, así que no está en el código entregado.
Para repetir la prueba, agregar temporalmente en `app.js`, después de `app.use('/api/cursos', cursoRoutes);` y antes del 404 genérico:
 
```js
// TEMPORAL: solo para probar el error 500 (borrar después)
app.get('/api/error', () => { throw new Error('Error de prueba'); });
```
 
Luego reiniciar el servidor y ejecutar la petición 4.1. Sin esta ruta, esa petición responde 404 y sus tests fallan (es esperado).
 
La evidencia de que el error 500 funciona está en la carpeta `evidencias/`.
 
## Evidencias
 
- `evidencias/runner-verde.png`: ejecución de la colección con todos los tests aprobados.
- `evidencias/logger-consola.png`: salida del logger en la consola.
- `evidencias/prueba-500.png` y `evidencias/prueba-500-consola.png`: prueba del manejador de errores.
## Integrantes
 
- Persona 1: Ortiz Saavedra, Sarah Megan
- Persona 2: Paredes Gonzales, Melanie Grace
- Persona 3: Gomez Huamana, Melany Yartiza
- Persona 4: Morales Yapu, Hillary Fernanda
