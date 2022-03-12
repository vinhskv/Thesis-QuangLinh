import {enum2Array} from '../base/utils/enum2Array';
import {JDAEnumInput} from '../base/views/jda_inputs/JDAEnumInput';
import {Gender} from '../data_types/Student';

export const GenderInput = JDAEnumInput<Gender>({
  enumObject: enum2Array<Gender>(Gender),
});
