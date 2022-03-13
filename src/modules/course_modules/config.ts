import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {CourseModule} from '../../data_types/CourseModule';
import {FormNumberInput, FormStringInput} from '../FormInputs';

export const CourseModuleModuleConfig: IJDAModuleConfig<CourseModule> = {
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

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: FormNumberInput,
  name: FormStringInput,
  code: FormStringInput,
  semester: FormNumberInput,
  credits: FormNumberInput,
};

export const CourseModuleListConfig: IJDAListConfig<CourseModule> = {
  listItemProps: {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  listProps: {},
};
