export interface State {
  loading: boolean;
  authModal: boolean;
  selectedProjectModal: boolean;
  editSkillsModal: boolean;
  participationSuccessModal: boolean;
  participationModal: boolean;
  projectFeedbackModal: boolean;
  wrongInstitutionModal: boolean;
  projectFilterModal: boolean;
}

export const state = (): State => ({
  loading: false,
  authModal: false,
  selectedProjectModal: false,
  editSkillsModal: false,
  participationModal: false,
  participationSuccessModal: false,
  projectFeedbackModal: false,
  wrongInstitutionModal: false,
  projectFilterModal: false,
});
