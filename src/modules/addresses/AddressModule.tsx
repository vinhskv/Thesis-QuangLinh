import * as React from 'react';
import {Address, AddressResource} from '../../data_types/Address';
import GenericModule from '../GenericModule';
import {AddressFormConfig} from './AddressFormConfig';
import AddressList from './AddressList';

export default function AddressModule() {
  return (
    <GenericModule<Address>
      api_resource={AddressResource}
      formConfig={AddressFormConfig}
      ListComponent={AddressList}
    />
  );
}
