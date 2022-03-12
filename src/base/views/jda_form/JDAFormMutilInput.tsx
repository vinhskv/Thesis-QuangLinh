import {
  Button,
  Icon,
  Text,
  ThemedComponentProps,
  withStyles,
} from '@ui-kitten/components';
import * as React from 'react';
import {View} from 'react-native';
import {IJDAFormMultiInputControllerProps} from '../../controllers/jda_form_controllers/withFormMultiInputController';

export interface IJDAMultiFormInputProps<T>
  extends ThemedComponentProps,
    IJDAFormMultiInputControllerProps<T> {}

export function _JDAFormMutilInput<T>(props: IJDAMultiFormInputProps<T>) {
  return (
    <>
      {props.label && (
        <Text style={props.eva?.style?.label || {}}>{props.label}</Text>
      )}
      {!props.disabled && (
        <Button size={'tiny'} onPress={() => props.append({})}>
          {`Add ${props.label.toLowerCase()}`}
        </Button>
      )}
      {props.formItems.map((item, index) => (
        <View style={props.eva?.style?.row || {}}>
          <View style={props.eva?.style?.expanded || {}}>{item}</View>
          {!props.disabled && (
            <Button
              style={props.eva?.style?.delete_btn || {}}
              size={'medium'}
              appearance={'ghost'}
              status="danger"
              accessoryLeft={<Icon name="trash-2-outline" />}
              onPress={() => props.remove(index)}
            />
          )}
        </View>
      ))}
    </>
  );
}

export const JDAFormMutilInput = withStyles(_JDAFormMutilInput, theme => ({
  label: {
    fontSize: 12,
    color: theme['color-basic-600'],
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
}));
