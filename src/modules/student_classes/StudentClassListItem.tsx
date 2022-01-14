import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {
  DefaultListItemAction,
  IJDAListItemControllerProps,
  withListItemController,
} from '../../base/controllers/jda_list_controllers/withListItemController';
import {StudentClass} from '../../data_types/StudentClass';

export function StudentListItem(
  props: IJDAListItemControllerProps<StudentClass, DefaultListItemAction>,
) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="account" />}
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
  StudentClass,
  DefaultListItemAction,
  IJDAListItemControllerProps<StudentClass, DefaultListItemAction>
>(StudentListItem);
