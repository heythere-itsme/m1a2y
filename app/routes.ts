import { type RouteConfig, layout, route } from "@react-router/dev/routes";
import { createBrowserRouter } from "react-router";

export default [
    route('/', 'routes/visitor/home.tsx'),
    route('/car', 'routes/visitor/carShow.tsx'),
    route('/form', 'routes/form/form.tsx'),
] satisfies RouteConfig;

createBrowserRouter([
    
])