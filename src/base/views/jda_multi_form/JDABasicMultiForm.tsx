import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {IJDAMultiFormControllerProps} from '../../controllers/jda_multi_form_controller/withMultiFormControler';
import {JDASelect} from '../jda_inputs/JDASelect';

export interface IJDABasicGenenricFormProps
  extends IJDAMultiFormControllerProps {}

export function JDABasicMultiForm(props: IJDABasicGenenricFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <JDASelect<string>
          label="Type"
          values={props.formTypes}
          labelRender={v => v}
          value={props.formType}
          onChange={props.onChangeFormType}
        />
      </View>
      {props.FormView}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  select: {
    marginHorizontal: 10,
  },
});
