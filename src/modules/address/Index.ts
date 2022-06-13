import { createModuleComponents } from "../../base/creators/createModuleComponents";
import {Address, SubAddress} from '../../data_types/Address';
import { AddressFormConfig } from "./FormConfig";
import { AddressListConfig } from "./ListConfig";
import { AddressModuleConfig } from "./ModuleConfig";

export const {
    Module: AddressModule,
    List: AddressList,
    ListItem: AddressListItem,
    Form: AddressForm,
} = createModuleComponents<Address, SubAddress>(
    AddressModuleConfig,
    AddressListConfig,
    AddressFormConfig,
);