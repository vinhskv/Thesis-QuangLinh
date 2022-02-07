import * as React from 'react';
import {Avatar, IconButton, List} from 'react-native-paper';
import {withEnrolmentListItemController} from '.';
import {DefaultListItemAction} from '../../base/controllers/jda_list_controllers/contexts/ListActionContext';
import {IJDAListItemControllerProps} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {Enrolment} from '../../data_types/Enrolment';

export function EnrolmentListItem(
  props: IJDAListItemControllerProps<Enrolment, DefaultListItemAction>,
) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon="account" />}
      onPress={() => props.onItemAction(DefaultListItemAction.EDIT)}
      title={`#${props.item.id} ${props.item.courseModule?.name}- ${props.item.student?.name}`}
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

export default withEnrolmentListItemController(EnrolmentListItem);
