# Social Media

<a href="https://trendshift.io/repositories/28176?utm_source=repository-badge&utm_medium=badge&utm_campaign=badge-repository-28176" target="_blank" rel="noopener noreferrer">
  <img src="https://trendshift.io/api/badge/repositories/28176" alt="Social Media | Trendshift" width="250" height="55" />
</a>

Social Media es una aplicación web moderna desarrollada con Node.js, Express y MongoDB para gestionar publicaciones, contenido digital y experiencias de comunidad en un entorno elegante y funcional.

## ✨ Descripción general

Este proyecto permite:

- Crear publicaciones con título, contenido e imágenes.
- Visualizar publicaciones en una interfaz moderna.
- Editar y eliminar contenido desde la interfaz web.
- Mantener la lógica de negocio separada por capas: rutas, controladores, servicios y repositorios.
- Trabajar con una base de datos MongoDB para persistencia real.

## 🏗️ Tecnologías utilizadas

- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- JavaScript ES Modules
- Nodemon
- dotenv

## 📁 Estructura del proyecto

```text
Semana06/
├── app.js
├── package.json
├── README.md
├── .env.example
├── src/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── public/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── views/
└── docs/
```

## 🚀 Requisitos previos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- Node.js 18 o superior
- MongoDB corriendo localmente
- npm o yarn

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/social-media.git
cd social-media
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

Copia el archivo `.env.example` a `.env` y ajusta los valores necesarios:

```bash
cp .env.example .env
```

Ejemplo:

```env
MONGO_URI=mongodb://localhost:27017/socialmedia
PORT=3001
```

4. Inicia la aplicación:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3001
```

## 🧪 Scripts disponibles

```bash
npm run dev
npm start
```

## ✅ Funcionalidades principales

- Home con diseño profesional y landing page moderna.
- Listado de publicaciones.
- Crear nueva publicación.
- Editar publicaciones existentes.
- Eliminar publicaciones.
- Persistencia con MongoDB.

## 👨‍💻 Contribución

Las contribuciones son bienvenidas. Para colaborar:

1. Haz un fork del proyecto.
2. Crea una rama para tu mejora.
3. Realiza tus cambios con mensajes claros.
4. Abre un pull request describiendo la mejora propuesta.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia ISC.

## 🔗 Proyecto

Este repositorio está pensado para ser una base clara y profesional para proyectos de contenido digital, comunidad y publicación de ideas.
