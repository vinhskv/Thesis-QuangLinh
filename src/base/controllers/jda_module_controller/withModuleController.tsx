import * as React from 'react';
import { ComponentType } from 'react';
import { IAPIConfig } from '../jda_apis/useAPI';
import {
  IJDAFormControlerProps,
  JDAControlledFormComponent
} from '../jda_form_controllers/withFormController';
import {
  IJDAListControllerProps, JDAControlledListComponent
} from '../jda_list_controllers/hocs/withJDAListController';
import { JDAModuleView, useModuleHandler } from './hooks/useModuleHandler';
export interface IJDAModuleAPI<T> {
  currentView: JDAModuleView;
  ListView: React.ReactNode;
  FormView: React.ReactNode;
  moduleConfig: IJDAModuleConfig<T>;
}

export interface IJDAModuleConfig<T, SubT = T> {
  primaryKey: keyof T;
  apiResource: string;
  moduleName: string;
  fieldLabel: Record<keyof T, string>;
  quickRender: (v?: SubT) => string;
  apiConfig?: IAPIConfig<T, any, any, any>;
}


export interface IJDAModuleControllerProps<T> extends IJDAModuleAPI<T> { } // reversed for other logic

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
    const { currentView, listHandler, formHandler } = useModuleHandler<T, SubT>(moduleConfig)
    ///////// Render
    return (
      <Component
        {...(props as P)}
        moduleConfig={moduleConfig}
        currentView={currentView}
        ListView={
          <ListView {...listHandler as any} />
        }
        FormView={
          <FormView {...formHandler as any} />
        }
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
