import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {
  StudentClassListItemControllerProps,
  withStudentClassListItemController,
} from '.';
import {DefaultListItemAction} from '../../base/controllers/jda_list_controllers/contexts/ListContext';

export function StudentListItem(props: StudentClassListItemControllerProps) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="account" />}
      onPress={() => props.onListItemAction(DefaultListItemAction.SHOW_DETAIL)}
      title={`#${props.item.id}  ${props.item.name}`}
      right={p => (
        <IconButton
          onPress={() => props.onListItemAction(DefaultListItemAction.DELETE)}
          icon={'delete'}
          {...p}
          color="red"
        />
      )}
    />
  );
}

export default withStudentClassListItemController(StudentListItem);
