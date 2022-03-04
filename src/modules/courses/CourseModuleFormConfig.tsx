import React from 'react';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import {
  CourseModule,
  CourseModuleFieldLabel,
} from '../../data_types/CourseModule';

export const CourseModuleFormConfig: Record<
  keyof CourseModule,
  React.ReactNode
> = {
  id: <StringInput name="id" label={CourseModuleFieldLabel.id} />,
  name: <StringInput name="name" label={CourseModuleFieldLabel.name} />,
  code: <StringInput name="code" label={CourseModuleFieldLabel.code} />,
  semester: (
    <NumberInput name="semester" label={CourseModuleFieldLabel.semester} />
  ),
  credits: <NumberInput name="code" label={CourseModuleFieldLabel.credits} />,
};
