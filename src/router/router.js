import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import LeftSideBar from '../components/Sidebar.vue'

const routes = [
    {
        path: '/', components : {
            default : Home,
            Sidebar: LeftSideBar
        }
    },
    {
        path: '/about', components : {
            default : About,
            Sidebar: LeftSideBar
        }
    },
    {
        path: '/contact', components : {
            default : Contact,
            Sidebar: LeftSideBar
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router