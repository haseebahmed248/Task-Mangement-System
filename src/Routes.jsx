import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Login from "./pages/User/Login/indjex";


const ProjectRoutes = () => {
    let routes = useRoutes([
        {
            path:"/",
            element:<User />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/dashboard",
            element: <Dashboard />
        }
    ]);
    return routes;
};
export default ProjectRoutes;