import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Student} from '../../data_types/Student';
import {
  FormAddressInput,
  FormDateInput,
  FormGenderInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentFormConfig: JDAFormConfig<Student> = {
  id: FormNumberInput,
  name: FormStringInput,
  gender: FormGenderInput,
  email: FormStringInput,
  address: FormAddressInput,
  dob: FormDateInput,
};
