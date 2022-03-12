import * as React from 'react';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {JDAObjectInput} from '../base/views/jda_inputs/JDAObjectInput';
import {
  CourseModule,
  CourseModuleApiResource,
} from '../data_types/CourseModule/CourseModule';

export interface ICourseModuleInputProps
  extends IJDAFormInputControllerProps<CourseModule> {}

function CourseModuleInput(props: ICourseModuleInputProps) {
  const courseModuleItem = (ad?: CourseModule) =>
    ad ? `# ${ad.id} ${ad.name}` : '';
  return (
    <JDAObjectInput<CourseModule>
      apiResource={CourseModuleApiResource}
      renderOption={courseModuleItem}
      onChange={props.field.onChange}
      value={props.field.value}
      label={props.label}
      disabled={props.disabled}
    />
  );
}
export default withJDAFormInputController<
  CourseModule,
  ICourseModuleInputProps
>(CourseModuleInput);
