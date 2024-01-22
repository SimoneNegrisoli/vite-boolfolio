import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppProjectShow from "./pages/AppProjectShow.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects,
        },
        {
            path: "/projects/:slug",
            name: "project-show",
            component: AppProjectShow,
        }
    ]
});
export default router;