import {Card, List, ListItem} from '@ui-kitten/components';
import * as React from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IJDAFormControlerProps} from '../../controlers/jda_form_controlers/withFormController';

export interface IJDAFormProps<T> extends IJDAFormControlerProps<T> {
  formName: string;
  initialValue?: T;
  children: JSX.Element[];
  submitText?: string;
}

export default function JDAForm<T>(props: IJDAFormProps<T>) {
  return <Card>{props.children}</Card>;
}
