import React, {ComponentType} from 'react';
import {
  DefaultListItemAction,
  IListActionContext,
} from '../contexts/ListActionContext';

export interface IJDAListItemControllerProps<T, ActionTypes> {
  item: T;
  onItemAction: (actionType: ActionTypes, payload?: any) => void;
}
// HOC == high oder component

export function withJDAListItemController<
  T,
  ActionTypes = DefaultListItemAction,
  P extends IJDAListItemControllerProps<
    T,
    ActionTypes
  > = IJDAListItemControllerProps<T, ActionTypes>,
>(
  Component: ComponentType<P>,
  Context: React.Context<IListActionContext<T, ActionTypes>>,
) {
  return (props: Omit<P, 'onItemAction'>) => {
    return (
      <Context.Consumer>
        {v => <Component {...(props as P)} {...v} />}
      </Context.Consumer>
    );
  };
}
