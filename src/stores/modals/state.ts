// TODO: надо Alert и Confirm вынести в отдельный store

export interface State {
  authModalProfile: boolean;
  authModalNewProject: boolean;
  authModalResultProject: boolean;
  participationSuccessModal: boolean;
  participationModal: boolean;
  projectFeedbackModal: boolean;
  projectFilterModal: boolean;
  // Alert modal
  alertModalTitle?: string;
  alertModalSubtitle?: string;
  // Confirm modal
  confirmModalTitle?: string;
  confirmModalAgree?: string;
  confirmModalDisagree?: string;
  confirmModalAgreeAction?: () => void;
  confirmModalDisagreeAction?: () => void;
  // EvaluateStudentModal
  evaluateStudentModal?: boolean;
  evaluateStudentModalId?: number;
  evaluateStudentModalName?: string;
  projectID?: number;
  rating: number | undefined;
  review: string | undefined;
}

export const state = (): State => ({
  authModalProfile: false,
  authModalNewProject: false,
  authModalResultProject: false,
  participationModal: false,
  participationSuccessModal: false,
  projectFeedbackModal: false,
  projectFilterModal: false,
  // Alert modal
  alertModalTitle: undefined,
  alertModalSubtitle: '',
  // Confirm modal
  confirmModalTitle: undefined,
  confirmModalAgree: '',
  confirmModalDisagree: '',
  confirmModalAgreeAction: undefined,
  confirmModalDisagreeAction: undefined,
  // EvaluateStudentModal
  evaluateStudentModal: undefined,
  evaluateStudentModalId: undefined,
  evaluateStudentModalName: undefined,
  projectID: undefined,
  rating: undefined,
  review: undefined,
});
