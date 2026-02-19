import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/over-renomati',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/ons-werk',
      children: [
        {
          path: 'vloerinstallatie',
          name: 'vloerinstallatie',
          component: () => import('@/views/works/FloorinstallationView.vue'),
        },
        {
          path: 'gyprocwerken',
          name: 'gyprocwerken',
          component: () => import('@/views/works/GyprocworksView.vue'),
        },
        {
          path: 'schilderwerken',
          name: 'schilderwerken',
          component: () => import('@/views/works/PaintingworksView.vue'),
        },
        {
          path: 'ramen-deuren',
          name: 'ramen-deuren',
          component: () => import('@/views/works/WindowsAndDoorView.vue'),
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path:'/privacy',
      name: 'privacy',
      component: () => import('@/views/PrivacyView.vue'),
    },

  ],
})

export default router
