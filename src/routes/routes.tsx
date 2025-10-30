import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginForm from "../pages/auth/loginForm";

function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to = "/login" />
        },
        {
            path: '/login',
            element: <LoginForm />
        }
    ])
    return <RouterProvider router={router} />
}

export default Router;