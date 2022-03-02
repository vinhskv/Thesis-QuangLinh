import {Button} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IJDAFormControlerProps} from '../../controllers/jda_form_controllers/withFormController';

export interface IJDABasicFormProps<T> extends IJDAFormControlerProps<T> {
  formConfig: Record<keyof T, React.ReactNode>;
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

export default function JDABasicForm<T>(props: IJDABasicFormProps<T>) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {Object.keys(props.formConfig).map(key => (
          <React.Fragment key={key}>
            {props.formConfig[key as keyof typeof props.formConfig]}
          </React.Fragment>
        ))}
        <Button style={styles.submit_button} onPress={props.submit}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
