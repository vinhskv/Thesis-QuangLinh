import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {StudentClass} from '../../data_types/StudentClass';
import {
  FormMultiStudentInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentClassFormConfig: JDAFormConfig<StudentClass> = {
  id: FormNumberInput,
  name: FormStringInput,
  students: FormMultiStudentInput,
};
