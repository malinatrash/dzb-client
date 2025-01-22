import {
  ArmManualDistribution,
  ArmManualDistributionCandidate,
} from '@/models/ArmManualDistribution';
import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';

export default interface ArmApiType {
  getArmProjectsList(): Promise<ArmProjects>;
  getArmApproveDistributionProjectsList(): Promise<ArmProjects>;
  getArmStudentsList(): Promise<ArmStudentsInstitute[]>;
  getArmManualDistribution(): Promise<ArmManualDistribution>;

  updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects>;
  updateArmManualDistribution(
    data: ArmManualDistributionCandidate[],
  ): Promise<ArmManualDistributionCandidate[]>;
  goBackToPreviousArmManualDistribution(): Promise<void>;
  eraseArmManualDistribution(): Promise<void>;
  isArmManualDistributionExist(): Promise<boolean>;
  exportCandidatesToDB(): Promise<void>;
  cancelExportCandidatesToDB(): Promise<void>;
}
