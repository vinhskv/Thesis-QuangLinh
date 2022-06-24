import {NativeStackScreenProps} from '@react-navigation/native-stack';
import _ from 'lodash';
import {useCallback} from 'react';
import {Modules} from '../../../data_types/enums/Modules';
import {
  IJDAModuleInput,
  JDAModuleModes,
} from '../jda_module_controller/hooks/useModuleStateReducer';
import {IRoute} from './withJDARouter';

export interface IJDARouteParams {
  prevScreenKey: string;
}

// type CreateRouteParam = {
//   type: JDAModuleView.FORM;
//   mode: JDAFormMode.CREATE;
// };
// type EditRouteParam<T> = {
//   type: JDAModuleView.FORM;
//   mode: JDAFormMode.EDIT;
//   item: T;
// };
// type ViewRouteParam<T> = {
//   type: JDAModuleView.FORM;
//   mode: JDAFormMode.READ_ONLY;
//   item: T;
// };
// export type JDARouterParams<T> =
//   | CreateRouteParam
//   | EditRouteParam<T>
//   | ViewRouteParam<T>;

export function useRouter<T>(
  props: NativeStackScreenProps<any>,
  routes: IRoute[],
) {
  const RouteMap = _.chain(routes).keyBy('name').value();
  console.log(RouteMap);
  const goHome = useCallback(() => {
    props.navigation.popToTop();
  }, []);

  const goToModule = useCallback((name: Modules) => {
    props.navigation.navigate(name);
  }, []);

  const showList = useCallback((moduleName?: Modules) => {
    if (moduleName) {
      // open in other module
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.SHOW_LIST_ITEM,
        prevScreenKey: props.route.key,
      };
      props.navigation.push(moduleName, params);
    } else {
      // open in current module
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.SHOW_LIST_ITEM,
      };
      props.navigation.setParams(params);
    }
  }, []);

  const showCreateForm = useCallback((moduleName?: Modules) => {
    if (moduleName) {
      // open in other module
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.CREATE_NEW_ITEM,
        prevScreenKey: props.route.key,
      };
      props.navigation.push(moduleName, params);
    } else {
      // open in current module
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.CREATE_NEW_ITEM,
      };
      props.navigation.setParams(params);
    }
  }, []);

  const showEditForm = useCallback((item: T, moduleName?: Modules) => {
    if (moduleName) {
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.EDIT_ITEM,
        value: item,
        prevScreenKey: props.route.key,
      };
      props.navigation.push(moduleName, params);
    } else {
      const params: IJDAModuleInput<T> = {
        mode: JDAModuleModes.EDIT_ITEM,
        value: item,
      };
      props.navigation.setParams(params);
    }
  }, []);
  const showDetail = useCallback((name: keyof typeof RouteMap, item: T) => {
    const params: IJDAModuleInput<T> = {
      mode: JDAModuleModes.SHOW_ITEM_DETAIL,
      value: item,
      prevScreenKey: props.route.key,
    };
    props.navigation.push(name, params);
  }, []);

  const goBack = useCallback(() => {
    if (props.navigation.canGoBack()) {
      props.navigation.goBack();
    }
  }, []);

  return {
    RouteState: props.route,
    router: {
      goHome,
      goToModule,
      showCreateForm,
      showEditForm,
      showDetail,
      showList,
      goBack,
    },
  };
}
