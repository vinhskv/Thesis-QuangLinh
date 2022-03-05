import {Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import useDebounce from '../base/common_hooks/useDebounce';
import {useAPI} from '../base/controllers/jda_apis/useAPI';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {StudentClass} from '../data_types/StudentClass';

export interface IStudentClassInputProps
  extends IJDAFormInputControllerProps<StudentClass> {}

function StudentClassInput(props: IStudentClassInputProps) {
  const api = useAPI<StudentClass>('addresses');
  const [options, setOptions] = useState<StudentClass[]>([]);
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

  const studentClassValue = (ad?: StudentClass) =>
    ad ? `# ${ad.id} ${ad.name}` : '';
  return (
    <Autocomplete
      disabled={props.disabled}
      label={props.label}
      value={studentClassValue(props.field.value)}
      onSelect={index => props.field.onChange(options[index])}
      onChangeText={v => {
        setKeyword(v);
      }}>
      {options.map(ad => (
        <AutocompleteItem key={ad.id} title={studentClassValue(ad)} />
      ))}
    </Autocomplete>
  );
}
export default withJDAFormInputController<
  StudentClass,
  IStudentClassInputProps
>(StudentClassInput);
