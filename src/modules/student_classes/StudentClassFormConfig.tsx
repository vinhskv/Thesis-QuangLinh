import React from 'react';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {
  StudentClass,
  StudentClassFieldLabel,
} from '../../data_types/StudentClass';

export const StudentClassFormConfig: Record<
  keyof StudentClass,
  React.ReactNode
> = {
  id: <NumberInput name="id" label={StudentClassFieldLabel.id} />,
  name: <StringInput name="name" label={StudentClassFieldLabel.name} />,
  students: <StudentInput name="dob" label={StudentClassFieldLabel.students} />,
};
