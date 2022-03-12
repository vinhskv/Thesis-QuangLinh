import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {IAddress} from '../../data_types/Address';
import {
  FormNumberInput,
  FormStringInput,
  FormStudentInput,
} from '../FormInputs';

export const AddressModuleConfig: ModuleConfig<IAddress> = {
  primaryKey: 'id',
  apiResource: 'addresses',
  moduleName: 'Addresses',
  fieldLabel: {
    id: 'ID',
    name: 'City name',
    student: 'Student',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const AddressFormConfig: JDAFormConfig<IAddress> = {
  id: FormNumberInput,
  name: FormStringInput,
  student: FormStudentInput,
};
