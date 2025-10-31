<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <div class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div class="p-4">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">Configurações</h2>
        <button @click="toggleTheme" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
      <nav class="mt-4">
        <router-link
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>

    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const menuItems = [
  { to: '/settings', label: 'Geral' },
  { to: '/settings/privacidade', label: 'Privacidade' },
  { to: '/settings/conta', label: 'Conta' },
  { to: '/settings/ajuda', label: 'Ajuda' },
]
</script>
