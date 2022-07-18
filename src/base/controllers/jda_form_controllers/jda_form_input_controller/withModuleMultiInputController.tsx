import _ from 'lodash';
import * as React from 'react';
import {useState} from 'react';
import {
  ArrayPath,
  Controller,
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from 'react-hook-form';
import {IJDAModuleInput} from '.';
import {Modules} from '../../../../data_types/enums/Modules';
import {IJDAModuleConfig} from '../../jda_module_controller/withModuleController';
import {JDARouterContext} from '../../jda_router/JDARouterContext';
import {useModuleInputAPI} from './useModuleInputAPI';
interface IJDAFormMultiInputAPI<T> extends UseFieldArrayReturn<T> {
  formItems: React.ReactNode[];
}
export interface IJDAModuleMultiInputControllerProps<T>
  extends IJDAFormMultiInputAPI<T> {
  name: ArrayPath<T>;
  label: string;
  disabled?: boolean;
  module: Modules;
  associateField?: string;
  associateCollection?: string;
}

export function withJDAModuleMultiInputController<
  T,
  Props extends IJDAModuleMultiInputControllerProps<T>,
>(
  Component: React.ComponentType<Props>,
  SingleInputComponent: React.ComponentType<IJDAModuleInput<T>>,
  moduleConfig: IJDAModuleConfig<T>,
) {
  return (props: Omit<Props, keyof IJDAFormMultiInputAPI<T>>) => {
    const {options, search, getTypedObject} = useModuleInputAPI(moduleConfig);
    const [activeIndex, setActiveIndex] = useState(0);
    const {control, getValues, watch} = useFormContext<T>();

    const _currentValue = watch(props.name);

    const multiInputControl = useFieldArray<T>({control, name: props.name});
    const {router} = React.useContext(JDARouterContext);
    const moduleValue = React.useMemo(() => {
      const value = _.cloneDeep(_.omit(getValues() as any, [props.name]));
      const linkedFieldValue = props.associateField
        ? {[props.associateField as keyof T]: value}
        : {};
      const linkedCollectionValue = props.associateCollection
        ? {
            [props.associateCollection as keyof T]: value,
          }
        : {};
      const rootValue = _.isArray(_currentValue)
        ? _currentValue[activeIndex]
        : {};
      console.log('Current value with index ', activeIndex, rootValue);

      return {
        ...rootValue,
        ...linkedFieldValue,
        ...linkedCollectionValue,
      };
    }, [
      _currentValue,
      activeIndex,
      getValues,
      props.associateCollection,
      props.associateField,
      props.name,
    ]);
    React.useEffect(() => {
      console.log(`Currrent value, ${props.name}  :   `, _currentValue);
    }, [_currentValue, props.name]);

    const onCreate = React.useCallback(
      async (index: number) => {
        setActiveIndex(index);
        router.showCreateForm(props.module, {
          value: moduleValue,
        });
      },
      [moduleValue, props.module, router],
    );

    const onEdit = React.useCallback(
      async (index: number) => {
        setActiveIndex(index);
        router.showEditForm(moduleValue, props.module);
      },
      [router, moduleValue, props.module],
    );

    const onShowDetail = React.useCallback(
      async (index: number) => {
        console.log('Show detail for ', moduleValue);
        setActiveIndex(index);
        router.showDetail(moduleValue, props.module);
      },
      [router, moduleValue, props.module],
    );

    React.useEffect(() => {
      //Try to update value if goBackData Change
      const value = router.getGoBackData<T>(props.module);
      if (value) multiInputControl.update(activeIndex, value as any);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.getGoBackData]);

    const formItems = multiInputControl.fields.map((field, index) => (
      <Controller
        key={field.id + index}
        control={control}
        name={`${props.name}.${index}` as any}
        render={({field: itemInput}) => (
          <SingleInputComponent
            disabled={props.disabled}
            value={itemInput.value as any}
            {...(props as any)}
            label={undefined}
            options={options}
            onSearch={search}
            onChange={(value: T) => {
              getTypedObject(value)
                .then((r) => itemInput.onChange(r))
                .catch((e) => console.log(e));
            }}
            onEdit={() => onEdit(index)}
            onShowDetail={() => onShowDetail(index)}
            onCreate={() => onCreate(index)}
          />
        )}
      />
    ));

    return (
      <Component
        {...(props as Props)}
        {...multiInputControl}
        formItems={formItems}
      />
    );
  };
}

export type JDAControlledFormMultiInputComponent<
  T,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Props extends IJDAModuleMultiInputControllerProps<T>,
  // eslint-disable-next-line prettier/prettier, no-undef
> = (props: Omit<Props, keyof IJDAFormMultiInputAPI<T>>) => JSX.Element;
