import * as React from 'react';
import {Value} from 'react-native-reanimated';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../../base/controlers/jda_form_controlers/withFormInputController';
import {Address} from '../../data_types/Address';

export interface IAddressInputProps
  extends IJDAFormInputControllerProps<Address> {}

function AddressInput(props: IAddressInputProps) {
  return <></>;
}

export default withJDAFormInputController<Address, IAddressInputProps>(
  AddressInput,
);
