import React, {ComponentType, useCallback, useContext} from 'react';
import {createListContext} from './withListController';

export enum DefaultListItemAction {
  DELETE,
  EDIT,
  SHOW_DETAIL,
}

export interface IJDAListItemControllerProps<
  T,
  ActionTypes = DefaultListItemAction,
> {
  item: T;
  onItemAction: (actionType: ActionTypes, payload?: any) => void;
}

export function withListItemController<
  T,
  ActionTypes,
  P extends IJDAListItemControllerProps<T, ActionTypes>,
>(Component: ComponentType<P>) {
  const ListActionContext = createListContext<T, ActionTypes>();
  return (props: Omit<P, 'onItemAction'>) => {
    const actionContext = useContext(ListActionContext);
    const handleItemAction = useCallback(
      (actionType: ActionTypes, payload: any) => {
        if (actionContext?.onItemAction) {
          actionContext.onItemAction(props.item, actionType, payload);
        }
      },
      [actionContext, props.item],
    );
    return <Component {...(props as P)} onItemAction={handleItemAction} />;
  };
}
