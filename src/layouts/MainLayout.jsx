import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import { Outlet } from "react-router-dom";

function MainLayout () {

    return(
        <>
            <Header />
            <main className="container my-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;