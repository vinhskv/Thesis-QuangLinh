import {
  createEnumInput,
  createFormDataInput,
  createModuleInput,
} from '../base/creators/createDataInput';
import {JDADateInput} from '../base/views/jda_inputs/JDADateInput';
import {JDANumberInput} from '../base/views/jda_inputs/JDANumberInput';
import {JDAStringInput} from '../base/views/jda_inputs/JDAStringInput';
import {Gender} from '../data_types/Student';
import {AddressModuleConfig} from './addresses/config';
import {CompulsoryModuleModuleConfig} from './course_modules/compulsory_modules/config';
import {CourseModuleModuleConfig} from './course_modules/config';
import {ElectiveModuleModuleConfig} from './course_modules/elective_modules/config';
import {EnrolmentModuleConfig} from './enrolments/config';
import {StudentModuleConfig} from './students/config';
import {StudentClassModuleConfig} from './student_classes/config';
// Basic form input components
export const {
  FormInput: FormStringInput,
  FormMultiInput: FormMultiStringInput,
} = createFormDataInput(JDAStringInput);

export const {FormInput: FormDateInput, FormMultiInput: FormMultiDateInput} =
  createFormDataInput(JDADateInput);

export const {
  FormInput: FormNumberInput,
  FormMultiInput: FormMultiNumberInput,
} = createFormDataInput(JDANumberInput);

// Enum form input components

export const {
  Input: GenderInput,
  FormInput: FormGenderInput,
  FormMultiInput: FormMultiGenderInput,
} = createEnumInput(Gender);

// Module form input components
export const {
  Input: StudentInput,
  FormInput: FormStudentInput,
  FormMultiInput: FormMultiStudentInput,
} = createModuleInput(StudentModuleConfig);

export const {
  Input: AddressInput,
  FormInput: FormAddressInput,
  FormMultiInput: FormMultiAddressInput,
} = createModuleInput(AddressModuleConfig);

export const {
  Input: CourseModuleInput,
  FormInput: FormCourseModuleInput,
  FormMultiInput: FormMultiCourseModuleInput,
} = createModuleInput(CourseModuleModuleConfig);

export const {
  Input: ElectiveModuleInput,
  FormInput: FormElectiveModuleInput,
  FormMultiInput: FormMultiElectiveModuleInput,
} = createModuleInput(ElectiveModuleModuleConfig);

export const {
  Input: CompulsoryModuleInput,
  FormInput: FormCompulsoryModuleInput,
  FormMultiInput: FormMultiCompulsoryModuleInput,
} = createModuleInput(CompulsoryModuleModuleConfig);

export const {
  Input: EnrolmentInput,
  FormInput: FormEnrolmentInput,
  FormMultiInput: FormMultiEnrolmentInput,
} = createModuleInput(EnrolmentModuleConfig);

export const {
  Input: StudentClassInput,
  FormInput: FormStudentClassInput,
  FormMultiInput: FormMultiStudentClassInput,
} = createModuleInput(StudentClassModuleConfig);
