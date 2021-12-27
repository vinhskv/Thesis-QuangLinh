import * as React from 'react';
import {Input} from 'react-native-elements/dist/input/Input';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controlers/jda_form_controlers/withFormInputController';
import {Address} from '../../data_types/Address';

export interface IAddressInputProps
  extends IJDAFormInputControllerProps<Address> {}

function AddressInput(props: IAddressInputProps) {
  return <Input value={props.field.value}></Input>;
}

export default withJDAFormInputController<Address, IAddressInputProps>(
  AddressInput,
);
