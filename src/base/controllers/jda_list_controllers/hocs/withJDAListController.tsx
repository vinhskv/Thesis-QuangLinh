import React, {ComponentType, useState} from 'react';
import {
  DefaultListItemAction,
  IListActionContext,
} from '../contexts/ListActionContext';
import {useListCheckControl} from '../hooks/useListCheckControl';
import {
  UseListItemControlType,
  useListItemsControl,
} from '../hooks/useListItemsControl';
import {useListPageControl} from '../hooks/useListPageControl';

export interface IJDAListControllerProps<T, ActionTypes>
  extends IListActionContext<T, ActionTypes> {
  initPageSize?: number;
  totalItem: number;
  itemsControl: UseListItemControlType<T>;
  pageControl: ReturnType<typeof useListPageControl>;
  listCheckControl: ReturnType<typeof useListCheckControl>;
}

export function withJDAListController<
  T,
  ActionTypes = DefaultListItemAction,
  P extends IJDAListControllerProps<T, ActionTypes> = IJDAListControllerProps<
    T,
    ActionTypes
  >,
>(
  resourceName: string,
  idField: keyof T,
  Component: ComponentType<P>,
  context: React.Context<IListActionContext<T, ActionTypes>>,
) {
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
    const ContextProvider = context.Provider;
    return (
      <ContextProvider value={{onItemAction: props.onItemAction}}>
        <Component
          {...(props as P)}
          pageControl={pageControl}
          listCheckControl={listCheckControl}
          itemsControl={itemsControl}
        />
      </ContextProvider>
    );
  };
}
