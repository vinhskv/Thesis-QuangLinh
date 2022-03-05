import {useFocusEffect} from '@react-navigation/native';
import {Button, Layout} from '@ui-kitten/components';
import * as React from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IJDAFormControlerProps} from '../../controllers/jda_form_controllers/withFormController';

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
        {Object.keys(props.formConfig).map(key => (
          <React.Fragment key={key}>
            {props.formConfig[key as keyof typeof props.formConfig]}
          </React.Fragment>
        ))}
        <Layout style={styles.footer}>
          <Button size={'small'} status={'danger'} onPress={props.cancel}>
            Cancel
          </Button>
          <Button size={'small'} onPress={props.submit}>
            Submit
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
