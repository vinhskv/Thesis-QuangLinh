import {Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import useDebounce from '../base/common_hooks/useDebounce';
import {useAPI} from '../base/controllers/jda_apis/useAPI';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {CourseModule} from '../data_types/CourseModule/CourseModule';

export interface ICourseModuleInputProps
  extends IJDAFormInputControllerProps<CourseModule> {}

function CourseModuleInput(props: ICourseModuleInputProps) {
  const api = useAPI<CourseModule>('course-modules');
  const [options, setOptions] = useState<CourseModule[]>([]);
  const [keyword, setKeyword] = useState('');
  const searchValue = useDebounce<string>(keyword, 500);
  const search = useCallback(async () => {
    const result = await api.getByPage(0);
    if (result.success && result.payload.content) {
      setOptions(result.payload.content);
    }
  }, [api]);
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const cousemoduleValue = (cousemodule?: CourseModule) =>
    cousemodule ? `# ${cousemodule.id} ${cousemodule.name}` : '';
  return (
    <Autocomplete
      disabled={props.disabled}
      label={props.label}
      value={cousemoduleValue(props.field.value)}
      onSelect={index => props.field.onChange(options[index])}
      onChangeText={v => {
        setKeyword(v);
      }}>
      {options.map(ad => (
        <AutocompleteItem key={ad.id} title={cousemoduleValue(ad)} />
      ))}
    </Autocomplete>
  );
}
export default withJDAFormInputController<
  CourseModule,
  ICourseModuleInputProps
>(CourseModuleInput);
