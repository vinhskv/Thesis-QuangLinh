import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

export interface IJDAModuleProps extends {
  ListView: React.ComponentType;
  FormView: React.ComponentType;
}
const Stack = createNativeStackNavigator();
export function JDABasicModule(props: IJDAModuleProps) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={props.ListView} />
      <Stack.Screen name="Form" component={props.FormView} />
    </Stack.Navigator>
  );
}
