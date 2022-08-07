import _ from 'lodash';
import * as React from 'react';
import {useState} from 'react';
import {
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import {IJDAModuleInput} from '.';
import {Modules} from '../../../../data_types/enums/Modules';
import {IJDAModuleConfig} from '../../jda_module_controller/withModuleController';
import {JDARouterContext} from '../../jda_router/JDARouterContext';
import {useModuleInputAPI} from './useModuleInputAPI';
interface IJDAFormMultiInputAPI<T>
  extends UseFieldArrayReturn<T>,
    Omit<IJDAModuleInput<T>, 'disabled'> {
  formItems: React.ReactNode[];
}
export interface IJDAModuleMultiInputControllerProps<T>
  extends IJDAFormMultiInputAPI<T> {
  name: keyof any;
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
    const {control, getValues, setValue} = useFormContext<any>();

    const _currentValue = useWatch({name: props.name as any, control});

    const multiInputControl = useFieldArray<T>({
      control,
      name: 'props.name' as any,
    });
    const {router} = React.useContext(JDARouterContext);
    const moduleValue = React.useMemo(() => {
      const value = _.cloneDeep(_.omit(getValues() as any, [props.name]));
      const linkedCollectionValue = props.associateCollection
        ? {
            [props.associateCollection as any]: value,
          }
        : {};
      const rootValue = _.isArray(_currentValue)
        ? _currentValue[activeIndex]
        : {};

      console.log('Current value with index ', activeIndex, rootValue);

      return {
        ...rootValue,
        ...linkedCollectionValue,
      };
    }, [
      _currentValue,
      activeIndex,
      getValues,
      props.associateCollection,
      props.name,
    ]);
    React.useEffect(() => {
      console.log(
        `Currrent value, ${props.name as string}  :   `,
        _currentValue,
      );
    }, [_currentValue, props.name]);

    const onCreate = React.useCallback(async () => {
      setActiveIndex(-1);
      router.showCreateForm(props.module, {
        value: moduleValue,
      });
    }, [moduleValue, props.module, router]);

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
      if (value) {
        if (activeIndex === -1) multiInputControl.append(value as any);
        else multiInputControl.update(activeIndex, value as any);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.getGoBackData]);

    // React.useEffect(() => {
    //   setValue(props.name as string, _.cloneDeep(multiInputControl.fields));
    // }, [multiInputControl.fields, props.name, setValue]);

    const formItems = multiInputControl.fields.map((field, index) => {
      console.log('=========ENNB', field);
      return (
        <SingleInputComponent
          key={field.id}
          disabled={props.disabled}
          value={field as any}
          {...(props as any)}
          label={undefined}
          options={options}
          onSearch={search}
          onChange={(value: T) => {
            getTypedObject(value)
              .then((r) => multiInputControl.update(index, r as any))
              .catch((e) => console.log(e));
          }}
          onEdit={() => onEdit(index)}
          onShowDetail={() => onShowDetail(index)}
        />
      );
    });

    return (
      <Component
        {...(props as Props)}
        {...multiInputControl}
        formItems={formItems}
        onCreate={() => onCreate()}
        onChange={(value: T) => {
          getTypedObject(value)
            .then((r) => {
              // console.log('value', r);
              multiInputControl.append(r as any);
            })
            .catch((e) => console.log(e));
        }}
        options={options}
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
