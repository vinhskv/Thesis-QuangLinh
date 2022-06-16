import { IJDAFormConfig } from "../../base/controllers/jda_form_controllers/withFormController";
import {StudentClass} from '../../data_types/StudentClass';


import {
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

import { FormMultiStudentInput } from "../student/Input";

export const StudentClassFormConfig: IJDAFormConfig<StudentClass> = {
  id: FormNumberInput,
  name: FormStringInput,
  students: FormMultiStudentInput,
};

