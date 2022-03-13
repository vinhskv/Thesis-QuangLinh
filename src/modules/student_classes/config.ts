import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {StudentClass} from '../../data_types/StudentClass';
import {
  FormMultiStudentInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentClassModuleConfig: IJDAModuleConfig<StudentClass> = {
  primaryKey: 'id',
  apiResource: 'student-classes',
  moduleName: 'Classes',
  fieldLabel: {
    id: 'ID',
    name: 'Name',
    students: 'Students',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const StudentClassFormConfig: IJDAFormConfig<StudentClass> = {
  id: FormNumberInput,
  name: FormStringInput,
  students: FormMultiStudentInput,
};

export const StudentClassListConfig: IJDAListConfig<StudentClass> = {
  listItemProps: {
    icon: 'people-outline',
    title: studentClass => `${studentClass.name}`,
  },
  listProps: {},
};
