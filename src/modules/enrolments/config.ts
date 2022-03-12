import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import NumberInput from '../../data_inputs/basic_inputs/NumberInput';
import {Enrolment} from '../../data_types/Enrolment';
import {
  FormCourseModuleInput,
  FormNumberInput,
  FormStringInput,
  FormStudentInput,
} from '../FormInputs';

export const EnrolmentModuleConfig: ModuleConfig<Enrolment> = {
  primaryKey: 'id',
  apiResource: 'enrolments',
  moduleName: 'Enrolments',
  fieldLabel: {
    id: 'ID',
    student: 'Enrolment',
    courseModule: 'Course module',
    internalMark: 'Internal mark',
    examMark: 'Exam mark',
    finalGrade: 'Final grade',
  },
  quickRender: (v?: Enrolment) =>
    v ? `${v.courseModule?.name} | ${v.student?.name}` : '',
};

export const EnrolmentFormConfig: JDAFormConfig<Enrolment> = {
  id: NumberInput,
  student: FormStudentInput,
  courseModule: FormCourseModuleInput,
  internalMark: FormNumberInput,
  examMark: FormNumberInput,
  finalGrade: FormStringInput,
};
