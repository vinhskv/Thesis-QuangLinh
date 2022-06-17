import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {Enrolment, SubEnrolment} from '../../data_types/Enrolment';

export const EnrolmentModuleConfig: IJDAModuleConfig<Enrolment, SubEnrolment> =
  {
    primaryKey: 'id',
    apiResource: 'enrolments',
    moduleName: 'Enrolments',
    fieldLabel: {
      id: 'Id',
      student: 'Student',
      courseModule: 'Coursemodule',
      internalMark: 'Internalmark',
      examMark: 'Exammark',
      finalGrade: 'Finalgrade',
      finalMark: 'Finalmark',
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
