import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { JDAModuleView } from '../../controllers/jda_module_controller/hooks/useModuleHandler';
import {
  IJDAModuleControllerProps
} from '../../controllers/jda_module_controller/withModuleController';
export interface IJDABasicModuleProps<T> extends IJDAModuleControllerProps<T> { }
const Stack = createNativeStackNavigator()

export function JDABasicModule<T>(props: IJDABasicModuleProps<T>) {
  React.useLayoutEffect(() => {
    props.navigation.navigate(props.route.name, { screen: props.currentView + "" })
    props.navigation.setOptions({
      headerShown: props.currentView != JDAModuleView.FORM
    })
  }, [props.currentView]);
  return (
    <Stack.Navigator>
      <Stack.Screen name={JDAModuleView.LIST + ""} options={{ headerShown: false }}>
        {(p: NativeStackScreenProps<any>) => {
          return props.ListView
        }}
      </Stack.Screen>
      <Stack.Screen name={JDAModuleView.FORM + ""} options={{
        presentation: 'modal',
        title: "Form: " + props.moduleConfig.moduleName,
        headerTitleAlign: "center",
        headerBackVisible: false
      }}>{(p: NativeStackScreenProps<any>) => {
        return props.FormView
      }}</Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
