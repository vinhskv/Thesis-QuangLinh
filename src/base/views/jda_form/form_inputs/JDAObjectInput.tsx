import {Button, Divider, Icon, List, ListItem} from '@ui-kitten/components';
import _ from 'lodash';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import useDebounce from '../../../common_hooks/useDebounce';
import {IJDAModuleInput} from '../../../controllers/jda_form_controllers./../../controllers/jda_form_controllers';
import {JDAButtonInput} from './JDAButtonInput';
import {JDAStringInput} from './JDAStringInput';
export interface IJDAObjectInputProps<T> extends IJDAModuleInput<T> {
  renderOption: (option?: T) => string;
}

export function JDAObjectInput<T>(props: IJDAObjectInputProps<T>) {
  const ref = React.useRef<RBSheet>();
  const [options, setOptions] = React.useState<T[]>([]);
  const [keyword, setKeyword] = React.useState<string | undefined>('');
  const searchValue = useDebounce<string | undefined>(keyword, 500);

  useEffect(() => {
    if (searchValue) props.onSearch?.(searchValue).then((r) => setOptions(r));
  }, [props, searchValue]);

  return (
    <>
      <JDAButtonInput
        disabled={props.disabled}
        onPress={() => {
          if (props.value && !_.isEmpty(props.value)) props.onShowDetail?.();
          else ref.current?.open();
        }}
        label={props.label}
        value={
          _.isEmpty(props.value)
            ? ''
            : props.renderOption?.(props.value as T) ?? String(props.value)
        }
        accessoryRight={
          <>
            {props.value && !_.isEmpty(props.value) && !props.disabled && (
              <View style={styles.row}>
                <Button
                  style={styles.button}
                  appearance={'ghost'}
                  status="basic"
                  accessoryRight={<Icon name="edit-2-outline" />}
                  onPress={() => {
                    props.onEdit?.();
                  }}
                />
                <Button
                  style={styles.button}
                  appearance={'ghost'}
                  status="danger"
                  accessoryRight={<Icon name="flash-off-outline" />}
                  onPress={() => {
                    props.onChange?.(undefined);
                  }}
                />
              </View>
            )}
          </>
        }
      />

      <RBSheet
        ref={ref as any}
        // height={300}
        openDuration={250}
      >
        <View style={styles.bottomSheetContainer}>
          <JDAStringInput
            value={keyword}
            onChange={setKeyword}
            InputProps={{
              accessoryLeft: (p) => <Icon {...p} name="search" />,
              placeholder: 'Search',
              style: {margin: 10, flex: 1},
            }}
          />
          <Button
            style={styles.createBtn}
            accessoryLeft={(p) => <Icon {...p} name="plus" />}
            size="tiny"
            onPress={() => {
              props.onCreate?.();
            }}
          >
            Create
          </Button>
        </View>
        <List
          data={options}
          indicatorStyle="black"
          ItemSeparatorComponent={(p) => <Divider {...p} />}
          renderItem={({item}) => (
            <ListItem
              onPress={() => {
                props.onChange?.(item);
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
    alignItems: 'center',
  },
  expanded: {
    flex: 1,
  },
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  createBtn: {
    marginVertical: 10,
    marginRight: 10,
  },
  button: {
    margin: 0,
    padding: 0,
    width: 10,
  },
});
