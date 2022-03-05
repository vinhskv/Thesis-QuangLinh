import * as React from 'react';
import {IconButton, List, Text} from 'react-native-paper';
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
      left={p => <List.Icon {...p} icon={props.icon} />}
      onPress={props.onShowDetail}
      title={() => <Text>{props.title(props.item)}</Text>}
      description={() =>
        props.subTitle ? <Text>{props.subTitle(props.item)}</Text> : undefined
      }
      right={p => (
        <>
          <IconButton
            onPress={props.onEdit}
            icon={'circle-edit-outline'}
            {...p}
            color="grey"
          />
          <IconButton
            onPress={props.onDelete}
            icon={'delete'}
            {...p}
            color="red"
          />
        </>
      )}
    />
  );
}
