<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Privacidade</h1>

    <div v-if="isLoading" class="space-y-4">
      <div class="p-4 bg-white dark:bg-gray-800 rounded-lg animate-pulse">
        <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-2"></div>
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
      </div>
    </div>

    <div
      v-else-if="error"
      class="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg"
    >
      Erro ao carregar configurações
    </div>

    <div v-else class="space-y-4">
      <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
        <div>
          <span class="text-gray-700 dark:text-gray-300">Perfil privado</span>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Apenas seguidores aprovados podem ver suas publicações
          </p>
        </div>
        <input
          type="checkbox"
          v-model="localSettings.profilePrivate"
          @change="updateSetting('profilePrivate', localSettings.profilePrivate)"
          class="toggle"
        />
      </div>

      <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
        <div>
          <span class="text-gray-700 dark:text-gray-300">Status online</span>
          <p class="text-sm text-gray-500 dark:text-gray-400">Mostrar quando você está online</p>
        </div>
        <input
          type="checkbox"
          v-model="localSettings.showOnlineStatus"
          @change="updateSetting('showOnlineStatus', localSettings.showOnlineStatus)"
          class="toggle"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserSettings } from '@/composables/useUserSettings'
import { ref, watch } from 'vue'

const { data: userSettings, isLoading, error } = useUserSettings()

const localSettings = ref({
  profilePrivate: false,
  showOnlineStatus: false,
})

watch(
  userSettings,
  (newSettings) => {
    if (newSettings) {
      localSettings.value = {
        profilePrivate: newSettings.privacy.profilePrivate,
        showOnlineStatus: newSettings.privacy.showOnlineStatus,
      }
    }
  },
  { immediate: true },
)

const updateSetting = (key: string, value: boolean) => {
  console.log(`Configuração ${key} alterada para:`, value)
}
</script>
