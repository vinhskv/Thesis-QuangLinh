import React from 'react';
import StringInput from '../../data_inputs/StringInput';
import {Address, AddressFieldLabel} from '../../data_types/Address';

export const AddressFormConfig: Record<keyof Address, React.ReactNode> = {
  id: <StringInput name="id" label={AddressFieldLabel.id} />,
  name: <StringInput name="name" label={AddressFieldLabel.name} />,
};
