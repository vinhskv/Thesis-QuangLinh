import {RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCallback} from 'react';
import {Modules} from '../../../data_types/enums/Modules';
import {
  IJDAModuleParams,
  JDAModuleMode,
} from '../jda_module_controller/withModuleController';

export interface IJDARouteParams<T> {
  prevScreen?: Modules;
  prevScreenParams?: IJDARouteParams<any>;
  moduleParams: IJDAModuleParams<T>;
  goBackData?: any;
}

export type ReturnTypeUseRouter<T> = {
  ModuleParams: IJDARouteParams<T> | undefined;
  RouteState: RouteProp<any, string>;
  router: {
    goHome: () => void;
    goToModule: (moduleName: Modules) => void;
    showCreateForm: (moduleName?: Modules) => void;
    showEditForm: (item: T, moduleName?: Modules) => void;
    showDetail: (item: T, moduleName?: Modules) => void;
    showList: (moduleName?: Modules) => void;
    goBack: (data?: any) => void;
    getGoBackData: <D extends unknown>(moduleName: Modules) => D | undefined;
    onFocus: (callback: () => void) => void;
  };
};

export function useRouter<T>(props: NativeStackScreenProps<any>) {
  const route = useRoute();
  const onFocus = useCallback(
    (callback: () => void) => {
      props.navigation.addListener('focus', () => callback());
    },
    [props.navigation],
  );

  const ModuleParams = route.params as IJDARouteParams<T> | undefined;
  const updateParamOrNavigate = useCallback(
    (moduleParams: IJDAModuleParams<T>, moduleName?: Modules) => {
      if (moduleName) {
        props.navigation.push(moduleName, {
          prevScreenParams: {...ModuleParams},
          prevScreen: props.route.name,
          moduleParams: moduleParams,
        });
      } else {
        props.navigation.setParams({
          prevScreenParams: undefined,
          prevScreen: undefined,
          goBackData: undefined,
          moduleParams: moduleParams,
        });
      }
    },
    [ModuleParams, props.navigation, props.route.name],
  );
  const goHome = useCallback(() => {
    props.navigation.popToTop();
  }, [props.navigation]);

  const goToModule = useCallback(
    (moduleName: Modules) => {
      props.navigation.navigate(moduleName);
    },
    [props.navigation],
  );

  const showList = useCallback(
    (moduleName?: Modules) => {
      updateParamOrNavigate(
        {
          mode: JDAModuleMode.VIEW_LIST_ITEM,
        },
        moduleName,
      );
    },
    [updateParamOrNavigate],
  );

  const showCreateForm = useCallback(
    (moduleName?: Modules) => {
      updateParamOrNavigate(
        {
          mode: JDAModuleMode.CREATE_ITEM,
        },
        moduleName,
      );
    },
    [updateParamOrNavigate],
  );

  const showEditForm = useCallback(
    (item: T, moduleName?: Modules) => {
      updateParamOrNavigate(
        {
          mode: JDAModuleMode.EDIT_ITEM,
          value: item,
        },
        moduleName,
      );
    },
    [updateParamOrNavigate],
  );
  const showDetail = useCallback(
    (item: T, moduleName?: Modules) => {
      updateParamOrNavigate(
        {
          mode: JDAModuleMode.VIEW_ITEM,
          value: item,
        },
        moduleName,
      );
    },
    [updateParamOrNavigate],
  );

  const goBack = useCallback(
    (data?: any) => {
      if (ModuleParams?.prevScreen) {
        console.log('go back to ', ModuleParams.prevScreen);
        const params: IJDARouteParams<any> = {
          ...(ModuleParams.prevScreenParams as any),
          goBackData: {
            ...ModuleParams.prevScreenParams?.goBackData,
            [props.route.name]: data,
          },
        };
        console.log(params);
        props.navigation.navigate(ModuleParams.prevScreen, params);
      } else if (props.navigation.canGoBack()) {
        props.navigation.goBack();
      }
    },
    [
      ModuleParams?.prevScreen,
      ModuleParams?.prevScreenParams,
      props.navigation,
      props.route.name,
    ],
  );

  const getGoBackData = useCallback(
    <D extends unknown>(moduleName: Modules) => {
      const data: D | undefined = ModuleParams?.goBackData?.[moduleName] as any;
      console.log('goBackData ', ModuleParams?.goBackData);
      console.log(moduleName, ' -- ', data);
      // props.navigation.setParams({
      //   ...ModuleParams,
      //   goBackData: {
      //     ...ModuleParams?.goBackData,
      //     [moduleName]: undefined,
      //   },
      // });
      return data;
    },
    [ModuleParams],
  );

  return {
    ModuleParams,
    RouteState: props.route,
    router: {
      goHome,
      goToModule,
      showCreateForm,
      showEditForm,
      showDetail,
      showList,
      goBack,
      onFocus,
      getGoBackData,
    },
  };
}
