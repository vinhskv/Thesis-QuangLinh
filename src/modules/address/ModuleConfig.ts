import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import { Modules } from '../../data_types/enums/Modules';
import {Address, SubAddress} from '../../data_types/Address';

export const AddressModuleConfig: IJDAModuleConfig<Address, SubAddress> = {
  primaryKey: 'id',
  route: Modules.Address,
  apiResource: 'addresses',
  moduleName: 'Addresses',
  fieldLabel: {
    id: 'Id',
    name: 'Name',
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
