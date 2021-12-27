import * as React from 'react';
import {SafeAreaView} from 'react-native';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressFormComponent} from './modules/addresses/AddressForm';
import {StudentFormComponent} from './modules/students/StudentFormComponent';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Address'}
        routes={[
          {component: StudentFormComponent, name: 'Student'},
          {component: AddressFormComponent, name: 'Address'},
        ]}
      />
    );
  }
}
