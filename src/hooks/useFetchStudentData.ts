import { useParticipationsStore } from '@/stores/participations/useParticipationsStore';
import { useProjectsStore } from '@/stores/projects/useProjectsStore';
import { useSkillsStore } from '@/stores/skills/useSkillsStore';
import { onBeforeMount } from 'vue';

export const useGetParticipationList = () => {
  const participationsStore = useParticipationsStore();
  onBeforeMount(() => participationsStore.getParticipationList());
};

export const useGetUserProjectList = () => {
  const projectsStore = useProjectsStore();
  onBeforeMount(() => projectsStore.getUserProjectList());
};

export const useGetUserSkills = () => {
  const skillsStore = useSkillsStore();
  onBeforeMount(() => skillsStore.getUserSkills());
};