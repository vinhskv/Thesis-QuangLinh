import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {
  DefaultListItemAction,
  IJDAListItemControllerProps,
  withListItemController,
} from '../../base/controlers/jda_list_controllers/withListItemController';
import {Address} from '../../data_types/Address';

export interface IAddressListItemProps
  extends IJDAListItemControllerProps<Address> {}

function AddressListItem(props: IAddressListItemProps) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="home-city" />}
      onPress={() => props.onItemAction(DefaultListItemAction.EDIT)}
      title={`#${props.item.id}  ${props.item.name}`}
      right={p => (
        <IconButton
          onPress={() => props.onItemAction(DefaultListItemAction.DELETE)}
          icon={'delete'}
          {...p}
          color="red"
        />
      )}
    />
  );
}

export default withListItemController<
  Address,
  DefaultListItemAction,
  IAddressListItemProps
>(AddressListItem);
