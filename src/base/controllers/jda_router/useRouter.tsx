import { NativeStackScreenProps } from '@react-navigation/native-stack';
import _ from 'lodash';
import { useCallback } from 'react';
import { IRoute } from './withJDARouter';

export function useRouter(props: NativeStackScreenProps<any>, routes: IRoute[]) {
    const RouteMap = _.chain(routes).keyBy('name').value();
    console.log(RouteMap);


    const goHome = useCallback(
        () => {
            props.navigation.popToTop()
        },
        [],
    );

    const goToModule = useCallback(
        (name: keyof typeof RouteMap) => {
            props.navigation.navigate(name)
        },
        [],
    );
    
    return {
        goHome,
        goToModule
    };
}
