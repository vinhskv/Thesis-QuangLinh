import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';
import JDAForm from './base/containers/jda_form/JDAForm';
import JDAStringInput from './base/containers/jda_form/jda_form_inputs/JDAStringInput';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <>
        <SafeAreaView>
          <JDAForm
            defaultValue={{
              name: 'LINH',
              age: '18',
            }}
            formName={'UserForm'}
            onSubmit={formValue => {
              console.log(formValue);
            }}>
            <JDAStringInput label={'Tên'} name="name" />
            <JDAStringInput label={'Tuổi'} name="age" />
          </JDAForm>
        </SafeAreaView>
      </>
    );
  }
}
