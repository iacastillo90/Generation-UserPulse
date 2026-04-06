<div align="center">

<br />

<img src="https://img.shields.io/badge/UserPulse-1D9E75?style=for-the-badge&logoColor=white" alt="UserPulse" height="36"/>

<br /><br />

**Plataforma interactiva de gestión de perfiles de usuario**  
_SPA desarrollada con React · React Router v7 · Bootstrap · REST API_

<br />

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ¿Qué es UserPulse?

UserPulse es una **Single Page Application** construida para el bootcamp **Generation Chile**. Permite explorar y gestionar perfiles de usuario en tiempo real, consumiendo datos desde una API REST externa, con navegación dinámica sin recargas de página.

El proyecto demuestra la aplicación práctica de enrutamiento avanzado con React Router, gestión de estado con hooks, y una interfaz de calidad SaaS con soporte para modo oscuro.

---

## ✦ Características

| Característica       | Descripción                                            |
| -------------------- | ------------------------------------------------------ |
| **Navegación SPA**   | Transiciones fluidas entre rutas sin recarga de página |
| **Consumo de API**   | Integración con Random User API (100 perfiles reales)  |
| **Rutas dinámicas**  | Perfiles individuales accesibles vía `/user/:id`       |
| **Rutas protegidas** | Catch-all con página 404 personalizada                 |
| **Modo oscuro**      | Soporte nativo via `prefers-color-scheme`              |
| **Loading states**   | Skeleton cards con animación shimmer                   |
| **Empty states**     | Feedback visual cuando no hay resultados               |

---

## 🗂 Estructura del proyecto

```
src/
├── assets/css/          # Estilos globales
├── components/
│   ├── common/
│   │   ├── Banner/      # Promo banner teal
│   │   └── UserCard/    # Card de usuario con foto y stats
│   ├── layout/
│   │   ├── Header/      # Navbar glassmorphism sticky
│   │   └── Footer/      # Footer minimalista
│   ├── ProfileCard      # Card con avatar + badge de estado
│   ├── SkeletonCard     # Placeholder de carga animado
│   └── EmptyState       # Estado vacío ilustrado
├── layouts/
│   └── MainLayout       # Wrapper con Header + Outlet + Footer
├── pages/
│   ├── Home/            # Hero + Banner + MiniCta
│   ├── About/           # Info del proyecto y stack
│   ├── Users/           # Grid de 100 perfiles
│   ├── UserDetail/      # Vista detallada por ID
│   └── NotFound/        # Página 404
└── router/
    └── index.jsx        # Definición de rutas con createBrowserRouter
```

---

## 🧠 Conceptos técnicos aplicados

### Enrutamiento con React Router v7

```jsx
// Rutas anidadas bajo MainLayout
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/user/:id", element: <UserDetail /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> }, // catch-all 404
    ],
  },
]);
```

### Hooks utilizados

```jsx
useState; // Estado local de usuarios y loading flags
useEffect; // Fetch a la API al montar el componente
useParams; // Captura del :id dinámico en UserDetail
useNavigate; // Navegación programática desde ProfileCard
```

### Consumo de API

```jsx
// Seed fijo para resultados consistentes entre navegaciones
const API_URL = "https://randomuser.me/api/?seed=userpulse&results=100";

// En UserDetail: búsqueda del usuario por UUID
const foundUser = response.data.results.find((u) => u.login.uuid === id);
```

---

## 🚀 Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/icastillo/userpulse.git
cd userpulse

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

---

## 📱 Vistas de la aplicación

| Ruta        | Vista    | Descripción                           |
| ----------- | -------- | ------------------------------------- |
| `/`         | Home     | Hero section + Banner + CTA           |
| `/users`    | Usuarios | Grid responsivo de 100 perfiles       |
| `/user/:id` | Detalle  | Información completa del usuario      |
| `/about`    | Acerca   | Stack y contexto del proyecto         |
| `/*`        | 404      | Página de error con retorno al inicio |

---

## 🎨 Design system

```
Tipografía   DM Sans (UI) · DM Mono (datos técnicos)
Accent       #1D9E75  — teal esmeralda
Superficies  #ffffff / #f8f9fa (light) · #1e1e24 (dark)
Radius       16–24px en cards
Animaciones  fadeInUp 0.6s ease-out con delays escalonados
```

---

<div align="center">

Desarrollado por **Ivan Castillo** · Generation Chile · 2026

</div>
