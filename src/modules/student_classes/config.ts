import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {IStudentClass} from '../../data_types/StudentClass';
import {
  FormMultiStudentInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentClassModuleConfig: ModuleConfig<IStudentClass> = {
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

export const StudentClassFormConfig: JDAFormConfig<IStudentClass> = {
  id: FormNumberInput,
  name: FormStringInput,
  students: FormMultiStudentInput,
};
