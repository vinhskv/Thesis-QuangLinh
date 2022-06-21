import { NativeStackScreenProps } from '@react-navigation/native-stack';
import _ from 'lodash';
import { useCallback } from 'react';
import { JDAFormMode } from '../jda_form_controllers/withFormController';
import { JDAModuleView } from '../jda_module_controller/hooks/useListHandler';
import { IRoute } from './withJDARouter';

interface IOldScreenState{
    key:string
}

type CreateRouteParam<T> = {
    type: JDAModuleView.FORM,
    mode: JDAFormMode.CREATE,
} 
type EditRouteParam<T> = {
    type: JDAModuleView.FORM,
    mode: JDAFormMode.EDIT,
    item: T
}
type ViewRouteParam<T> = {
    type: JDAModuleView.FORM,
    mode: JDAFormMode.READ_ONLY,
    item: T
}
export type JDARouterParams<T> = CreateRouteParam<T> | EditRouteParam<T> | ViewRouteParam<T> 

export function useRouter<T>(props: NativeStackScreenProps<any>, routes: IRoute[]) {
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

    const openModuleCreateForm = useCallback(
        (name: keyof typeof RouteMap, callback: (newItem?: T) => void) => {
            const params: CreateRouteParam<T> = {
                type: JDAModuleView.FORM,
                mode: JDAFormMode.CREATE,
            }
            props.navigation.push(name, params)
        },
        [],
    );

    const openModuleEditForm = useCallback(
        (name: keyof typeof RouteMap, item: T) => {
            const params: EditRouteParam<T> = {
                type: JDAModuleView.FORM,
                mode: JDAFormMode.EDIT,
                item: item
            }
            props.navigation.push(name, params)
        },
        [],
    );
    const openModuleViewForm = useCallback(
        (name: keyof typeof RouteMap, item: T) => {
            const params: ViewRouteParam<T> = {
                type: JDAModuleView.FORM,
                mode: JDAFormMode.READ_ONLY,
                item: item
            }
            props.navigation.push(name, params)
        },
        [],
    );

    const goBack = useCallback(
        () => {
            if (props.navigation.canGoBack()) {
                props.navigation.goBack()
            }
        },
        [],
    );

    return {
        JDARouter: {
            goHome,
            goToModule,
            openModuleCreateForm,
            openModuleEditForm,
            openModuleViewForm,
            goBack
        }
    };
}
