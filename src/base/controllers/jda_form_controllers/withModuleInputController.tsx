import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Modules } from '../../../data_types/enums/Modules';
import { IJDAModuleInput } from '../../views/jda_form/form_inputs';
import { useAPI } from '../jda_apis/useAPI';
import { JDARouterContext } from '../jda_router/JDARouterContext';
import {
  IJDAFormInputAPI,
  IJDAFormInputControllerProps
} from './withFormInputController';

export interface IJDAModuleInputAPI<T>
  extends IJDAFormInputAPI<T>,
    IJDAModuleInput<T> {}

export interface IJDAModuleInputControllerProps<T>
  extends IJDAFormInputControllerProps<T> {
  module: Modules;
  apiResource: string;
  associateField?: keyof T;
}

export function withModuleInputController<
  T,
  P extends IJDAModuleInputControllerProps<T>,
>(Component: React.ComponentType<P>) {
  return (props: Omit<P, keyof IJDAFormInputAPI<T>>) => {
    const api = useAPI<T>(props.apiResource);
    const search = React.useCallback(async () => {
      const res = await api.getByPage(0);
      if (res.success && res.payload.content) {
        return res.payload.content;
      } else return [];
    }, [api]);
    const {router} = React.useContext(JDARouterContext);
    const _currentValue = useWatch(props.name);
    const {control, getValues, setValue} = useFormContext<T>();

    const onCreate = useCallback(async () => {
      router.showCreateForm(props.module, {
        value: {
          [props.associateField as keyof T]: getValues(),
        },
      });
    }, [getValues, props.associateField, props.module, router]);

    const onEdit = useCallback(async () => {
      router.showEditForm(_currentValue as any, props.module);
    }, [props.module, router, _currentValue]);

    const onShowDetail = useCallback(async () => {
      router.showDetail(_currentValue as any, props.module);
    }, [props.module, router, _currentValue]);

    useEffect(() => {
      //Try to update value if goBackData Change
      const value = router.getGoBackData<T>(props.module);
      if (value) setValue(props.name, value as any);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.getGoBackData]);

    return (
      <Controller
        name={props.name}
        control={control}
        rules={props.rules}
        render={item => (
          <Component
            {...(props as P)}
            {...item}
            value={item.field.value}
            onChange={(value: T) => item.field.onChange(value)}
            onCreate={onCreate}
            onEdit={onEdit}
            onShowDetail={onShowDetail}
            onSearch={search}
          />
        )}
      />
    );
  };
}

export type JDAControlledModuleInputComponent<
  T,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  P extends IJDAModuleInputControllerProps<T>,
// eslint-disable-next-line prettier/prettier
> = ReturnType<typeof withModuleInputController<T,P>>;
