import * as React from 'react';
import {SafeAreaView} from 'react-native';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressFormScreen} from './modules/addresses/AddressFormScreen';
import {StudentFormScreen} from './modules/students/StudentFormScreen';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Address'}
        routes={[
          {component: StudentFormScreen, name: 'Student'},
          {component: AddressFormScreen, name: 'Address'},
        ]}
      />
    );
  }
}
