# Glamour Frontend

**Glamour Frontend** es una página web de una **tienda de ropa en línea**. Esta aplicación está construida con **React** y utiliza **Vite** como herramienta de construcción y desarrollo.

---

## Conexión con el Backend

Este frontend consume datos de un **backend API RESTful** dedicado, el cual también fue desarrollado por mi en Node.Js.

Este backend maneja la lógica de negocio central, incluyendo la gestión de productos, inventario, y la base para futuras funcionalidades como la autenticación de usuarios y el procesamiento de pagos.

### Enlace al Repositorio del Backend

| Componente | Enlace al Repositorio |
| :--- | :--- |
| **Glamour Backend** | https://github.com/LucasFigueroaDev/GLAMOURProyectoBackend.git |

---

## Características Principales

* **Tecnología Moderna:** Desarrollado con **React** para una interfaz de usuario rápida y dinámica.
* **Gestión de Estado Centralizada:** Implementación de **Redux Toolkit** para un manejo eficiente del estado global de la aplicación (carrito de compras, autenticación de usuario, etc.).
* **Navegación Intuitiva:** Uso de **React Router DOM** para gestionar las rutas y la navegación entre las diferentes páginas (Inicio, Productos, Carrito, Checkout).
* **Componentes de UI:** Incluye librerías como `react-icons` para iconos y `react-slick`/`slick-carousel` para la creación de **carruseles de productos** destacados y banners.
* **Notificaciones:** Uso de `react-hot-toast` para mostrar notificaciones y mensajes de usuario de forma elegante.

---

## Tecnologías Utilizadas

El proyecto está configurado con las siguientes herramientas y librerías clave:

### Dependencias Principales

| Tecnología | Propósito |
| :--- | :--- |
| **React** & **React DOM** | Biblioteca principal para construir la interfaz de usuario. |
| **@reduxjs/toolkit** & **react-redux** | Gestión del estado global y lógica de negocio. |
| **react-router-dom** | Enrutamiento declarativo para la navegación. |
| **react-slick** & **slick-carousel** | Implementación de carruseles (sliders) responsivos. |
| **react-icons** | Conjunto de iconos vectoriales. |
| **react-hot-toast** | Sistema de notificaciones simple y moderno. |

### Herramientas de Desarrollo

| Herramienta | Propósito |
| :--- | :--- |
| **Vite** | Herramienta de construcción rápida y servidor de desarrollo. |
| **@vitejs/plugin-react-swc** | Plugin para usar SWC en lugar de Babel para un *fast refresh* más rápido. |
| **ESLint** | Herramienta para análisis de código estático (linting). |

---

## Roadmap (Hoja de Ruta de Próximas Implementaciones)

El proyecto está en constante desarrollo. Las siguientes funcionalidades clave están priorizadas para su próxima implementación:

### Autenticación de Usuario
* **Registro e Inicio de Sesión:** Implementación completa del flujo de autenticación, incluyendo manejo de tokens (JWT).
* **Perfiles de Usuario:** Creación de una vista de perfil para gestionar pedidos, direcciones y datos personales.

### Pasarela de Pago
* **Gestión de Pedidos:** Finalización del flujo de compra y visualización del historial de pedidos.

## Inicio Rápido

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado **Node.js** (se recomienda la versión 18+ o superior) y de que el **backend** asociado esté en ejecución.

### Clonar Repositorio
```
git clone https://github.com/LucasFigueroaDev/glamour-frontend.git
```

### 1. Instalación de Dependencias

Una vez clonado el repositorio, navega a la carpeta del proyecto e instala todas las dependencias:

```bash
npm install
```

### 2. Ejecutar el Servidor de Desarrollo

```
npm run dev
```

## Autor

Lucas Figueroa

* Email: [figueroa.dev93@gmail.com](figueroa.dev93@gmail.com)
* LinkedIn: [www.linkedin.com/in/lucas-figueroa](www.linkedin.com/in/lucas-figueroa-94711b260)
* Portafolio: [Mi Portafolio - Figueroa Lucas](https://portafolio-five-xi-26.vercel.app/)
