import { insituteApi } from '@/api/InsituteApi';
import { Candidate } from '@/models/Candidate';
import { Project } from '@/models/Project';
import { ProjectDifficulty } from '@/models/ProjectDifficulty';
import { ProjectStateID } from '@/models/ProjectState';
import { deepClone } from './object';
import { formatDate } from './string';

export function formatProjectDate(project: Project): Project {
  const formattedProject = deepClone(project);
  formattedProject.date_start = formatDate(project.date_start);
  formattedProject.date_end = formatDate(project.date_end);
  return formattedProject;
}

export function checkProjectDifficulty(difficulty: ProjectDifficulty): boolean {
  return difficulty && difficulty > 0 && difficulty < 4;
}

export async function projectIncludesCandidateSpeciality(
  candidate: Candidate,
  project: Project,
): Promise<boolean> {
  const matchedSpecialities = await Promise.all(
    project.specialities.map((speciality) =>
      insituteApi.isInSameInstitute(
        speciality.name,
        candidate.training_group.split('-')[0],
      ),
    ),
  );

  return matchedSpecialities.filter(Boolean).length > 0;
}

export function isRecruitingState(stateId: ProjectStateID): boolean {
  return stateId === ProjectStateID.RecruitingState;
}
export function isActiveState(stateId: ProjectStateID): boolean {
  return stateId === ProjectStateID.ActiveState;
}
export function isExtraState(stateId: ProjectStateID): boolean {
  return stateId === ProjectStateID.ExtraState;
}
export function isArchivedState(stateId: ProjectStateID): boolean {
  return stateId === ProjectStateID.ArchivedState;
}
export function isProcessingState(stateId: ProjectStateID): boolean {
  return stateId === ProjectStateID.ProcessingState;
}

export function canViewParticipations(stateId: ProjectStateID): boolean {
  return (
    isRecruitingState(stateId) ||
    isActiveState(stateId) ||
    isExtraState(stateId) ||
    isProcessingState(stateId)
  );
}

export function canViewParticipants(stateId: ProjectStateID): boolean {
  return (
    isActiveState(stateId) || isArchivedState(stateId) || isExtraState(stateId)
  );
}
