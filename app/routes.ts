import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
    route('/', 'routes/visitor/home.tsx'),
    route('/car', 'routes/visitor/carShow.tsx'),
    route('/form', 'routes/form/form.tsx'),
] satisfies RouteConfig;
