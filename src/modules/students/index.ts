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
import {IStudent} from '../../data_types/Student';
import {StudentFormConfig, StudentModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<IStudent>;
export const StudentBasicListItem = withJDAListItemController<
  IStudent,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<IStudent>;
export const StudentBasicList = withJDAListController<
  IStudent,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  StudentBasicListItem,
  {
    icon: 'person-outline',
    title: student => `${student.name}`,
    subTitle: student =>
      `#${student.id} | ${student.dob} | ${student.address?.name || ''}`,
  },
  StudentModuleConfig,
);

type FormProps = IJDABasicFormProps<IStudent>;
export const StudentBasicForm = withJDAFormControler<IStudent, FormProps>(
  JDABasicForm,
  StudentFormConfig,
  StudentModuleConfig,
);

export const StudentModule = withModuleController<
  IStudent,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<IStudent>
>(JDABasicModule, StudentBasicList, StudentBasicForm, StudentModuleConfig);
