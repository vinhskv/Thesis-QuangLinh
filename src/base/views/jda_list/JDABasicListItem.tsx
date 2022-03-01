import * as React from 'react';
import {Avatar, IconButton, List, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {IJDAListItemControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListItemController';

export interface IJDABasicListItemProps<T>
  extends IJDAListItemControllerProps<T> {
  icon: IconSource;
  title: (item: T) => string;
  subTitle?: (item: T) => string;
}
export function JDABasicListItem<T>(props: IJDABasicListItemProps<T>) {
  return (
    <List.Item
      left={p => <Avatar.Icon size={30} {...p.style} icon={props.icon} />}
      onPress={props.onShowDetail}
      title={() => <Text>{props.title(props.item)}</Text>}
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
