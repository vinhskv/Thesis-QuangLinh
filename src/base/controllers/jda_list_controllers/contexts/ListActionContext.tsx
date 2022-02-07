import React from 'react';

export enum DefaultListItemAction {
  DELETE,
  EDIT,
  SHOW_DETAIL,
}

export interface IListActionContext<T, ActionTypes = DefaultListItemAction> {
  onItemAction?: (item: T, actionType: ActionTypes, payload: any) => any;
}

export function createListActionsContext<T, ActionTypes>() {
  return React.createContext<IListActionContext<T, ActionTypes>>({});
}
