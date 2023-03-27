import { NavigationGuard } from 'vue-router';
import { useAuthStore } from '@/stores/auth/useAuthStore';

export const fetchUserData: NavigationGuard = async (to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.profileData && !from.name) {
    await authStore.fetchUserData();
  }
  return next();
};
