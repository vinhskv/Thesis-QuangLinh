import React, {ComponentType} from 'react';
import {JDAListContext} from '../contexts/ListContext';

export interface IJDABasicListItemAction {
  onEdit: () => void;
  onDelete: () => void;
  onShowDetail: () => void;
}

export interface IJDAListItemControllerProps<T>
  extends IJDABasicListItemAction {
  item: T;
  itemIndex: number;
}

export function withJDAListItemController<
  T,
  P extends IJDAListItemControllerProps<T>,
>(Component: ComponentType<P>) {
  return (props: Omit<P, keyof IJDABasicListItemAction>) => {
    return (
      <JDAListContext.Consumer>
        {v => (
          <Component
            {...(props as P)}
            onDelete={() => v.onDelete(props.itemIndex)}
            onEdit={() => v.onEdit(props.itemIndex)}
            onShowDetail={() => v.onShowDetail(props.itemIndex)}
          />
        )}
      </JDAListContext.Consumer>
    );
  };
}

//Export componentType
class TypeUltil<T, P extends IJDAListItemControllerProps<T>> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below
  controlled = (Component: ComponentType<P>) =>
    withJDAListItemController<T, P>(Component);
}

export type JDAControlledListItemComponent<
  T,
  P extends IJDAListItemControllerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
