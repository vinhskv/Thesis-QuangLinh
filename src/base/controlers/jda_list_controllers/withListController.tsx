import React, {ComponentType} from 'react';

export interface IJDAListControllerProps<T> {
  pageControl: {
    nextPage: () => void;
    backPage: () => void;
    goToPage: (page: number) => void;
  };
  pageState: {
    pageSize: number;
    pageNum: number;
    totalPage: number;
  };
  itemsControl: {
    check: (items: T[]) => void;
    uncheckAll: () => void;
  };
  itemsState: {
    items: T[];
    checkedItems: T[];
  };
}

export function withListController<T, P extends IJDAListControllerProps<T>>(
  Component: ComponentType<P>,
) {
  return (props: Omit<P, keyof IJDAListControllerProps<T>>) => {
    <Component {...(props as P)} />;
  };
}
