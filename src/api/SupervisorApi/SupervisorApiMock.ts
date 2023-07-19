import { delayRes, sleep } from '@/helpers/promise';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { Project } from '@/models/Project';
import {
  CreatedProjectProposal,
  CreatedProjectResult,
  NewProjectProposal,
} from '@/models/ProjectProposal';
import { Specialty } from '@/models/Specialty';
import { Tag } from '@/models/Tag';
import { mockProjectList } from '@/models/mock/project';
import { themeSources } from '@/models/mock/project-proposal';
import { specialties } from '@/models/mock/specialties';
import SupervisorApiType, {
  UpdateProjectProposalData,
  UpdateProjectResultData,
} from './SupervisorApiType';

export default class SupervisorApiMock implements SupervisorApiType {
  async getProposalsTime(): Promise<[string, string]> {
    return Promise.all([
      delayRes(new Date(Date.now() - 10000).toISOString(), 1000),
      delayRes(new Date(Date.now() + 200000000).toISOString(), 1000),
    ]);
  }

  async createProjectProposal(
    projectProposal: NewProjectProposal,
  ): Promise<CreatedProjectProposal> {
    await sleep(500);
    console.log(projectProposal);
    return {} as CreatedProjectProposal;
  }

  async updateProjectProposal({
    projectProposal,
    id,
  }: UpdateProjectProposalData): Promise<CreatedProjectProposal> {
    await sleep(500);
    console.log(projectProposal);
    console.log(id);
    return {} as CreatedProjectProposal;
  }

  async updateProjectResult({
    projectResult,
    id,
  }: UpdateProjectResultData): Promise<CreatedProjectResult> {
    await sleep(500);
    console.log(projectResult);
    console.log(id);

    mockProjectList.forEach((project) => {
      if (project.id == id) {
        project.result_description = projectResult.result_description;
        project.result_goal = projectResult.result_goal;
        project.participations = projectResult.participations;
        return;
      }
    });

    console.log(mockProjectList.find((project) => project.id == id));

    return {} as CreatedProjectResult;
  }

  async deleteProjectProposal(
    projectProposalId: number,
  ): Promise<CreatedProjectProposal> {
    await sleep(500);
    console.log(projectProposalId);
    return {} as CreatedProjectProposal;
  }

  async getThemeSources(): Promise<Tag[]> {
    return delayRes(themeSources, 400);
  }

  async getSpecialties(): Promise<Specialty[]> {
    return delayRes(specialties, 400);
  }

  async getProjectProposalList(): Promise<CreatedProjectProposal[]> {
    return [];
  }

  async getProjectList(): Promise<Project[]> {
    return mockProjectList.filter((project) => {
      return project.supervisors.some(
        (supervisor) => supervisor.id === useAuthStore().profileData?.id,
      );
    });
  }
}
