import * as eva from '@eva-design/eva';
import {
  ApplicationProvider as UIKittenProvider,
  IconRegistry,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import AddressModule from './modules/addresses/AddressModule';
import StudentModule from './modules/students/StudentModule';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <PaperProvider theme={{...DefaultTheme}}>
          <UIKittenProvider {...eva} theme={eva.light}>
            <JDADrawer
              initialRoute={'Addresses'}
              routes={[
                {component: <StudentModule />, name: 'Student'},
                {
                  component: <AddressModule />,
                  name: 'Addresses',
                },
              ]}
            />
          </UIKittenProvider>
        </PaperProvider>
      </>
    );
  }
}
