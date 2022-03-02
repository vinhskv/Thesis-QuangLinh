import * as React from 'react';
import {IJDAModuleControllerProps} from '../../controllers/jda_module_controller/withModuleController';
import {GroupScreen} from '../jda_group_screens/GroupScreens';

export interface IJDABasicModuleProps extends IJDAModuleControllerProps {}

export function JDABasicModule(props: IJDABasicModuleProps) {
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
