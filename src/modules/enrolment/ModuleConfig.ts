import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {Enrolment, SubEnrolment} from '../../data_types/Enrolment';

export const EnrolmentModuleConfig: IJDAModuleConfig<Enrolment, SubEnrolment> = {
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
  quickRender: enrolment => (enrolment ? ` ${enrolment.id} |` : ''),
  apiConfig: {
    toPOST: enrolment => {
      return {
        ...enrolment,
        studentId: enrolment.student.id,
        courseModuleId: enrolment.courseModule.id,
      };
    },
  },
};