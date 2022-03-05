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
  Student,
  StudentApiResource,
  StudentPrimaryKey,
} from '../../data_types/Student';
import {StudentFormConfig} from './StudentFormConfig';

type ListItemProps = IJDABasicListItemProps<Student>;
export const StudentBasicListItem = withJDAListItemController<
  Student,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<Student>;
export const StudentBasicList = withJDAListController<
  Student,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  StudentBasicListItem,
  {
    icon: 'account',
    title: student => `${student.name}`,
  },
  StudentPrimaryKey,
);

type FormProps = IJDABasicFormProps<Student>;
export const StudentBasicForm = withJDAFormControler<Student, FormProps>(
  JDABasicForm,
  StudentFormConfig,
);

export const StudentBasicModule = withModuleController<
  Student,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  StudentBasicList,
  StudentBasicForm,
  StudentApiResource,
  StudentPrimaryKey,
);
