import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {Student} from '../../data_types/Student';
import {
    FormStringInput,
    FormGenderInput,
    FormDateInput,
    FormAddressInput,
    FormStudentClassInput,
    FormMultiEnrolmentInput,
} from '../FormInputs';

export const StudentModuleConfig: IJDAModuleConfig<Student> = {
  primaryKey: 'id',
  apiResource: 'students',
  moduleName: 'Students',
  fieldLabel: {
    id: 'Student ID',
    name: 'Full Name',
    gender: 'Gender',
    dob: 'Date of birth',
    // address: 'Current Address',
    email: 'Email',
    studentClass: 'Student class',
    enrolments: 'Course Enrolments',
  },
  quickRender: student => (student ? ` ${ student.id } | ${ student.name } | ${ student.gender } | ${ student.dob } | ${ student.email } |` : ''),
  apiConfig:{
      toPOST:(student)=>{
        return {
          ...student,
          // addressId: student.address?.id,
          studentClassId: student.studentClass?.id,
        }
      }
  }
};

export const StudentFormConfig: IJDAFormConfig<Student> = {
  id: FormStringInput,
  name: FormStringInput,
  gender: FormGenderInput,
  dob: FormDateInput,
  // address: FormAddressInput,
  email: FormStringInput,
  studentClass: FormStudentClassInput,
  enrolments: FormMultiEnrolmentInput,
};

export const StudentListConfig: IJDAListConfig<Student> = {
  listItemProps: {
    icon: 'person-outline',
    title: student => ` ${ student.id } | ${ student.name } | ${ student.gender } | ${ student.dob } | ${ student.email } |`,
  },
  listProps: {},
};