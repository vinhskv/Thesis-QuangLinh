import {withJDAFormControler} from '../../base/controllers/jda_form_controllers/withFormController';
import {withJDAListController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {withModuleController} from '../../base/controllers/jda_module_controller/withModuleController';
import JDABasicForm, {
  IJDABasicFormProps,
} from '../../base/views/jda_form/JDABasicForm';
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
  EnrolmentFieldLabel,
  EnrolmentPrimaryKey,
} from '../../data_types/Enrolment';
import {EnrolmentFormConfig, EnrolmentModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<Enrolment>;
export const EnrolmentBasicListItem = withJDAListItemController<
  Enrolment,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<Enrolment>;
export const EnrolmentBasicList = withJDAListController<
  Enrolment,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  EnrolmentBasicListItem,
  {
    icon: 'ballot-outline',
    title: enrolment =>
      `#${enrolment.id} | ${enrolment.courseModule?.name || ''}`,
    subTitle: enrolment =>
      `#${enrolment.student?.id}-${enrolment.student?.name} | ${enrolment.finalGrade}`,
  },
  EnrolmentPrimaryKey,
);

type FormProps = IJDABasicFormProps<Enrolment>;
export const EnrolmentBasicForm = withJDAFormControler<Enrolment, FormProps>(
  JDABasicForm,
  EnrolmentFormConfig,
  EnrolmentFieldLabel,
  EnrolmentPrimaryKey,
);

export const EnrolmentBasicModule = withModuleController<
  Enrolment,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  EnrolmentBasicList,
  EnrolmentBasicForm,
  EnrolmentModuleConfig,
);
