import {
  IJDAListControllerProps,
  withJDAListController,
} from '../controllers/jda_list_controllers/hocs/withJDAListController';
import {
  IJDAListItemControllerProps,
  withJDAListItemController,
} from '../controllers/jda_list_controllers/hocs/withJDAListItemController';
import {IJDAModuleConfig} from '../controllers/jda_module_controller/withModuleController';
import JDABasicList, {IJDABasicListProps} from '../views/jda_list/JDABasicList';
import {
  IJDABasicListItemProps,
  JDABasicListItem,
} from '../views/jda_list/JDABasicListItem';

/**
 * Use only for JDABasicList and JDABasicListItem,
 * if you have custom object for specific Module, you should change IJDABasicListProps and IJDABasicListProps
 * to your custom List props and custom ListItem props
 */
export type IJDAListConfig<T> = {
  listProps: Omit<IJDABasicListProps<T>, keyof IJDAListControllerProps<T>>;
  listItemProps: Omit<
    IJDABasicListItemProps<T>,
    keyof IJDAListItemControllerProps<T>
  >;
};

export function createListComponents<T, SubT = T>(
  moduleConfig: IJDAModuleConfig<T, SubT>,
  listConfig: IJDAListConfig<T>,
) {
  type ListItemProps = IJDABasicListItemProps<T>;
  const ListItem = withJDAListItemController<T, ListItemProps>(
    JDABasicListItem,
    listConfig.listItemProps,
  );

  type ListProps = IJDABasicListProps<T>;
  const List = withJDAListController<T, ListProps, SubT>(
    JDABasicList,
    ListItem,
    moduleConfig,
  );
  return {List, ListItem};
}
