import * as React from 'react';
import {AddressListControllerProps, withAddressListController} from '.';
import {JDAList} from '../../base/views/jda_list/JDAList';
import {Address} from '../../data_types/Address';
import AddressListItem from './AddressListItem';

export interface IAddressListProps extends AddressListControllerProps {}

function AddressList(props: IAddressListProps) {
  return (
    <JDAList<Address>
      renderItem={item => <AddressListItem item={item} />}
      data={props.itemsControl.items}
      refreshList={props.itemsControl.refreshList}
    />
  );
}

export default withAddressListController(AddressList);
