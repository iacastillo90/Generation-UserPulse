import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

// Decisión de diseño: .main-content reemplaza "container my-4" genérico por un wrapper
// sin Container (cada página gestiona su propio Container) con min-height para que
// el footer siempre esté al fondo en páginas con poco contenido.

function MainLayout () {
    return (
        <div className="app-shell">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;