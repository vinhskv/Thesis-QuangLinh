import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {Enrolment} from '../../data_types/Enrolment';
import {Modules} from '../../data_types/enums/Modules';

export const EnrolmentModuleConfig: IJDAModuleConfig<Enrolment> = {
  primaryKey: 'id',
  route: Modules.Enrolment,
  apiResource: 'enrolments',
  moduleName: 'Enrolments',
  fieldLabel: {
    id: 'Id',
    student: 'Student',
    courseModule: 'Course Module',
    internalMark: 'Internal Mark',
    examMark: 'Exam Mark',
    finalGrade: 'Final Grade',
    finalMark: 'Finalmark',
  },
  quickRender: (enrolment) =>
    enrolment ? ` ${enrolment.id} | ${enrolment.courseModule?.name}` : '',
  apiConfig: {
    toPOST: (enrolment) => {
      return {
        ...enrolment,
        studentId: enrolment.student.id,
        courseModuleId: enrolment.courseModule.id,
      };
    },
  },
};
