import {ComponentType, useCallback, useContext} from 'react';
import {ListActionContext as JDAListActionContext} from './withListController';

export interface IJDAFormItemControllerProps<T> {
  item: T;
  onItemAction: (actionType: string, payload: any) => void;
}

export function withListItemController<
  T,
  P extends IJDAFormItemControllerProps<T>,
>(Component: ComponentType<P>) {
  return (props: Omit<P, 'onItemAction'>) => {
    const actionContext = useContext(JDAListActionContext);
    const handleItemAction = useCallback(
      (actionType: string, payload: any) => {
        if (actionContext.onItemAction)
          actionContext.onItemAction(props.item, actionType, payload);
      },
      [props.item],
    );
    return <Component {...(props as P)} onItemAction={handleItemAction} />;
  };
}
