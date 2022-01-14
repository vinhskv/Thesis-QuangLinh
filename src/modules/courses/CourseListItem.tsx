import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {
  DefaultListItemAction,
  IJDAListItemControllerProps,
  withListItemController,
} from '../../base/controllers/jda_list_controllers/withListItemController';
import {CourseModule} from '../../data_types/CourseModule';

export function StudentListItem(
  props: IJDAListItemControllerProps<CourseModule, DefaultListItemAction>,
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
  CourseModule,
  DefaultListItemAction,
  IJDAListItemControllerProps<CourseModule, DefaultListItemAction>
>(StudentListItem);
