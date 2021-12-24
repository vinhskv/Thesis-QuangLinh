import * as React from 'react';
import JDAForm from '../../base/views/jda_form/JDAForm';
import JDAStringInput from '../../base/views/jda_form/jda_form_inputs/JDAStringInput';

export interface IAddressFormScreenProps {}

export function AddressFormScreen(props: IAddressFormScreenProps) {
  return (
    <JDAForm formName="Address" onSubmit={v => {}}>
      <JDAStringInput label="ID" name="id" />
      <JDAStringInput label="Name" name="name" />
    </JDAForm>
  );
}
