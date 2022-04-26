import { deleteCookie, getCookie, setCookie } from '@/helpers/cookie';
import { Candidate, UserSkills } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import { Project, Skill } from '@/models/Project';

export default abstract class ICampusAuthApi {
  public getAuthToken = () => getCookie('token');
  public setAuthToken = (token: string) => setCookie('token', token);
  public deleteAuthToken = () => deleteCookie('token');
  abstract auth(): Promise<void>;
  abstract getCandidateInfo(): Promise<Candidate>;
  abstract getCandidateParticipationsList(): Promise<Participation[]>;
  abstract getUserProjectList(): Promise<Project[]>;
  abstract setParticipationPriority(
    participationId: number,
    priority: number,
  ): Promise<void>;
  abstract deleteParticipation(id: number): Promise<void>;
  abstract createProjectParticipation(
    priority: number,
    projectId: number,
  ): Promise<void>;
  abstract getUserSkills(): Promise<UserSkills>;
  abstract updateUserSkills(skills: Skill[]): Promise<void>;
}
