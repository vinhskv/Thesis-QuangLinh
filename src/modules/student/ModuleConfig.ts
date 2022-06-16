import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {Student, SubStudent} from '../../data_types/Student';

export const StudentModuleConfig: IJDAModuleConfig<Student, SubStudent> = {
  primaryKey: 'id',
  apiResource: 'students',
  moduleName: 'Students',
  fieldLabel: {
    id: 'Id',
    name: 'Name',
    gender: 'Gender',
    dob: 'Dob',
    address: 'Address',
    email: 'Email',
    studentClass: 'Studentclass',
    enrolments: 'Enrolments',
  },
  quickRender: student => (student ? ` ${student.id} | ${student.name} | ${student.gender} | ${student.dob} | ${student.email} |` : ''),
  apiConfig: {
    toPOST: student => {
      return {
        ...student,
        addressId: student.address?.id,
        studentClassId: student.studentClass?.id,
      };
    },
  },
};
