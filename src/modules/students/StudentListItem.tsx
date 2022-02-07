import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {StudentListItemControllerProps, withStudentListItemController} from '.';
import {DefaultListItemAction} from '../../base/controllers/jda_list_controllers/contexts/ListActionContext';

export function StudentListItem(props: StudentListItemControllerProps) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="account" />}
      onPress={() => {
        if (props.onItemAction) {
          props.onItemAction(DefaultListItemAction.EDIT);
        }
      }}
      title={`#${props.item.id}  ${props.item.name} - ${
        props.item.address?.name || ''
      }`}
      right={p => (
        <IconButton
          onPress={() => {
            if (props.onItemAction) {
              props.onItemAction(DefaultListItemAction.DELETE);
            }
          }}
          icon={'delete'}
          {...p}
          color="red"
        />
      )}
    />
  );
}

export default withStudentListItemController(StudentListItem);
