import * as React from 'react';
import {GroupScreen} from '../base/views/jda_group_screens/GroupScreens';
import {GenericForm, IGenericFormProps} from './GenericForm';

export interface IGenericModuleProps<T> extends IGenericFormProps<T> {
  ListComponent?: React.ComponentType<any>;
  FormComponent?: React.ComponentType<any>;
  formTitle?: string;
  listTitle?: string;
}

export default function GenericModule<T>(props: IGenericModuleProps<T>) {
  const ListView = props.ListComponent || React.Fragment;
  return (
    <GroupScreen
      subScreens={[
        {
          name: 'List',
          title: props.listTitle,
          component: <ListView />,
        },
        {
          name: 'Form',
          title: props.formTitle,
          component: <GenericForm {...props} />,
        },
      ]}
    />
  );
}
