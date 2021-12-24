import * as React from 'react';
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {
  IJDAFormControlerProps
} from '../../controlers/jda_form_controlers/withFormController';

export interface IJDAFormProps<T> extends IJDAFormControlerProps<T> {
  formName: string;
  initialValue?: T;
  children: JSX.Element[];
  submitText?: string;
}

export default function JDAForm<T>(props: IJDAFormProps<T>) {
  return (
    <Card>
      <Card.Title>{props.formName + ' form'}</Card.Title>
      <Card.Divider />
      <FlatList data={props.children} renderItem={({item}) => item} />
      <Button
        title={props.submitText || 'Submit'}
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        titleStyle={{fontWeight: 'bold'}}
        onPress={_e => {
          props.submit();
        }}
      />
    </Card>
  );
}