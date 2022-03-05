import {useFocusEffect} from '@react-navigation/native';
import {Button, Layout} from '@ui-kitten/components';
import * as React from 'react';
import {BackHandler, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  IJDAFormControlerProps,
  JDAFormMode,
} from '../../controllers/jda_form_controllers/withFormController';

export interface IJDABasicFormProps<T> extends IJDAFormControlerProps<T> {}

const styles = StyleSheet.create({
  submit_button: {
    marginVertical: 20,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  footer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
});

export default function JDABasicForm<T>(props: IJDABasicFormProps<T>) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (props.cancel) {
          props.cancel();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [props]),
  );
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {props.formInputs.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
        {props.mode !== JDAFormMode.READ_ONLY && (
          <Layout style={styles.footer}>
            <Button size={'small'} status={'danger'} onPress={props.cancel}>
              Cancel
            </Button>
            <Button size={'small'} onPress={props.submit}>
              {props.mode === JDAFormMode.CREATE ? 'Create' : 'Update'}
            </Button>
          </Layout>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
