import {
  Button,
  Divider,
  Icon,
  List,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';
export interface IJDABasicListProps<T> extends IJDAListControllerProps<T> {}

export default function JDABasicList<T>(props: IJDABasicListProps<T>) {
  return (
    <View>
      <List
        ListFooterComponent={
          <View style={styles.footer}>
            <Button
              style={styles.paging_btn}
              appearance="ghost"
              accessoryLeft={<Icon name="arrow-ios-back-outline" />}
              onPress={props.paging.backPage}
            />
            <Select
              value={props.paging.currentPage}
              style={styles.select}
              size="small"
              placeholder="Small">
              {[...Array(100).keys()].map((e) => (
                <SelectItem title={String(e + 1)} />
              ))}
            </Select>
            <Button
              style={styles.paging_btn}
              appearance="ghost"
              accessoryLeft={<Icon name="arrow-ios-forward-outline" />}
              onPress={props.paging.nextPage}
            />
          </View>
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <Button
              size={'small'}
              accessoryLeft={<Icon name="plus" />}
              style={styles.fab}
              onPress={props.onAddItem}>
              Add
            </Button>
          </View>
        }
        refreshing={props.loading}
        data={props.itemComponents}
        onRefresh={props.onRefresh}
        ListEmptyComponent={
          <Image
            style={styles.emptyImage}
            source={require('./nodata-found.png')}
          />
        }
        ItemSeparatorComponent={Divider}
        renderItem={({item}) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    margin: 5,
    alignSelf: 'flex-end',
  },
  emptyImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  select: {
    marginVertical: 10,
    width: 100,
  },
  paging_btn: {
    margin: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  header: {
    marginVertical: 2,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
