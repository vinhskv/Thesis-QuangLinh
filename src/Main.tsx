import {ApplicationProvider} from '@ui-kitten/components';
import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressFormComponent} from './modules/addresses/AddressForm';
import {StudentFormComponent} from './modules/students/StudentFormComponent';
import * as eva from '@eva-design/eva';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <JDADrawer
          initialRoute={'Address'}
          routes={[
            {component: StudentFormComponent, name: 'Student'},
            {component: AddressFormComponent, name: 'Address'},
          ]}
        />
      </ApplicationProvider>
    );
  }
}
