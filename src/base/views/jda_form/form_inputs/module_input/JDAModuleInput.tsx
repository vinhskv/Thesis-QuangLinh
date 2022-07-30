import {Button, Icon} from '@ui-kitten/components';
import _ from 'lodash';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {JDAButtonInput} from '../JDAButtonInput';
import ModuleSelect, {
  IModuleSelectProps,
  ModuleSelectRef,
} from './ModuleSelect';
export interface IJDAObjectInputProps<T> extends IModuleSelectProps<T> {}

export function JDAModuleInput<T>(props: IJDAObjectInputProps<T>) {
  const ref = React.useRef<ModuleSelectRef>();
  const JDAModuleSelect = ModuleSelect();
  return (
    <>
      <JDAButtonInput
        disabled={props.disabled}
        onPress={() => {
          if (props.value && !_.isEmpty(props.value)) props.onShowDetail?.();
          else if (!props.disabled) ref.current?.open();
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
                {props.onEdit && (
                  <Button
                    style={styles.button}
                    appearance={'ghost'}
                    status="basic"
                    accessoryRight={<Icon name="edit-2-outline" />}
                    onPress={() => {
                      props.onEdit?.();
                    }}
                  />
                )}
                {props.onUnlink && (
                  <Button
                    style={styles.button}
                    appearance={'ghost'}
                    status="danger"
                    accessoryRight={<Icon name="flash-off-outline" />}
                    onPress={() => {
                      props.onUnlink?.();
                    }}
                  />
                )}
              </View>
            )}
          </>
        }
      />

      <JDAModuleSelect {...(props as any)} ref={ref as any} />

      {/* <RBSheet
        ref={ref as any}
        // height={300}
        openDuration={250}>
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
          {props.onCreate && (
            <Button
              style={styles.createBtn}
              accessoryLeft={(p) => <Icon {...p} name="plus" />}
              size="tiny"
              onPress={() => {
                props.onCreate?.();
              }}>
              Create
            </Button>
          )}
        </View>
        <List
          data={props.options}
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
      </RBSheet> */}
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
