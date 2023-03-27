import { DownloadProgress } from 'ky';
import type {
  Project,
  ProjectFilters,
  ProjectType,
  ProjectTags,
} from '@/models/Project';
import { ProjectState } from '@/models/ProjectState';
import { Supervisor } from '@/models/Supervisor';
import { Candidate } from '@/models/Candidate';

export interface ProjectListResponse {
  data: Project[];
  projectCount: number;
}

export type OnDownloadProgress = (
  progress: DownloadProgress,
  chunk: Uint8Array,
) => void;

export default abstract class IProjectApi {
  abstract filterProjectList(
    filters: ProjectFilters,
    onDownloadProgress?: OnDownloadProgress,
  ): Promise<ProjectListResponse>;
  abstract getSingleProject(projectId: number): Promise<Project>;
  abstract getAllProjectTags(): Promise<ProjectTags>;
  abstract getAllSupervisors(): Promise<Supervisor[]>;
  abstract getAllProjectTypes(): Promise<ProjectType[]>;
  abstract getAllProjectStates(): Promise<ProjectState[]>;
  abstract getProjectParticipants(projectId: number): Promise<Candidate[]>;
  abstract getProjectHistory(projectId: number): Promise<Project[]>;
  abstract getActiveUserProject(): Promise<Project | undefined>;
  abstract getArhiveUserProjects(): Promise<Project[]>;
}
