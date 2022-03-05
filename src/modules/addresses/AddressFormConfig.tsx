import {JDAControlledFormInputComponent} from '../../base/controllers/jda_form_controllers/withFormInputController';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {Address} from '../../data_types/Address';

export const AddressFormConfig: Record<
  keyof Address,
  JDAControlledFormInputComponent<Address, any>
> = {
  id: NumberInput,
  name: StringInput,
  student: StudentInput,
};
