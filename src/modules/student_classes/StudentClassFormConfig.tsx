import {JDAControlledFormInputComponent} from '../../base/controllers/jda_form_controllers/withFormInputController';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {StudentClass} from '../../data_types/StudentClass';

export const StudentClassFormConfig: Record<
  keyof StudentClass,
  JDAControlledFormInputComponent<StudentClass, any>
> = {
  id: NumberInput,
  name: StringInput,
  students: StudentInput,
};
