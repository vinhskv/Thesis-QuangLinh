import {JDAControlledFormInputComponent} from '../../../base/controllers/jda_form_controllers/withFormInputController';
import StringInput from '../../../data_inputs/basic_inputs/StringInput';
import {ElectiveModule} from '../../../data_types/CourseModule/ElectiveModule';
import {CourseModuleFormConfig} from '../CourseModuleFormConfig';

export const ElectiveModuleFormConfig: Record<
  keyof ElectiveModule,
  JDAControlledFormInputComponent<ElectiveModule, any>
> = {
  ...CourseModuleFormConfig,
  deptName: StringInput,
};
