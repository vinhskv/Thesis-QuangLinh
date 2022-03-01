import React from 'react';

export interface IJDAActionMap {
  [event: string]: (...args: any[]) => any;
}

export interface DefaultListItemAction<T> extends IJDAActionMap {
  DELETE: (item: T) => void;
  EDIT: (item: T, updatedObject: Partial<T>) => void;
  SHOW_DETAIL: (item: T) => void;
}

export interface DefaultListAction extends IJDAActionMap {
  REFRESH: () => void;
}

export type ListActionType<ListAction extends IJDAActionMap> = keyof ListAction;

export type ListActionParams<
  ListAction extends IJDAActionMap,
  Ev extends ListActionType<ListAction>,
> = Parameters<ListAction[Ev]>;

export interface IJDAListActionContext<
  ListActions extends IJDAActionMap,
  ListItemActions extends IJDAActionMap,
> {
  onListAction?: (
    actionType: ListActionType<ListActions>,
    ...args: ListActionParams<ListActions, ListActionType<ListActions>>
  ) => void;
  onListItemAction?: (
    actionType: ListActionType<ListItemActions>,
    ...args: ListActionParams<ListItemActions, ListActionType<ListItemActions>>
  ) => void;
}
export interface IJDAListActionHandler<
  ListActions extends IJDAActionMap,
  ListItemActions extends IJDAActionMap,
> {
  handleListAction: (
    actionType: ListActionType<ListActions>,
    ...args: ListActionParams<ListItemActions, ListActionType<ListItemActions>>
  ) => void;
}

export function createJDAListActionContext<
  ListActions extends IJDAActionMap,
  ListItemActions extends IJDAActionMap,
>() {
  return React.createContext<
    IJDAListActionContext<ListActions, ListItemActions>
  >({});
}

export interface IJDAListContext {
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onShowDetail: (index: number) => void;
}

export const JDAListContext = React.createContext<IJDAListContext>({
  onDelete: (_index: number) => {},
  onEdit: (_index: number) => {},
  onShowDetail: (_index: number) => {},
});