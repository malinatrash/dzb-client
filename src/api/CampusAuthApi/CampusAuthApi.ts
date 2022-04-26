import ky from 'ky';
import { Candidate, UserSkills } from '@/models/Candidate';
import ICampusAuthApi from './ICampusAuthApi';
import { Participation, Priority } from '@/models/Participation';
import campusAuthApiMock from './CampusAuthApiMock';
import { Project, Skill } from '@/models/Project';

export class CampusAuthApi extends ICampusAuthApi {
  private ky = ky.create({
    prefixUrl: import.meta.env.VITE_CAMPUS_AUTH_API_URL,
    retry: { limit: 5, statusCodes: [408, 413, 429, 502, 503, 504] },
  });

  async auth(): Promise<void> {
    const data: { url: string } = await this.ky.get('campus_auth').json();
    document.location.replace(data.url);
  }

  async getCandidateInfo(): Promise<Candidate> {
    return this.ky
      .get('api/candidate', { headers: { 'x-api-key': this.getAuthToken() } })
      .json();
  }

  async getCandidateParticipationsList(): Promise<Participation[]> {
    return campusAuthApiMock.getCandidateParticipationsList();
  }

  async deleteParticipation(id: number): Promise<void> {
    return campusAuthApiMock.deleteParticipation(id);
  }

  async setParticipationPriority(
    participationId: number,
    priority: Priority,
  ): Promise<void> {
    return campusAuthApiMock.setParticipationPriority(
      participationId,
      priority,
    );
  }

  async createProjectParticipation(
    priority: Priority,
    projectId: number,
  ): Promise<void> {
    return campusAuthApiMock.createProjectParticipation(priority, projectId);
  }

  async getUserProjectList(): Promise<Project[]> {
    return campusAuthApiMock.getUserProjectList();
  }

  async getUserSkills(): Promise<UserSkills> {
    return campusAuthApiMock.getUserSkills();
  }

  async updateUserSkills(skills: Skill[]): Promise<void> {
    return campusAuthApiMock.updateUserSkills(skills);
  }
}

export default new CampusAuthApi();
