import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {IStudent} from '../../data_types/Student';
import {
  FormAddressInput,
  FormDateInput,
  FormGenderInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentModuleConfig: ModuleConfig<IStudent> = {
  primaryKey: 'id',
  apiResource: 'students',
  moduleName: 'Students',
  fieldLabel: {
    id: 'ID',
    name: 'Name',
    gender: 'Gender',
    dob: 'Date of birth',
    email: 'Email',
    address: 'Address',
  },
  quickRender: s => (s ? `${s.id} | ${s.name} | ${s.address?.name || ''}` : ''),
};

export const StudentFormConfig: JDAFormConfig<IStudent> = {
  id: FormNumberInput,
  name: FormStringInput,
  gender: FormGenderInput,
  email: FormStringInput,
  address: FormAddressInput,
  dob: FormDateInput,
};
