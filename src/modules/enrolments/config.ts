import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {Enrolment} from '../../data_types/Enrolment';
import {
  FormCourseModuleInput,
  FormNumberInput,
  FormStringInput,
  FormStudentInput,
} from '../FormInputs';

export const EnrolmentModuleConfig: IJDAModuleConfig<Enrolment> = {
  primaryKey: 'id',
  apiResource: 'enrolments',
  moduleName: 'Enrolments',
  fieldLabel: {
    id: 'ID',
    student: 'Student',
    courseModule: 'Course module',
    internalMark: 'Internal mark',
    examMark: 'Exam mark',
    finalGrade: 'Final grade',
  },
  quickRender: (v?: Enrolment) =>
    v ? `${v.courseModule?.name} | ${v.student?.name}` : '',
};

export const EnrolmentFormConfig: IJDAFormConfig<Enrolment> = {
  id: FormNumberInput,
  student: FormStudentInput,
  courseModule: FormCourseModuleInput,
  internalMark: FormNumberInput,
  examMark: FormNumberInput,
  finalGrade: FormStringInput,
};

export const EnrolmentListConfig: IJDAListConfig<Enrolment> = {
  listItemProps: {
    icon: 'layers-outline',
    title: enrolment =>
      `#${enrolment.id} | ${enrolment.courseModule?.name || ''}`,
    subTitle: enrolment =>
      `#${enrolment.student?.id}-${enrolment.student?.name} | ${enrolment.finalGrade}`,
  },
  listProps: {},
};
