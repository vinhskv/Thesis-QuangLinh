import {Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import useDebounce from '../base/common_hooks/useDebounce';
import {useAPI} from '../base/controllers/jda_apis/useAPI';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {Gender, Student} from '../data_types/Student';
import EnumInput from './basic_inputs/EnumInput';

export interface IStudentInputProps
  extends IJDAFormInputControllerProps<Student> {}

function StudentInput(props: IStudentInputProps) {
  const api = useAPI<Student>('students');
  const [options, setOptions] = useState<Student[]>([]);
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

  const studentValue = (ad?: Student) => (ad ? `# ${ad.id} ${ad.name}` : '');
  return (
    <Autocomplete
      disabled={props.disabled}
      label={props.label}
      value={studentValue(props.field.value)}
      onSelect={index => props.field.onChange(options[index])}
      onChangeText={v => {
        setKeyword(v);
      }}>
      {options.map(ad => (
        <AutocompleteItem key={ad.id} title={studentValue(ad)} />
      ))}
    </Autocomplete>
  );
}
export default withJDAFormInputController<Student, IStudentInputProps>(
  StudentInput,
);

export const GenderInput = EnumInput({enum: Gender});
