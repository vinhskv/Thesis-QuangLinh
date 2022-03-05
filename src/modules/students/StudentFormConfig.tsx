import {JDAControlledFormInputComponent} from '../../base/controllers/jda_form_controllers/withFormInputController';
import AddressInput from '../../data_inputs/AddressInput';
import DateInput from '../../data_inputs/basic_inputs/DateInput';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import {GenderInput} from '../../data_inputs/StudentInput';
import {Student} from '../../data_types/Student';

export const StudentFormConfig: Record<
  keyof Student,
  JDAControlledFormInputComponent<Student, any>
> = {
  id: NumberInput,
  name: StringInput,
  gender: GenderInput,
  email: StringInput,
  address: AddressInput,
  dob: DateInput,
};
