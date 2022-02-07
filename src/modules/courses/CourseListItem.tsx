import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {CourseListItemControllerProps, withCourseListItemController} from '.';
import {DefaultListItemAction} from '../../base/controllers/jda_list_controllers/contexts/ListActionContext';

export function CourseModuleListItem(props: CourseListItemControllerProps) {
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

export default withCourseListItemController(CourseModuleListItem);
