const PrivacySettingExample = {
  template: `
    <div class="space-y-4 max-w-md">
      <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border">
        <div>
          <span class="text-gray-700 dark:text-gray-300">Perfil privado</span>
          <p class="text-sm text-gray-500 dark:text-gray-400">Controle de privacidade</p>
        </div>
        <input type="checkbox" v-model="isPrivate" class="toggle">
      </div>

      <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border">
        <div>
          <span class="text-gray-700 dark:text-gray-300">Status online</span>
          <p class="text-sm text-gray-500 dark:text-gray-400">Visibilidade do status</p>
        </div>
        <input type="checkbox" v-model="showOnline" class="toggle">
      </div>
    </div>
  `,
  data() {
    return {
      isPrivate: false,
      showOnline: true,
    }
  },
}

export default {
  title: 'Components/PrivacySetting',
  component: PrivacySettingExample,
}

export const Default = {}
