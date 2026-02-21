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
  scrollBehavior(to, from, savedPosition) {
    // back/forward button should restore scroll
    if (savedPosition) return savedPosition;

    // hash links (e.g. /page#section) should scroll to section
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 0, // optional depending on header
      };
    }

    // normal route navigation -> go to top
    return { left: 0, top: 0 };
  },
})

export default router
