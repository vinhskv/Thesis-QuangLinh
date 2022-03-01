import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentType} from 'react';

export interface IJDAGroupScreensControllerProps {
  subScreens: {
    name: string;
    component: ComponentType;
  }[];
  goTo: (subScreenName: string) => void;
}

const Stack = createNativeStackNavigator();

export function withGroupScreensController<
  P extends IJDAGroupScreensControllerProps,
>(Component: ComponentType<P>) {
  return (props: Omit<P, 'goTo'>) => {
    return (
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}>
          {screenProps => (
            <Component
              {...(props as P)}
              goTo={name => {
                screenProps.navigation.navigate(name);
              }}
            />
          )}
        </Stack.Screen>
        {props.subScreens.map((r, index) => (
          <Stack.Screen key={index} name={r.name} component={r.component} />
        ))}
      </Stack.Navigator>
    );
  };
}