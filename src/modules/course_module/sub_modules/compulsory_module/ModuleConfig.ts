import { IJDAModuleConfig } from '../../../../base/controllers/jda_module_controller/withModuleController';
import { Modules } from '../../../../data_types/enums/Modules';
import { CompulsoryModule } from '../../../../data_types/CompulsoryModule';
import { CourseModuleModuleConfig } from '../../ModuleConfig';

export const CompulsoryModuleModuleConfig: IJDAModuleConfig<CompulsoryModule> = {
  primaryKey: 'id',
  route: Modules.CourseModule,
  apiResource: 'course-modules',
  moduleName: 'Course Modules',
  fieldLabel: {
    ...CourseModuleModuleConfig.fieldLabel,
  },
  quickRender: compulsory_module => (compulsory_module ? ` ${compulsory_module.id} | ${compulsory_module.code} | ${compulsory_module.name} | ${compulsory_module.semester} | ${compulsory_module.credits} |` : ''),
  apiConfig: {
    toPOST: compulsory_module => {
      return {
        ...compulsory_module,
      };
    },
  },
};