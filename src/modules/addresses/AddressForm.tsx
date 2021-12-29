import * as React from 'react';
import {withJDAFormControler} from '../../base/controlers/jda_form_controlers/withFormController';
import JDAForm, {IJDAFormProps} from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_basic_inputs/JDAStringInput';
import {Address, AddressFieldLabel} from '../../data_types/Address';

const Form = withJDAFormControler<Address, IJDAFormProps<Address>>(JDAForm);

export interface IAddressFormScreenProps {}

export function AddressFormComponent(props: IAddressFormScreenProps) {
  return (
    <Form formName="Address" onSubmit={v => {}}>
      {Object.entries(AddressFieldLabel).map((e, i) => (
        <JDAStringInput key={i} label={e[1]} name={e[0]} />
      ))}
    </Form>
  );
}
