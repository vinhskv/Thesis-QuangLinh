import {useCallback} from 'react';
import {useAPI} from '../../jda_apis/useAPI';
import {
  DefaultListAction,
  DefaultListItemAction,
} from '../contexts/ListContext';
import {UseListItemControlType} from './useListItemsControl';

export function useBasicListActionWithAPI<
  ItemType,
  ListActionTypes = DefaultListAction,
  ListItemActionTypes = DefaultListItemAction<ItemType>,
>(
  itemsViewControl: UseListItemControlType<ItemType>,
  keyField: keyof ItemType,
  routeName: string,
) {
  const api = useAPI<ItemType>(routeName);
  const refreshList = useCallback(async () => {
    //TODO api does not support pageSize
    const result = await api.getByPage(0);
    console.log(result);
    if (result.success) {
      itemsViewControl.resetItems(result.payload.content || []);
    }
  }, [api, itemsViewControl]);

  // const deleteItem = useCallback(
  //   async (item: ItemType) => {
  //     const result = await api.deleteById(String(item[keyField]));
  //     if (result.success) {
  //       itemsViewControl.removeItems([item[keyField]]);
  //     }
  //   },
  //   [api, itemsViewControl, keyField],
  // );

  const useListItemAction = useCallback((action: keyof ListItemActionTypes) => {
    console.log(action);
    // deleteItem()
    return;
  }, []);
  const useListAction = useCallback(
    (action: keyof ListActionTypes) => {
      console.log(action);
      refreshList();
    },
    [refreshList],
  );
  return {useListAction, useListItemAction};
}
