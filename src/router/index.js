// Import of the pages required in the entire application.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminContactView from '../views/AdminContactView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'
import ContactView from '../views/ContactView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

// All the needed pages in this VUE aplication are putted here.
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'AdminContactView',
    component: AdminContactView
  },
  {
    path: '/contacts/add',
    name: 'AddContactView',
    component: AddContactView
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContactView',
    component: EditContactView
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ContactView',
    component: ContactView
  },
  {// When a page not listed here is wrote in the search bar then appears a message of NOT FOUND PAGE, triggered for this component.
    path: '/:pathMatch(.*)*',
    name: 'PageNotFoundView',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
