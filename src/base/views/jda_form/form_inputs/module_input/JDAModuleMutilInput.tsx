import {Button, Icon, Text, useTheme} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {IJDAModuleMultiInputControllerProps} from '../../../../controllers/jda_form_controllers/jda_form_input_controller/withModuleMultiInputController';
import ModuleSelect, {ModuleSelectRef} from './ModuleSelect';

export interface IJDAModuleMultiInputProps<T>
  extends IJDAModuleMultiInputControllerProps<T> {
  renderOption: (t?: T) => string;
}

export function JDAModuleMultiInput<T>(props: IJDAModuleMultiInputProps<T>) {
  const theme = useTheme();
  const JDAModuleInput = ModuleSelect<T>();
  const ref = React.useRef<ModuleSelectRef>();
  return (
    <>
      {props.label && (
        <Text style={[styles.label, {color: theme['color-basic-600']}]}>
          {props.label}
        </Text>
      )}

      {props.formItems.map((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.expanded}>{item}</View>
          {!props.disabled && (
            <Button
              style={styles.delete_btn}
              size={'medium'}
              appearance={'ghost'}
              status="danger"
              accessoryLeft={<Icon name="close-circle-outline" />}
              onPress={() => props.remove(index)}
            />
          )}
        </View>
      ))}

      {!props.disabled && (
        <Button
          size={'small'}
          onPress={() => ref.current?.open()}
          appearance="outline"
          status={'basic'}>
          {`+ Add ${props.label.toLowerCase()}`}
        </Button>
      )}
      <JDAModuleInput
        ref={ref as any}
        renderOption={props.renderOption}
        options={[]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  list: {},
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 2,
  },
  expanded: {
    flex: 1,
    flexGrow: 1,
  },
  delete_btn: {
    padding: 0,
    width: 30,
  },
});
