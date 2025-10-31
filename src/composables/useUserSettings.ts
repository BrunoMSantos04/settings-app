import { useQuery } from '@tanstack/vue-query'

// Dados fictícios
const mockUserData = {
  name: 'Bruno Santos',
  email: 'bruno@exemplo.com',
  privacy: {
    profilePrivate: true,
    showOnlineStatus: false,
  },
}

const fetchUserSettings = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return mockUserData
}

export const useUserSettings = () => {
  return useQuery({
    queryKey: ['user-settings'],
    queryFn: fetchUserSettings,
  })
}
