import React, {ComponentType, forwardRef, useImperativeHandle} from 'react';
import {JDAListContext} from '../contexts/ListContext';
import {
  IJDAListItemActionsProps,
  useItemActions,
} from '../hooks/useItemsActions';
import {useListCheckControl} from '../hooks/useListCheckControl';
import {IJDAItemControl, useItemsControl} from '../hooks/useListItemsControl';
import {IJDAPageControl, usePageControl} from '../hooks/useListPageControl';

interface IJDAListAPI {
  itemsControl: ReturnType<typeof useItemsControl>;
  paging: ReturnType<typeof usePageControl>;
  listCheckControl: ReturnType<typeof useListCheckControl>;
}

export interface IJDAListControllerProps<T>
  extends IJDAListAPI,
    IJDAListItemActionsProps<T> {
  onRefresh: () => void;
  onAddItem: () => void;
  onChangePage: (page: number) => void;
  onChangePageSize: (pageSize: number) => void;
}

export interface IJDAListRef<T> {
  itemsControl: IJDAItemControl<T>;
  pageControl: IJDAPageControl;
}

export function withJDAListController<
  T,
  P extends IJDAListControllerProps<T> = IJDAListControllerProps<T>,
>(itemPrimaryKey: keyof T, Component: ComponentType<P>) {
  return forwardRef<IJDAListRef<T>, Omit<P, keyof IJDAListAPI>>(
    (props, ref) => {
      const {paging, pageControl} = usePageControl();
      const {items, itemsControl} = useItemsControl<T>(itemPrimaryKey);
      const listCheckControl = useListCheckControl<T>(itemPrimaryKey, items);
      const itemActionsHandler = useItemActions(items, {...props});

      // export api via ref for control from ParrentComponent
      useImperativeHandle(ref, () => ({
        itemsControl,
        pageControl,
      }));
      return (
        <JDAListContext.Provider value={itemActionsHandler}>
          <Component
            {...(props as P)}
            items
            paging={paging}
            listCheckControl={listCheckControl}
          />
        </JDAListContext.Provider>
      );
    },
  );
}
