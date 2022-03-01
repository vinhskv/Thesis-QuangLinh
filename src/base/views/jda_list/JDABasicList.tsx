import {Button} from '@ui-kitten/components';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import {
//   DefaultListAction,
//   DefaultListItemAction,
//   IJDAActionMap,
// } from '../../controllers/jda_list_controllers/contexts/ListActionContext';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';
import {IJDAListItemControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListItemController';

export interface IJDABasicListProps<T, P extends IJDAListItemControllerProps<T>>
  extends IJDAListControllerProps<T> {
  data: T[];
  ItemView: React.ComponentType<P>;
  itemViewProps?: Partial<P>;
}

export default function JDABasicList<
  T,
  P extends IJDAListItemControllerProps<T> = IJDAListItemControllerProps<T>,
>(props: IJDABasicListProps<T, P>) {
  const ItemView = props.ItemView;
  return (
    <FlatList<T>
      ListHeaderComponent={<Button onPress={props.onRefresh}>Refresh</Button>}
      data={props.data}
      keyExtractor={(_t, i) => String(i)}
      renderItem={({item, index}) => (
        <ItemView
          {...((props.itemViewProps as P) || ({} as P))} // dev can add custom props for ItemView
          item={item}
          itemIndex={index}
        />
      )}
    />
  );
}
