import {Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import useDebounce from '../base/common_hooks/useDebounce';
import {useAPI} from '../base/controllers/jda_apis/useAPI';
import {
  IJDAFormInputControllerProps,
  withJDAFormInputController,
} from '../base/controllers/jda_form_controllers/withFormInputController';
import {Address} from '../data_types/Address';

export interface IAddressInputProps
  extends IJDAFormInputControllerProps<Address> {}

function AddressInput(props: IAddressInputProps) {
  const api = useAPI<Address>('addresses');
  const [options, setOptions] = useState<Address[]>([]);
  const [keyword, setKeyword] = useState('');
  const searchValue = useDebounce<string>(keyword, 500);
  const search = useCallback(async () => {
    const address = await api.getByPage(0);
    if (address.success && address.payload.content) {
      setOptions(address.payload.content);
    }
  }, [api]);
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const addressValue = (ad?: Address) => (ad ? `# ${ad.id} ${ad.name}` : '');
  return (
    <Autocomplete
      disabled={props.disabled}
      label={props.label}
      value={addressValue(props.field.value)}
      onSelect={index => props.field.onChange(options[index])}
      onChangeText={v => {
        setKeyword(v);
      }}>
      {options.map(ad => (
        <AutocompleteItem key={ad.id} title={addressValue(ad)} />
      ))}
    </Autocomplete>
  );
}
export default withJDAFormInputController<Address, IAddressInputProps>(
  AddressInput,
);
