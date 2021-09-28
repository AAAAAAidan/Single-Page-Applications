import { createRouter, createWebHistory } from "vue-router"
import Folders from "../views/Folders.vue"
import Folder from "../views/Folder.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/folders",
    name: "Folders",
    component: Folders
  },
  {
    path: "/folders/:id",
    name: "Folder",
    component: Folder,
    props: true
  },
  // Redirect 404 errors to the home page
  {
    path: "/:catchall",
    name: "PageNotFound",
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
