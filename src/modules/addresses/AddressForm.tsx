import * as React from 'react';
import {withJDAFormControler} from '../../base/controlers/jda_form_controlers/withFormController';
import JDAForm, {IJDAFormProps} from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_basic_inputs/JDAStringInput';
import {Address} from '../../data_types/Address';

const Form = withJDAFormControler<Address, IJDAFormProps<Address>>(JDAForm);

export interface IAddressFormScreenProps {}

export function AddressFormComponent(props: IAddressFormScreenProps) {
  return (
    <Form formName="Address" onSubmit={v => {}}>
      <JDAStringInput label="ID" name="long" />
      <JDAStringInput label="Name" name="name" />
    </Form>
  );
}
