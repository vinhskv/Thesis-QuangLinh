import {JDAControlledFormInputComponent} from '../../base/controllers/jda_form_controllers/withFormInputController';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import {CourseModule} from '../../data_types/CourseModule/CourseModule';

export const CourseModuleFormConfig: Record<
  keyof CourseModule,
  JDAControlledFormInputComponent<CourseModule, any>
> = {
  id: NumberInput,
  name: StringInput,
  code: StringInput,
  semester: NumberInput,
  credits: NumberInput,
};
