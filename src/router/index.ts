import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/settings',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'settings',
          component: () => import('@/views/settings/SettingsView.vue')
        },
        {
          path: 'privacidade',
          name: 'privacy',
          component: () => import('@/views/settings/PrivacySettings.vue')
        },
        {
          path: 'conta',
          name: 'account',
          component: () => import('@/views/settings/AccountSettings.vue')
        },
        {
          path: 'ajuda',
          name: 'help',
          component: () => import('@/views/settings/HelpSettings.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/settings'
    }
  ]
})

export default router
