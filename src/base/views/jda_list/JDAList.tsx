import {Button} from '@ui-kitten/components';
import * as React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export interface IJDAListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  refreshList?: () => void;
}

export function JDAList<T>(props: IJDAListProps<T>) {
  return (
    <FlatList<T>
      ListHeaderComponent={<Button onPress={props.refreshList}>Refresh</Button>}
      data={props.data}
      renderItem={({item}) => (
        <View style={{borderBottomWidth: 0.5}}>{props.renderItem(item)}</View>
      )}
    />
  );
}
