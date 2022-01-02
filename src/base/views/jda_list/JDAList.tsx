import * as React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IJDAListControllerProps} from '../../controlers/jda_list_controllers/withListController';

export interface IJDAListProps<T, ActionTypes>
  extends IJDAListControllerProps<T, ActionTypes> {
  // eslint-disable-next-line no-undef
  renderItem: (item: T) => JSX.Element;
}

export function JDAList<T, ActionTypes>(props: IJDAListProps<T, ActionTypes>) {
  return (
    <FlatList<T>
      onRefresh={props.itemsControl.refreshList}
      data={props.itemsControl.items}
      renderItem={({item}) => (
        <View style={{borderBottomWidth: 0.5}}>{props.renderItem(item)}</View>
      )}
    />
  );
}
