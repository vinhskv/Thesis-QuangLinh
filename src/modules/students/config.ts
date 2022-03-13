import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {Student, toStudentPOST} from '../../data_types/Student';
import {
  FormAddressInput,
  FormDateInput,
  FormGenderInput,
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

export const StudentModuleConfig: IJDAModuleConfig<Student> = {
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
  apiConfig: {
    toPOST: toStudentPOST,
  },
};

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: FormNumberInput,
  name: FormStringInput,
  gender: FormGenderInput,
  email: FormStringInput,
  address: FormAddressInput,
  dob: FormDateInput,
};

export const StudentListConfig: IJDAListConfig<Student> = {
  listItemProps: {
    icon: 'person-outline',
    title: student => `${student.name}`,
    subTitle: student =>
      `#${student.id} | ${student.dob} | ${student.address?.name || ''}`,
  },
  listProps: {},
};
