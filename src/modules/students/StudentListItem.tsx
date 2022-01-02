import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {
  DefaultListItemAction,
  IJDAListItemControllerProps,
  withListItemController,
} from '../../base/controlers/jda_list_controllers/withListItemController';
import {Student} from '../../data_types/Student';

export function StudentListItem(
  props: IJDAListItemControllerProps<Student, DefaultListItemAction>,
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
  Student,
  DefaultListItemAction,
  IJDAListItemControllerProps<Student, DefaultListItemAction>
>(StudentListItem);
