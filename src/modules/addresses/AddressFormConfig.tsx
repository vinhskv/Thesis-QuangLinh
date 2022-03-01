import React from 'react';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {Address, AddressFieldLabel} from '../../data_types/Address';

export const AddressFormConfig: Record<keyof Address, React.ReactNode> = {
  id: <StringInput name="id" label={AddressFieldLabel.id} />,
  name: <StringInput name="name" label={AddressFieldLabel.name} />,
  student: <StudentInput name="student" label={AddressFieldLabel.student} />,
};