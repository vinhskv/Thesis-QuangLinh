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
import {IStudentClass} from '../../data_types/StudentClass';
import {StudentClassFormConfig, StudentClassModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<IStudentClass>;
export const StudentClassBasicListItem = withJDAListItemController<
  IStudentClass,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<IStudentClass>;
export const StudentClassBasicList = withJDAListController<
  IStudentClass,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  StudentClassBasicListItem,
  {
    icon: 'people-outline',
    title: studentClass => `${studentClass.name}`,
  },
  StudentClassModuleConfig,
);

type FormProps = IJDABasicFormProps<IStudentClass>;
export const StudentClassBasicForm = withJDAFormControler<
  IStudentClass,
  FormProps
>(JDABasicForm, StudentClassFormConfig, StudentClassModuleConfig);

export const StudentClassBasicModule = withModuleController<
  IStudentClass,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<IStudentClass>
>(
  JDABasicModule,
  StudentClassBasicList,
  StudentClassBasicForm,
  StudentClassModuleConfig,
);
