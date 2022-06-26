import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {Address} from '../../data_types/Address';

import {FormStringInput} from '../FormInputs';

import {FormStudentInput} from '../student/Input';

export const AddressFormConfig: IJDAFormConfig<Address> = {
  // id: {
  //   component: FormNumberInput,
  //   options: {
  //     rules: {
  //       max: 20,
  //     },
  //   },
  // },
  name: {
    component: FormStringInput,
    options: {
      rules: {
        maxLength: 3,
        validate: _v => {
          console.log('Validate String input');
          return 'Exeed max lenght';
        },
      },
    },
  },
  student: {component: FormStudentInput},
};
