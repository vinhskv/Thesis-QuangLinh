import React from 'react';
import AddressInput from '../../data_inputs/AddressInput';
import DateInput from '../../data_inputs/basic_inputs/DateInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import {GenderInput} from '../../data_inputs/StudentInput';
import {Student, StudentFieldLabel} from '../../data_types/Student';

export const StudentFormConfig: Record<keyof Student, React.ReactNode> = {
  id: <StringInput name="id" label={StudentFieldLabel.id} />,
  name: <StringInput name="name" label={StudentFieldLabel.name} />,
  gender: <GenderInput name="gender" label={StudentFieldLabel.gender} />,
  email: <StringInput name="email" label={StudentFieldLabel.email} />,
  address: <AddressInput name="address" label={StudentFieldLabel.address} />,
  dob: <DateInput name="dob" label={StudentFieldLabel.dob} />,
};
