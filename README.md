# UserPulse 👥
**UserPulse** es una Single Page Application (SPA) robusta diseñada para la visualización y gestión de perfiles de usuario. Este proyecto fue desarrollado como parte del bootcamp **Generation**, enfocándose en la implementación de navegación dinámica y el consumo eficiente de APIs externas.

---

## 🚀 Objetivo
[cite_start]Desarrollar una interfaz fluida que permita navegar entre secciones (Home, About, Users) sin recargar la página, aplicando conceptos avanzados de enrutamiento y hooks de React[cite: 4, 5, 8].

## 🛠️ Tecnologías y Herramientas
* [cite_start]**React**: Biblioteca principal para la interfaz[cite: 54].
* [cite_start]**React Router (v6)**: Gestión de rutas, navegación y parámetros dinámicos[cite: 14, 55, 56].
* **JavaScript (ES6+)**: Lógica de programación.
* **Random User API**: Fuente de datos para la generación de perfiles con imágenes.
* **CSS3**: Estilización y diseño responsivo.

## 🧠 Conceptos Aplicados
[cite_start]El proyecto implementa los siguientes requisitos técnicos[cite: 52, 53]:
* [cite_start]**BrowserRouter**: Enrutador principal de la aplicación[cite: 15, 55].
* [cite_start]**Routes & Route**: Definición de la jerarquía de navegación[cite: 16, 56].
* [cite_start]**Link & NavLink**: Navegación interna optimizada (evitando recargas de <a>)[cite: 18, 22].
* [cite_start]**Dynamic Routing**: Implementación de `/user/:id` para perfiles específicos[cite: 38, 39].
* **Hooks de React**:
    * `useState`: Manejo del estado local de usuarios.
    * `useEffect`: Sincronización con la API al cargar componentes.
    * [cite_start]`useParams`: Captura de IDs dinámicos en la URL[cite: 42, 57].
* [cite_start]**Catch-all Route**: Manejo de errores 404 para rutas inexistentes[cite: 48, 49, 58].

## 📋 Requisitos Funcionales
1. [cite_start]**Vista Home**: Introducción a la plataforma[cite: 19, 28].
2. [cite_start]**Vista About**: Información sobre el desarrollo y el bootcamp[cite: 21, 29].
3. [cite_start]**Lista de Usuarios**: Despliegue de tarjetas de usuario consumidas desde la API[cite: 20, 34, 47].
4. [cite_start]**Detalle de Usuario**: Vista expandida que muestra la información detallada según el ID[cite: 40, 41].
5. [cite_start]**Página 404**: Pantalla de error con enlace de retorno al inicio[cite: 50, 51].

---

Desarrollado por Ivan Castillo - 2026.