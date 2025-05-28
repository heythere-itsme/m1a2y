import { type RouteConfig, layout, route } from "@react-router/dev/routes";
import { createBrowserRouter } from "react-router";

export default [
    route('/', 'routes/visitor/home.tsx'),
    route('/car', 'routes/visitor/carShow.tsx'),
    layout('routes/form/form.tsx', [
        route('/form/1', 'components/Form1.tsx')
    ])
] satisfies RouteConfig;
