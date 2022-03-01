import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {IJDAListItemControllerProps} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {Address} from '../../data_types/Address';

export function AddressListItem(props: IJDAListItemControllerProps<Address>) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="home-city" />}
      onPress={props.onEdit}
      title={`#${props.item.id}  ${props.item.name}`}
      right={p => (
        <IconButton
          onPress={props.onDelete}
          icon={'delete'}
          {...p}
          color="red"
        />
      )}
    />
  );
}
