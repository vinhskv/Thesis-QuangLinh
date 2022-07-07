import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {Address, SubAddress} from '../../data_types/Address';
import {Modules} from '../../data_types/enums/Modules';

export const AddressModuleConfig: IJDAModuleConfig<Address, SubAddress> = {
  primaryKey: 'id',
  route: Modules.Address,
  apiResource: 'addresses',
  moduleName: 'Addresses',
  fieldLabel: {
    id: 'ID',
    name: 'City name',
    student: 'Student',
  },
  quickRender: address => (address ? ` ${address.id} | ${address.name} |` : ''),
  apiConfig: {
    toPOST: address => {
      return {
        ...address,
        studentId: address.student?.id,
      };
    },
  },
};
