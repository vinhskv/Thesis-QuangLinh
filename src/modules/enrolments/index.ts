import {withJDAFormControler} from '../../base/controllers/jda_form_controllers/withFormController';
import {withJDAListController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {withModuleController} from '../../base/controllers/jda_module_controller/withModuleController';
import JDABasicForm, {
  IJDABasicFormProps,
} from '../../base/views/jda_form/JDAForm';
import JDABasicList, {
  IJDABasicListProps,
} from '../../base/views/jda_list/JDABasicList';
import {
  IJDABasicListItemProps,
  JDABasicListItem,
} from '../../base/views/jda_list/JDABasicListItem';
import {
  IJDABasicModuleProps,
  JDABasicModule,
} from '../../base/views/jda_module/JDABasicModule';
import {
  Enrolment,
  EnrolmentApiResource,
  EnrolmentPrimaryKey,
} from '../../data_types/Enrolment';

type ListItemProps = IJDABasicListItemProps<Enrolment>;
export const EnrolmentBasicListItem = withJDAListItemController<
  Enrolment,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<Enrolment, ListItemProps>;
export const EnrolmentBasicList = withJDAListController<Enrolment, ListProps>(
  JDABasicList,
  EnrolmentPrimaryKey,
);

type FormProps = IJDABasicFormProps<Enrolment>;
export const EnrolmentBasicForm = withJDAFormControler<Enrolment, FormProps>(
  JDABasicForm,
);

export const EnrolmentBasicModule = withModuleController<
  Enrolment,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(JDABasicModule, EnrolmentBasicList, EnrolmentBasicForm, EnrolmentApiResource);
