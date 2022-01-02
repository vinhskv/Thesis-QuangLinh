import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

export interface IJDAModuleProps {
  // eslint-disable-next-line no-undef
  renderList: () => JSX.Element;
  // eslint-disable-next-line no-undef
  renderForm: () => JSX.Element;
}
const Stack = createNativeStackNavigator();
export function JDAModule(props: IJDAModuleProps) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={props.renderList} />
      <Stack.Screen name="Form" component={props.renderList} />
    </Stack.Navigator>
  );
}
