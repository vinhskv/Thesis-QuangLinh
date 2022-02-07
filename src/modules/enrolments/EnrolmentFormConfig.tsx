import React from 'react';
import CourseModuleInput from '../../data_inputs/CourseModuleInput';
import StringInput from '../../data_inputs/basic_inputs/StringInput';
import StudentInput from '../../data_inputs/StudentInput';
import {Enrolment, EnrolmentFieldLabel} from '../../data_types/Enrolment';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';

export const EnrolmentFormConfig: Record<keyof Enrolment, React.ReactNode> = {
  id: <StringInput name="id" label={EnrolmentFieldLabel.id} />,
  student: <StudentInput name="student" label={EnrolmentFieldLabel.student} />,
  courseModule: (
    <CourseModuleInput
      name="courseModule"
      label={EnrolmentFieldLabel.courseModule}
    />
  ),
  internalMark: (
    <NumberInput name="internalMask" label={EnrolmentFieldLabel.internalMark} />
  ),
  examMark: (
    <NumberInput name="examMark" label={EnrolmentFieldLabel.examMark} />
  ),
  finalGrade: (
    <StringInput name="finalGrade" label={EnrolmentFieldLabel.finalGrade} />
  ),
};
