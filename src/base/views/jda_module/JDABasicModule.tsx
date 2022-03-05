import * as React from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {
  IJDAModuleControllerProps,
  JDAModuleView,
} from '../../controllers/jda_module_controller/withModuleController';

export interface IJDABasicModuleProps extends IJDAModuleControllerProps {
  moduleName: string;
}

export function JDABasicModule(props: IJDABasicModuleProps) {
  return (
    <SafeAreaView>
      {props.ListView}
      <Modal
        visible={props.currentView === JDAModuleView.FORM}
        collapsable={true}
        onRequestClose={() => {}}
        // transparent={true}
        animationType={'slide'}>
        {props.FormView}
      </Modal>
    </SafeAreaView>
  );
}
