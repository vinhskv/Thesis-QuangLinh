import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  IJDAModuleControllerProps,
  JDAModuleView,
} from '../../controllers/jda_module_controller/withModuleController';
import {popToTop, push} from '../../RootNavigator';

export interface IJDABasicModuleProps extends IJDAModuleControllerProps {
  moduleName: string;
}
const Stack = createNativeStackNavigator();
export function JDABasicModule(props: IJDABasicModuleProps) {
  const routeMap = React.useMemo(
    (): Record<JDAModuleView, string> => ({
      [JDAModuleView.FORM]: 'Form',
      [JDAModuleView.LIST]: 'List',
    }),
    [],
  );

  React.useEffect(() => {
    if (props.currentView === JDAModuleView.LIST) {
      popToTop();
    } else {
      push(routeMap[props.currentView]);
    }
  }, [props.currentView, routeMap]);

  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
        <Stack.Screen name="List">{_v => props.ListView}</Stack.Screen>
      </Stack.Group>
      <Stack.Screen
        name="Form"
        options={{
          headerBackVisible: false,
        }}>
        {_v => props.FormView}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
