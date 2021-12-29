import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {IJDAListControllerProps} from '../../controlers/jda_list_controllers/withListController';

export interface IJDAListProps<T> extends IJDAListControllerProps<T> {
  renderItem: (item: T) => JSX.Element;
}

export function JDAList<T>(props: IJDAListProps<T>) {
  return (
    <>
      <FlatList
        data={props.items}
        renderItem={({item}) => props.renderItem(item)}
      />
      
    </>
  );
}
