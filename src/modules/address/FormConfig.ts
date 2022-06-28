import { IJDAFormConfig } from "../../base/controllers/jda_form_controllers/withFormController";
import {Address} from '../../data_types/Address';

import {
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

import { FormStudentInput } from "../student/Input";

export const AddressFormConfig: IJDAFormConfig<Address> = {
  id: {
    component: FormNumberInput,
    options:{rules:{maxLength:3,
},},
  },
  name: {
    component: FormStringInput,
    options:{rules:{required:true,
maxLength:20,
},},
  },
  student: {
    component: FormStudentInput,
    
  },
};

