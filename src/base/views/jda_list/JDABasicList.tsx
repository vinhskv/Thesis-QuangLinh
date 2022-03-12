import {Button, Icon} from '@ui-kitten/components';
import * as React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
// import {
//   DefaultListAction,
//   DefaultListItemAction,
//   IJDAActionMap,
// } from '../../controllers/jda_list_controllers/contexts/ListActionContext';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';
export interface IJDABasicListProps<T> extends IJDAListControllerProps<T> {}

export default function JDABasicList<T>(props: IJDABasicListProps<T>) {
  return (
    <View>
      <FlatList
        refreshing={props.loading}
        data={props.itemComponents}
        onRefresh={props.onRefresh}
        ListEmptyComponent={
          <Image
            style={styles.emptyImage}
            source={require('../../resources/nodata-found.png')}
          />
        }
        renderItem={({item}) => item}
      />
      <Button
        accessoryLeft={<Icon name="plus" />}
        style={styles.fab}
        onPress={props.onAddItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    margin: 5,
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
  },
  emptyImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
