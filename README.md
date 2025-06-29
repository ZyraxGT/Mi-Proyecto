# 📋 Base de Empleados — Proyecto Fullstack con React + Node.js + MongoDB

Este proyecto es una aplicación web diseñada para gestionar empleados, registrar usuarios y permitir el inicio de sesión. Se construyó utilizando el stack **MERN** (MongoDB, Express, React, Node.js) y cuenta con una interfaz moderna con **Tailwind CSS**.

---

## 🚀 Funcionalidades

✅ Registro de nuevos usuarios  
✅ Inicio de sesión  
✅ Panel de empleados con:
- Agregar empleados (nombre, cargo, notas)
- Eliminar empleados
- Mostrar fecha de creación
- Interfaz moderna y responsive

✅ Navegación fluida entre páginas  
✅ Almacenamiento de datos en **MongoDB**  
✅ Estilos con **Tailwind CSS**

---

## 🧱 Estructura del Proyecto

```
mi-proyecto/
├── backend/             # Servidor Node.js con Express
│   └── app.js
├── frontend/            # Aplicación React (con Vite y Tailwind)
│   ├── src/
│   │   ├── components/  # Formularios y paneles
│   │   └── App.jsx
│   ├── public/
│   └── tailwind.config.js
```

---

## ⚙️ Tecnologías usadas

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Base de datos**: MongoDB (local)
- **Control de versiones**: Git
- **Otros**: Postman (para pruebas de API), MongoDB Compass

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/mi-proyecto1.git
cd mi-proyecto1
```

### 2. Iniciar el backend
```bash
cd backend
npm install
node app.js
```

### 3. Iniciar el frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Pruebas con Postman

- `POST /api/registro` — registrar usuarios  
- `POST /api/login` — iniciar sesión  
- `GET /api/empleados` — listar empleados  
- `POST /api/empleados` — agregar empleado  
- `DELETE /api/empleados/:id` — eliminar empleado  

---

## 🛡️ Seguridad

- Contraseñas no visibles en la UI
- Contraseñas ocultas en las respuestas de API
- Manejo de errores con validación básica

---

## 📌 Autor

Desarrollado por **Juan Angel Rangel Cediel**  
📧 jr2404er@gmail.com  
📱 +57 310 426 3051

---

## 📄 Licencia

Este proyecto es de uso académico y está abierto para mejoras.
