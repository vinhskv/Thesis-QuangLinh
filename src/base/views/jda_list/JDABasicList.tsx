import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
// import {
//   DefaultListAction,
//   DefaultListItemAction,
//   IJDAActionMap,
// } from '../../controllers/jda_list_controllers/contexts/ListActionContext';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';

export interface IJDABasicListProps<T> extends IJDAListControllerProps<T> {}

export default function JDABasicList<T>(props: IJDABasicListProps<T>) {
  return (
    <>
      <FlatList
        refreshing={props.loading}
        data={props.itemComponents}
        onRefresh={props.onRefresh}
        renderItem={({item}) => item}
      />
      <FAB icon={'plus'} style={styles.fab} onPress={props.onAddItem} />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
