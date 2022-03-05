import {JDAControlledFormInputComponent} from '../../base/controllers/jda_form_controllers/withFormInputController';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import CourseModuleInput from '../../data_inputs/CourseModuleInput';
import StudentInput from '../../data_inputs/StudentInput';
import {Enrolment} from '../../data_types/Enrolment';

export const EnrolmentFormConfig: Record<
  keyof Enrolment,
  JDAControlledFormInputComponent<Enrolment, any>
> = {
  id: NumberInput,
  student: StudentInput,
  courseModule: CourseModuleInput,
  internalMark: NumberInput,
  examMark: NumberInput,
  finalGrade: StringInput,
};
