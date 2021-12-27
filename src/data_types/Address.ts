import {Student} from './Student';

export interface Address {
  id: string;
  name: string;
}

export const AddressFieldLable: Record<keyof Address, string> = {
  id: 'ID',
  name: 'City name',
};
