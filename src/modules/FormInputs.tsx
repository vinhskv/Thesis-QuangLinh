import {
  createEnumInput,
  createFormDataInput,
  createModuleInput,
} from '../base/creators/createInputComponents';
import {JDADateInput} from '../base/views/jda_inputs/JDADateInput';
import {JDANumberInput} from '../base/views/jda_inputs/JDANumberInput';
import {JDAStringInput} from '../base/views/jda_inputs/JDAStringInput';

import {Gender} from '../data_types/Gender';


import {StudentClassModuleConfig} from './studentclass/ModuleConfig';
import {AddressModuleConfig} from './address/ModuleConfig';
import {CourseModuleModuleConfig} from './coursemodule/ModuleConfig';
import {EnrolmentModuleConfig} from './enrolment/ModuleConfig';
import {StudentModuleConfig} from './student/ModuleConfig';


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
  Input: StudentClassInput,
  FormInput: FormStudentClassInput,
  FormMultiInput: FormMultiStudentClassInput,
} = createModuleInput(StudentClassModuleConfig);

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
  Input: EnrolmentInput,
  FormInput: FormEnrolmentInput,
  FormMultiInput: FormMultiEnrolmentInput,
} = createModuleInput(EnrolmentModuleConfig);

export const {
  Input: StudentInput,
  FormInput: FormStudentInput,
  FormMultiInput: FormMultiStudentInput,
} = createModuleInput(StudentModuleConfig);


