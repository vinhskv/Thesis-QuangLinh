import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {Address} from '../../data_types/Address';
import {
  FormNumberInput,
  FormStringInput,
  // FormStudentInput,
} from '../FormInputs';

export const AddressModuleConfig: IJDAModuleConfig<Address> = {
  primaryKey: 'id',
  apiResource: 'addresses',
  moduleName: 'Addresses',
  fieldLabel: {
    id: 'ID',
    name: 'City name',
    // student: 'Student',
  },
  quickRender: v => (v ? `${v.name}` : ''),
};

export const AddressFormConfig: IJDAFormConfig<Address> = {
  id: FormNumberInput,
  name: FormStringInput,
  // student: FormStudentInput,
};

export const AddressListConfig: IJDAListConfig<Address> = {
  listItemProps: {
    icon: 'home-outline',
    title: address => `${address.name}`,
    subTitle: address => `#${address.id}`,
  },
  listProps: {},
};
