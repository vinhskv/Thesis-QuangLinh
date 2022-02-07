import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {AddressListItemControllerProps, withAddressListItemController} from '.';
import {DefaultListItemAction} from '../../base/controllers/jda_list_controllers/contexts/ListActionContext';

function AddressListItem(props: AddressListItemControllerProps) {
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

export default withAddressListItemController(AddressListItem);
