export interface ICourseModule {
  id: number;
  code: string;
  name: string;
  semester: number;
  credits: number;
}

export class CourseModule implements ICourseModule {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public semester: number,
    public credits: number,
  ) {}
}
