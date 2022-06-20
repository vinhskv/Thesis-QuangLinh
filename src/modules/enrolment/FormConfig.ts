import { IJDAFormConfig } from "../../base/controllers/jda_form_controllers/withFormController";
import {Enrolment} from '../../data_types/Enrolment';

import {
  FormNumberInput,
  FormStringInput,
} from '../FormInputs';

import { FormStudentInput } from "../student/Input";
import { FormCourseModuleInput } from "../course_module/Input";

export const EnrolmentFormConfig: IJDAFormConfig<Enrolment> = {
  id: FormNumberInput,
  student: FormStudentInput,
  courseModule: FormCourseModuleInput,
  internalMark: FormNumberInput,
  examMark: FormNumberInput,
  finalGrade: FormStringInput,
  finalMark: FormNumberInput,
};

