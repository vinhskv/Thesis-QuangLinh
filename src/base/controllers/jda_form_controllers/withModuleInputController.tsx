import * as React from 'react';
import { ComponentType, useCallback } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Modules } from '../../../data_types/enums/Modules';
import { JDARouterContext } from '../jda_router/JDARouterContext';
import {
    IJDAFormInputAPI,
    IJDAFormInputControllerProps
} from './withFormInputController';

export interface IJDAModuleInputControllerProps<T>
  extends IJDAFormInputControllerProps<T> {
  module: Modules;
  associateField?: keyof T;
}

export interface IJDAModuleInputAPI<T> extends IJDAFormInputAPI<T> {
  onCreate: () => void;
  onEdit: () => void;
  onShowDetail: () => void;
}

export function withModuleInputController<
  T,
  P extends IJDAModuleInputControllerProps<T>,
>(Component: React.ComponentType<P>) {
  return (props: Omit<P, keyof IJDAModuleInputAPI<T>>) => {
    const {router} = React.useContext(JDARouterContext);
    const _currentValue = useWatch(props.name);
    const {control} = useFormContext<T>();

    const onCreate = useCallback(async () => {
      //   router.showCreateForm(props.module, {
      //     // value:{
      //     //     [props.associateField as keyof T]:control.
      //     // }
      //   });
    }, [props.module, router]);

    const onEdit = useCallback(async () => {
      router.showEditForm(_currentValue as any, props.module);
    }, [props.module, router, _currentValue]);

    const onShowDetail = useCallback(async () => {
      router.showDetail(_currentValue as any, props.module);
    }, [props.module, router, _currentValue]);

    return (
      <Controller
        name={props.name}
        control={control}
        rules={props.rules}
        render={item => (
          <Component
            {...(props as P)}
            {...item}
            field={{
              value: item.field.value,
              onChange: (value: T) => item.field.onChange(value),
            }}
            onCreate={onCreate}
            onEdit={onEdit}
            onShowDetail={onShowDetail}
          />
        )}
      />
    );
  };
}

//Export componentType
class TypeUltil<T, P extends IJDAModuleInputControllerProps<T>> {
  //TODO if you change parammeter of withJDAListController function, you must change parameters of controlled function below
  controlled = (Component: ComponentType<P>) =>
    withModuleInputController<T, P>(Component);
}

export type JDAControlledModuleInputComponent<
  T,
  P extends IJDAModuleInputControllerProps<T>,
> = ReturnType<TypeUltil<T, P>['controlled']>;
