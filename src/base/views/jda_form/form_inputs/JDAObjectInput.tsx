<<<<<<< HEAD
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Divider, Icon, List, ListItem} from '@ui-kitten/components';
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Divider, Icon, List, ListItem } from '@ui-kitten/components';
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
<<<<<<< HEAD
import {IJDAInput} from '.';
import {AddressForm} from '../../../../modules/address/Index';
import {StudentForm} from '../../../../modules/student/Index';
=======
import { IJDAInput } from '.';
import { AddressForm } from '../../../../modules/address/Index';
import { StudentForm } from '../../../../modules/student/Index';
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc
import useDebounce from '../../../common_hooks/useDebounce';
import {useAPI} from '../../../controllers/jda_apis/useAPI';
import {JDAButtonInput} from './JDAButtonInput';
import {JDAStringInput} from './JDAStringInput';

export interface IJDAObjectInputProps<T> extends IJDAInput<T> {
  apiResource: string;
  renderOption: (option?: T) => string;
}

const Stack = createNativeStackNavigator();

export function JDAObjectInput<T>(props: IJDAObjectInputProps<T>) {
  const ref = React.useRef<RBSheet>();
  const api = useAPI<T>(props.apiResource);
  const [options, setOptions] = React.useState<T[]>([]);
  const [keyword, setKeyword] = React.useState<string | undefined>('');
  const searchValue = useDebounce<string | undefined>(keyword, 500);
  const search = React.useCallback(async () => {
    const address = await api.getByPage(0);
    if (address.success && address.payload.content) {
      setOptions(address.payload.content);
    }
  }, [api]);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <>
      <JDAButtonInput
        disabled={props.disabled}
        onPress={() => ref.current?.open()}
        label={props.label}
        value={
          props.renderOption
            ? props.renderOption(props.value)
            : String(props.value)
        }
      />
      <RBSheet
        ref={ref as any}
        // height={300}
        openDuration={250}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <JDAStringInput
            value={keyword}
            onChange={setKeyword}
            InputProps={{
              accessoryLeft: p => <Icon {...p} name="search" />,
              placeholder: `Search for ${props.apiResource}`,
              style: {margin: 10, flex: 1},
            }}
          />
          <Button
            style={{
              marginVertical: 10,
              marginRight: 10,
            }}
            accessoryLeft={p => <Icon {...p} name="plus" />}
            size="tiny"
            onPress={() => {
              console.log('Open screen');
            }}
          >
            Create
          </Button>
        </View>
        <List
          data={options}
          indicatorStyle="black"
          ItemSeparatorComponent={p => <Divider {...p} />}
          renderItem={({item}) => (
            <ListItem
              onPress={() => {
                if (props.onChange) {
                  props.onChange(item);
                }
                ref.current?.close();
              }}
              title={props.renderOption(item)}
            />
          )}
        />
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
