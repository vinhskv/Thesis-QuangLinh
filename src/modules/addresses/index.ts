import {createJDAList} from '../../base/creators/createJDAList';
import {
  Address,
  AddressKeyField,
  AddressResource,
} from '../../data_types/Address';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<Address>(AddressResource, AddressKeyField);

export type AddressListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type AddressListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withAddressListController = withListController;

export const withAddressListItemController = withListItemController;
