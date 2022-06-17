import { Text } from '@ui-kitten/components';
import * as React from 'react';
<<<<<<< HEAD
import {Modal, SafeAreaView, StyleSheet} from 'react-native';
import {JDAModuleView} from '../../controllers/jda_module_controller/hooks/useModuleHandler';
import {IJDAModuleControllerProps} from '../../controllers/jda_module_controller/withModuleController';
=======
import { Modal, SafeAreaView, StyleSheet } from 'react-native';
import { JDAModuleView } from '../../controllers/jda_module_controller/hooks/useModuleHandler';
import {
  IJDAModuleControllerProps
} from '../../controllers/jda_module_controller/withModuleController';
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc

export interface IJDABasicModuleProps<T> extends IJDAModuleControllerProps<T> { }

export function JDABasicModule<T>(props: IJDABasicModuleProps<T>) {
  return (
    <SafeAreaView>
      {props.ListView}
      <Modal
        visible={props.currentView === JDAModuleView.FORM}
        collapsable={true}
<<<<<<< HEAD
        onRequestClose={() => {}}
=======
        onRequestClose={() => { }}
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc
        animationType={'slide'}
      >
        <Text style={styles.formTitle}>
          Form: {props.moduleConfig.moduleName}
        </Text>
        {props.FormView}
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
