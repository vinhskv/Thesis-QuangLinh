import * as React from 'react';
import {IJDAFormControlerProps} from '../../controllers/jda_form_controllers/withFormController';
import {IJDAListControllerProps} from '../../controllers/jda_list_controllers/hocs/withJDAListController';
import {IJDAModuleControllerProps} from '../../controllers/jda_module_controller/withModuleController';
import {GroupScreen} from '../jda_group_screens/GroupScreens';

export interface IJDABasicModuleProps<
  T,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
> extends IJDAModuleControllerProps<T, ListProps, FormProps> {}

export function JDABasicModule<
  T,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
>(props: IJDABasicModuleProps<T, ListProps, FormProps>) {
  return (
    <GroupScreen
      subScreens={[
        {
          component: props.ListView,
          name: props.listRouteName,
        },
        {
          component: props.ListView,
          name: props.formRouteName,
        },
      ]}
    />
  );
}
