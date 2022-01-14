import {Button} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IJDAFormControlerProps} from '../../controllers/jda_form_controllers/withFormController';

export interface IJDAFormProps<T> extends IJDAFormControlerProps<T> {
  initialValue?: T;
  // eslint-disable-next-line no-undef
  children: JSX.Element[];
  submitText?: string;
}

const styles = StyleSheet.create({
  submit_button: {
    marginVertical: 20,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default function JDAForm<T>(props: IJDAFormProps<T>) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {props.children}
        <Button style={styles.submit_button} onPress={props.submit}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
