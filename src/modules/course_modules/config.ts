import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {ICourseModule} from '../../data_types/CourseModule';
import {FormNumberInput, FormStringInput} from '../FormInputs';

export const CourseModuleModuleConfig: ModuleConfig<ICourseModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Module',
  fieldLabel: {
    id: 'ID',
    code: 'Code',
    name: 'Name',
    semester: 'Semester',
    credits: 'Credits',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const CourseModuleFormConfig: JDAFormConfig<ICourseModule> = {
  id: FormNumberInput,
  name: FormStringInput,
  code: FormStringInput,
  semester: FormNumberInput,
  credits: FormNumberInput,
};
