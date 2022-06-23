import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { ComponentType } from 'react';
import { IAPIConfig } from '../jda_apis/useAPI';
import {
  IJDAFormControlerProps,
  IJDAFormRef,
  JDAControlledFormComponent
} from '../jda_form_controllers/withFormController';
import {
  IJDAListControllerProps,
  IJDAListRef,
  JDAControlledListComponent
} from '../jda_list_controllers/hocs/withJDAListController';
import { useRouter } from '../jda_router/useRouter';
import { useFormHandler } from './hooks/useFormHandler';
import { useListHandler } from './hooks/useListHandler';
import { useModuleStateReducer } from './hooks/useModuleStateReducer';
export interface IJDAModuleAPI<T> extends ReturnType<typeof useRouter> {
  ListView: React.ReactNode;
  FormView: React.ReactNode;
  moduleConfig: IJDAModuleConfig<T>;
  moduleState: ReturnType<typeof useModuleStateReducer<T>>
}

export interface IJDAModuleConfig<T, SubT = T> {
  primaryKey: keyof T;
  route: string;
  apiResource: string;
  moduleName: string;
  fieldLabel: Record<keyof T, string>;
  quickRender: (v?: SubT) => string;
  apiConfig?: IAPIConfig<T, any, any, any>;
}

export interface IJDAModuleControllerProps<T>
  extends IJDAModuleAPI<T>,
    NativeStackScreenProps<any> {
      
    } // reversed for other logic

export function withModuleController<
  T,
  // ListItemProps extends IJDAListItemControllerProps<T>,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
  P extends IJDAModuleControllerProps<T>,
  SubT = T,
>(
  Component: ComponentType<P>,
  ListView: JDAControlledListComponent<T, ListProps>,
  FormView: JDAControlledFormComponent<T, FormProps>,
  moduleConfig: IJDAModuleConfig<T, SubT>,
) {
  return (props: Omit<P, keyof IJDAModuleAPI<T>>) => {
    const listRef = React.useRef<IJDAListRef<T>>();
    const formRef = React.useRef<IJDAFormRef<T>>();

    const moduleStateHandler = useModuleStateReducer<T>(listRef, formRef);
    const listHandler = useListHandler(
      moduleConfig,
      moduleStateHandler,
      listRef
    );
    const formHandler = useFormHandler(
      moduleConfig,
      moduleStateHandler,
      listRef,
    );
    ///////// Render
    return (
      <Component
        {...(props as P)}
        moduleConfig={moduleConfig}
        moduleState={moduleStateHandler}
        ListView={<ListView {...(listHandler as any)} ref={listRef} />}
        FormView={<FormView {...(formHandler as any)} mode={moduleStateHandler.moduleState.viewMode}  ref={formRef} />}
      />
    );
  };
}

//Export componentType
class TypeUltil<
  T,
  // ListItemProps extends IJDAListItemControllerProps<T>,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
  P extends IJDAModuleControllerProps<T>,
> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below
  controlled = (
    Component: ComponentType<P>,
    ListView: JDAControlledListComponent<T, ListProps>,
    FormView: JDAControlledFormComponent<T, FormProps>,
    moduleConfig: IJDAModuleConfig<T>,
  ) =>
    withModuleController<T, ListProps, FormProps, P>(
      Component,
      ListView,
      FormView,
      moduleConfig,
    );
}

export type JDAControlledModuleComponent<
  T,
  // ListItemProps extends IJDAListItemControllerProps<T>,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
  P extends IJDAModuleControllerProps<T>,
> = ReturnType<TypeUltil<T, ListProps, FormProps, P>['controlled']>;
