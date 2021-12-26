import * as React from 'react';
import {withJDAFormControler} from '../../base/controlers/jda_form_controlers/withFormController';
import JDAForm, {IJDAFormProps} from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_basic_inputs/JDAStringInput';
import {Address} from '../../data_types/Address';

export interface IAddressFormScreenProps {}

export function AddressFormScreen(props: IAddressFormScreenProps) {
  const AddressForm = withJDAFormControler<Address, IJDAFormProps<Address>>(
    JDAForm,
  );
  return (
    <AddressForm formName="Address" onSubmit={v => {}}>
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="Name" name="name" />
    </AddressForm>
  );
}
