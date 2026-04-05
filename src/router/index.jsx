import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import UserDetail from "../pages/UserDetail/UserDetail";
import Users from "../pages/Users/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/user/:id",
                element: <UserDetail />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],
    },
]);