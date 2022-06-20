import { createNativeStackNavigator, NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { JDARouterContext } from './JDARouterContext';
import { useRouter } from './useRouter';
export interface IRoute {
    name: string,
    title?: string,
}
interface IRouteConfig extends IRoute {
    component: React.ComponentType<any>,
    screenOptions?: NativeStackNavigationOptions
}
export interface IRouterControllerAPI extends ReturnType<typeof useRouter> {
    routes: IRoute[];
    currentRoute: string;
    navigationProps: NativeStackNavigationProp<any>;
}
export interface IJDARouterControllerProps extends IRouterControllerAPI {
    routeConfigs: IRouteConfig[]
    homeScreenOptions: NativeStackNavigationOptions
}
const Stack = createNativeStackNavigator();
export function withRouterController<P extends IJDARouterControllerProps>(Component: React.ComponentType<P>) {
    return (props: Omit<P, keyof IRouterControllerAPI>) => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='DefaultHome' options={props.homeScreenOptions}>
                    {p => {
                        const router = useRouter(p, props.routeConfigs);
                        return <Component routes={props.routeConfigs} {...p as any} {...router} />
                    }}
                </Stack.Screen>
                {props.routeConfigs.map((route, index) => {
                    const Screen = route.component;
                    return <Stack.Screen key={route.name + index} name={route.name} options={{
                        title: route.title,
                        ...route.screenOptions
                    }}>{p => {
                        const router = useRouter(p, props.routeConfigs);
                        return (
                            <JDARouterContext.Provider value={router}>
                                <Screen {...p as any} {...router} />
                            </JDARouterContext.Provider>
                        )
                    }}</Stack.Screen>
                })}
            </Stack.Navigator>
        );
    }
}
