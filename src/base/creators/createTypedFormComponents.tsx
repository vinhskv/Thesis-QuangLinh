import {
  ITypedFormItem,
  withJDATypedFormController,
} from '../controllers/jda_form_controllers/withTypedFormController';
import {JDABasicTypedForm} from '../views/jda_form/JDABasicTypedForm';

export function createTypedFormComponents(FormList: ITypedFormItem[]) {
  const Form = withJDATypedFormController(JDABasicTypedForm, FormList);
  return {Form};
}