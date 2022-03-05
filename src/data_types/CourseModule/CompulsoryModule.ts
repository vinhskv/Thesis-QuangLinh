import {CourseModule, CourseModuleFieldLabel} from './CourseModule';

export interface CompulsoryModule extends CourseModule {}
export const CompulsoryModulePrimaryKey: keyof CompulsoryModule = 'id';
export const CompulsoryModuleApiResource: string = 'course-modules';
export const CompulsoryModuleModuleName: string = 'Compulsory Module';

export const CompulsoryModuleFieldLabel: Record<
  keyof CompulsoryModule,
  string
> = {
  ...CourseModuleFieldLabel,
};
