import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {Enrolment} from '../../data_types/Enrolment';
import {
    FormNumberInput,
    FormStudentInput,
    FormCourseModuleInput,
    FormStringInput,
} from '../FormInputs';

export const EnrolmentModuleConfig: IJDAModuleConfig<Enrolment> = {
  primaryKey: 'id',
  apiResource: 'enrolments',
  moduleName: 'Enrolments',
  fieldLabel: {
    id: 'Id',
    student: 'Student',
    courseModule: 'Course Module',
    internalMark: 'Internal Mark',
    examMark: 'Exam Mark',
    finalGrade: 'Final Grade',
    finalMark: 'finalMark',
  },
  quickRender: enrolment => (enrolment ? ` ${ enrolment.id } | ${ enrolment.internalMark } | ${ enrolment.examMark } | ${ enrolment.finalGrade } | ${ enrolment.finalMark } |` : ''),
  apiConfig:{
      toPOST:(enrolment)=>{
        return {
          ...enrolment,
          studentId: enrolment.student.id,
          courseModuleId: enrolment.courseModule.id,
        }
      }
  }
};

export const EnrolmentFormConfig: IJDAFormConfig<Enrolment> = {
  id: FormNumberInput,
  student: FormStudentInput,
  courseModule: FormCourseModuleInput,
  internalMark: FormNumberInput,
  examMark: FormNumberInput,
  finalGrade: FormStringInput,
  finalMark: FormNumberInput,
};

export const EnrolmentListConfig: IJDAListConfig<Enrolment> = {
  listItemProps: {
    icon: 'person-outline',
    title: enrolment => ` ${ enrolment.id } | ${ enrolment.internalMark } | ${ enrolment.examMark } | ${ enrolment.finalGrade } | ${ enrolment.finalMark } |`,
  },
  listProps: {},
};