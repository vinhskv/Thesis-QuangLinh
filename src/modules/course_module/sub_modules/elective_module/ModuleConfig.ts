import { IJDAModuleConfig } from '../../../../base/controllers/jda_module_controller/withModuleController';
import { Modules } from '../../../../data_types/enums/Modules';
import { ElectiveModule } from '../../../../data_types/ElectiveModule';
import { CourseModuleModuleConfig } from '../../ModuleConfig';

export const ElectiveModuleModuleConfig: IJDAModuleConfig<ElectiveModule> = {
  primaryKey: 'id',
  route: Modules.CourseModule,
  apiResource: 'course-modules',
  moduleName: 'Course Modules',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
    deptName: 'deptName',
  },
  quickRender: elective_module => (elective_module ? ` ${elective_module.id} | ${elective_module.code} | ${elective_module.name} | ${elective_module.semester} | ${elective_module.credits} |` : ''),
  apiConfig: {
    toPOST: elective_module => {
      return {
        ...elective_module,
      };
    },
  },
};