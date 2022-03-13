import {JDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
import {IEnrolment} from '../../data_types/Enrolment';
import {
  FormCourseModuleInput,
  FormNumberInput,
  FormStringInput,
  FormStudentInput,
} from '../FormInputs';

export const EnrolmentModuleConfig: ModuleConfig<IEnrolment> = {
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
  quickRender: (v?: IEnrolment) =>
    v ? `${v.courseModule?.name} | ${v.student?.name}` : '',
};

export const EnrolmentFormConfig: JDAFormConfig<IEnrolment> = {
  id: FormNumberInput,
  student: FormStudentInput,
  courseModule: FormCourseModuleInput,
  internalMark: FormNumberInput,
  examMark: FormNumberInput,
  finalGrade: FormStringInput,
};
