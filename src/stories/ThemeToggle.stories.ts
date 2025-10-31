import { useTheme } from '@/composables/useTheme'

const ThemeToggleExample = {
  template: `
    <div class="p-4">
      <button
        @click="toggleTheme"
        class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
      <p class="mt-2">Tema atual: {{ isDark ? 'Escuro' : 'Claro' }}</p>
    </div>
  `,
  setup() {
    const { isDark, toggleTheme } = useTheme()
    return { isDark, toggleTheme }
  },
}

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggleExample,
}

export const Default = {}
