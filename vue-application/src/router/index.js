import { createRouter, createWebHistory } from "vue-router"
import FolderGallery from "../views/FolderGallery.vue"
import FileGallery from "../views/FileGallery.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/folders",
    name: "FolderGallery",
    component: FolderGallery
  },
  {
    path: "/folders/:id",
    name: "FileGallery",
    component: FileGallery,
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
