import * as React from 'react';
import {useAPI} from '../base/controllers/jda_apis/useAPI';
import {withJDAFormControler} from '../base/controllers/jda_form_controllers/withFormController';
import {
  withGroupScreenItemController,
  IJDAGroupScreenItemControllerProps,
} from '../base/controllers/jda_group_screens_controllers/withGroupScreenItemController';
import JDAForm, {IJDAFormProps} from '../base/views/jda_form/JDAForm';

export interface IGenericFormProps<T> {
  formConfig: Record<keyof T, React.ReactNode>;
  api_resource: string;
}

export function GenericForm<T>(props: IGenericFormProps<T>) {
  const api = useAPI<T>(props.api_resource);

  const Form = withJDAFormControler<T, IJDAFormProps<T>>(JDAForm);
  const FormWrapper =
    withGroupScreenItemController<IJDAGroupScreenItemControllerProps>(
      screenProps => {
        return (
          <Form
            onSubmit={async v => {
              await api.create(v);
              screenProps.goTo('List');
            }}>
            {Object.keys(props.formConfig).map(key => (
              <React.Fragment key={key}>
                {props.formConfig[key as keyof typeof props.formConfig]}
              </React.Fragment>
            ))}
          </Form>
        );
      },
    );
  return <FormWrapper />;
}
