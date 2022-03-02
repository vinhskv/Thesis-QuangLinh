import {Button} from '@ui-kitten/components';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import {
//   DefaultListAction,
//   DefaultListItemAction,
//   IJDAActionMap,
// } from '../../controllers/jda_list_controllers/contexts/ListActionContext';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';

export interface IJDABasicListProps<T> extends IJDAListControllerProps<T> {}

export default function JDABasicList<T>(props: IJDABasicListProps<T>) {
  return (
    <FlatList
      ListHeaderComponent={
        <Button
          onPress={() => {
            console.log('refresh');
            console.log(props);
            props.onRefresh();
          }}>
          Refresh
        </Button>
      }
      data={props.itemComponents}
      keyExtractor={(_t, i) => String(i)}
      onRefresh={props.onRefresh}
      renderItem={({item}) => {
        console.log(item);
        return <></>;
      }}
    />
  );
}
