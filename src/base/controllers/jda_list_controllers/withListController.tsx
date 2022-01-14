import React, {ComponentType, useState} from 'react';
import {
  UseListItemControlType,
  useListItemsControl,
} from './useListItemsControl';
import {useListCheckControl} from './useListCheckControl';
import {useListPageControl} from './useListPageControl';
import {DefaultListItemAction} from './withListItemController';

export interface IListActionContext<T, ActionTypes = DefaultListItemAction> {
  onItemAction?: (item: T, actionType: ActionTypes, payload: any) => any;
}

export function createListContext<T, ActionTypes = DefaultListItemAction>() {
  return React.createContext<IListActionContext<T, ActionTypes> | null>(null);
}

export interface IJDAListControllerProps<T, ActionTypes>
  extends IListActionContext<T, ActionTypes> {
  initPageSize?: number;
  totalItem: number;
  itemsControl: UseListItemControlType<T>;
  pageControl: ReturnType<typeof useListPageControl>;
  listCheckControl: ReturnType<typeof useListCheckControl>;
}

export function withListController<
  T,
  ActionTypes,
  P extends IJDAListControllerProps<T, ActionTypes>,
>(resourceName: string, idField: keyof T, Component: ComponentType<P>) {
  return (
    props: Omit<
      P,
      'pageControl' | 'listCheckControl' | 'totalItem' | 'itemsControl'
    >,
  ) => {
    const [totalItem, setTotalItem] = useState<number>(0);
    const pageControl = useListPageControl(totalItem, props.initPageSize);
    const itemsControl = useListItemsControl<T>(
      resourceName,
      pageControl.currentPage,
      pageControl.pageSize,
      setTotalItem,
    );
    const listCheckControl = useListCheckControl<T>(
      idField,
      itemsControl.items,
    );
    const ListActionContext = createListContext<T, ActionTypes>();
    return (
      <ListActionContext.Provider value={{onItemAction: props.onItemAction}}>
        <Component
          {...(props as P)}
          pageControl={pageControl}
          listCheckControl={listCheckControl}
          itemsControl={itemsControl}
        />
      </ListActionContext.Provider>
    );
  };
}
