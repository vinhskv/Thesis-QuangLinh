import React, {ComponentType} from 'react';
import {useListCheckControl} from './useListCheckControl';
import {useListPageControl} from './useListPageControl';

export interface IListActionContext<T> {
  onItemAction?: (item: T, actionType: string, payload: any) => any;
}

export const ListActionContext = React.createContext<IListActionContext<any>>(
  {},
);

export interface IJDAListControllerProps<T> extends IListActionContext<T> {
  items: T[];
  totalItems: number;
  itemPerPage?: number;
  pageControl: ReturnType<typeof useListPageControl>;
  listCheckControl: ReturnType<typeof useListCheckControl>;
}

export function withListController<T, P extends IJDAListControllerProps<T>>(
  idField: keyof T,
  Component: ComponentType<P>,
) {
  return (props: Omit<P, 'pageControl' | 'listCheckControl'>) => {
    const pageControl = useListPageControl(props.totalItems, props.itemPerPage);
    const listCheckControl = useListCheckControl(idField, props.items);
    <ListActionContext.Provider value={{onItemAction: props.onItemAction}}>
      <Component
        {...(props as P)}
        pageControl={pageControl}
        listCheckControl={listCheckControl}
      />
    </ListActionContext.Provider>;
  };
}
