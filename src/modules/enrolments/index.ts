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
import {IEnrolment} from '../../data_types/Enrolment';
import {EnrolmentFormConfig, EnrolmentModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<IEnrolment>;
export const EnrolmentBasicListItem = withJDAListItemController<
  IEnrolment,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<IEnrolment>;
export const EnrolmentBasicList = withJDAListController<
  IEnrolment,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  EnrolmentBasicListItem,
  {
    icon: 'layers-outline',
    title: enrolment =>
      `#${enrolment.id} | ${enrolment.courseModule?.name || ''}`,
    subTitle: enrolment =>
      `#${enrolment.student?.id}-${enrolment.student?.name} | ${enrolment.finalGrade}`,
  },
  EnrolmentModuleConfig,
);

type FormProps = IJDABasicFormProps<IEnrolment>;
export const EnrolmentBasicForm = withJDAFormControler<IEnrolment, FormProps>(
  JDABasicForm,
  EnrolmentFormConfig,
  EnrolmentModuleConfig,
);

export const EnrolmentBasicModule = withModuleController<
  IEnrolment,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<IEnrolment>
>(
  JDABasicModule,
  EnrolmentBasicList,
  EnrolmentBasicForm,
  EnrolmentModuleConfig,
);
