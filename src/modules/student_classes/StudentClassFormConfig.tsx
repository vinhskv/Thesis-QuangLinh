import React from 'react';
import StringInput from '../../data_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {
  StudentClass,
  StudentClassFieldLabel,
} from '../../data_types/StudentClass';

export const StudentFormConfig: Record<keyof StudentClass, React.ReactNode> = {
  id: <StringInput name="id" label={StudentClassFieldLabel.id} />,
  name: <StringInput name="name" label={StudentClassFieldLabel.name} />,
  students: <StudentInput name="dob" label={StudentClassFieldLabel.students} />,
};
