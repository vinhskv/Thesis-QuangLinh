import {JDAControlledFormInputComponent} from '../../../base/controllers/jda_form_controllers/withFormInputController';
import {CompulsoryModule} from '../../../data_types/CourseModule/CompulsoryModule';
import {CourseModuleFormConfig} from '../CourseModuleFormConfig';

export const CompulsoryModuleFormConfig: Record<
  keyof CompulsoryModule,
  JDAControlledFormInputComponent<CompulsoryModule, any>
> = {
  ...CourseModuleFormConfig,
};
