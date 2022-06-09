import {createModuleComponents} from '../base/creators/createModuleComponents';

import {StudentClass} from '../data_types/StudentClass';
import {Address} from '../data_types/Address';
import {CourseModule} from '../data_types/CourseModule';
import {Enrolment} from '../data_types/Enrolment';
import {Student} from '../data_types/Student';


import {
  StudentClassFormConfig,
  StudentClassListConfig,
  StudentClassModuleConfig,
} from './studentclass/ModuleConfig';
import {
  AddressFormConfig,
  AddressListConfig,
  AddressModuleConfig,
} from './address/ModuleConfig';
import {
  CourseModuleFormConfig,
  CourseModuleListConfig,
  CourseModuleModuleConfig,
} from './coursemodule/ModuleConfig';
import {
  EnrolmentFormConfig,
  EnrolmentListConfig,
  EnrolmentModuleConfig,
} from './enrolment/ModuleConfig';
import {
  StudentFormConfig,
  StudentListConfig,
  StudentModuleConfig,
} from './student/ModuleConfig';



export const {
  Module: StudentClassModule,
  List: StudentClassList,
  ListItem: StudentClassListItem,
  Form: StudentClassForm,
} = createModuleComponents<StudentClass>(
  StudentClassModuleConfig,
  StudentClassListConfig,
  StudentClassFormConfig,
);

export const {
  Module: AddressModule,
  List: AddressList,
  ListItem: AddressListItem,
  Form: AddressForm,
} = createModuleComponents<Address>(
  AddressModuleConfig,
  AddressListConfig,
  AddressFormConfig,
);

export const {
  Module: CourseModuleModule,
  List: CourseModuleList,
  ListItem: CourseModuleListItem,
  Form: CourseModuleForm,
} = createModuleComponents<CourseModule>(
  CourseModuleModuleConfig,
  CourseModuleListConfig,
  CourseModuleFormConfig,
);

export const {
  Module: EnrolmentModule,
  List: EnrolmentList,
  ListItem: EnrolmentListItem,
  Form: EnrolmentForm,
} = createModuleComponents<Enrolment>(
  EnrolmentModuleConfig,
  EnrolmentListConfig,
  EnrolmentFormConfig,
);

export const {
  Module: StudentModule,
  List: StudentList,
  ListItem: StudentListItem,
  Form: StudentForm,
} = createModuleComponents<Student>(
  StudentModuleConfig,
  StudentListConfig,
  StudentFormConfig,
);

