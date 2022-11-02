import ISubject from "interfaces/ISubject";
import api from "./api";

export default class SubjectService {
  private baseUrl = 'subjects/';

  public async findAll(): Promise<ISubject[]> {
    const { data: subjects } = await api.get(this.baseUrl);

    return subjects;
  }
}