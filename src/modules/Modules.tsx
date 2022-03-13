import {createModuleComponents} from '../base/creators/createModuleComponents';
import {Address} from '../data_types/Address';
import {CourseModule} from '../data_types/CourseModule';
import {Enrolment} from '../data_types/Enrolment';
import {Student} from '../data_types/Student';
import {StudentClass} from '../data_types/StudentClass';
import {
  AddressFormConfig,
  AddressListConfig,
  AddressModuleConfig,
} from './addresses/config';
import {
  CourseModuleModuleConfig,
  CourseModuleFormConfig,
  CourseModuleListConfig,
} from './course_modules/config';
import {
  EnrolmentModuleConfig,
  EnrolmentListConfig,
  EnrolmentFormConfig,
} from './enrolments/config';
import {
  StudentModuleConfig,
  StudentFormConfig,
  StudentListConfig,
} from './students/config';
import {
  StudentClassModuleConfig,
  StudentClassListConfig,
  StudentClassFormConfig,
} from './student_classes/config';

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
  Module: StudentModule,
  List: StudentList,
  ListItem: StudentListItem,
  Form: StudentForm,
} = createModuleComponents<Student>(
  StudentModuleConfig,
  StudentListConfig,
  StudentFormConfig,
);

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
  Module: CourseModuleModule,
  List: CourseModuleList,
  ListItem: CourseModuleListItem,
  Form: CourseModuleForm,
} = createModuleComponents<CourseModule>(
  CourseModuleModuleConfig,
  CourseModuleListConfig,
  CourseModuleFormConfig,
);
