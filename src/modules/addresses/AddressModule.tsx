import * as React from 'react';
import BaseModule from '../BaseModule';
import {AddressFormConfig} from './AddressFormConfig';
import AddressListItem from './AddressListItem';

export default function AddressModule() {
  return (
    <BaseModule
      api_resource="addresses"
      keyField="id"
      formConfig={AddressFormConfig}
      listItemComponent={AddressListItem}
    />
  );
}
