import * as React from 'react';
import {
  createListActionsContext,
  DefaultListItemAction,
} from '../controllers/jda_list_controllers/contexts/ListActionContext';
import {
  IJDAListControllerProps,
  withJDAListController,
} from '../controllers/jda_list_controllers/hocs/withJDAListController';
import {
  IJDAListItemControllerProps,
  withJDAListItemController,
} from '../controllers/jda_list_controllers/hocs/withJDAListItemController';

export function createJDAList<T, ActionTypes = DefaultListItemAction>(
  resourceName: string,
  fieldKey: keyof T,
) {
  const ListContext = createListActionsContext<T, ActionTypes>();

  type ListControlerProps = IJDAListControllerProps<T, ActionTypes>;

  type ListItemControlerProps = IJDAListItemControllerProps<T, ActionTypes>;

  const withListController = (
    Component: React.ComponentType<IJDAListControllerProps<T, ActionTypes>>,
  ) => withJDAListController(resourceName, fieldKey, Component, ListContext);

  const withListItemController = (
    Component: React.ComponentType<IJDAListItemControllerProps<T, ActionTypes>>,
  ) => withJDAListItemController(Component, ListContext);

  const getListControllerPropsType = (): ListControlerProps =>
    ({} as ListControlerProps);

  const getListItemControllerPropsType = (): ListItemControlerProps =>
    ({} as ListItemControlerProps);

  return {
    withListController,
    withListItemController,
    getListControllerPropsType,
    getListItemControllerPropsType,
  };
}
