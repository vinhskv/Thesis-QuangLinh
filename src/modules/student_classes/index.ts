import {withJDAFormControler} from '../../base/controllers/jda_form_controllers/withFormController';
import {withJDAListController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {ModuleConfig} from '../../base/controllers/jda_module_controller';
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
  StudentClass,
  StudentClassFieldLabel,
  StudentClassPrimaryKey,
} from '../../data_types/StudentClass';
import {StudentClassFormConfig} from './StudentClassFormConfig';

export const StudentClassModuleConfig: ModuleConfig<StudentClass> = {
  primaryKey: 'id',
  apiResource: 'student-classes',
  moduleName: 'Classes',
  fieldLabel: {
    id: 'ID',
    name: 'Name',
    students: 'Students',
  },
};

type ListItemProps = IJDABasicListItemProps<StudentClass>;
export const StudentClassBasicListItem = withJDAListItemController<
  StudentClass,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<StudentClass>;
export const StudentClassBasicList = withJDAListController<
  StudentClass,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  StudentClassBasicListItem,
  {
    icon: 'account-supervisor-circle',
    title: studentClass => `${studentClass.name}`,
  },
  StudentClassPrimaryKey,
);

type FormProps = IJDABasicFormProps<StudentClass>;
export const StudentClassBasicForm = withJDAFormControler<
  StudentClass,
  FormProps
>(
  JDABasicForm,
  StudentClassFormConfig,
  StudentClassFieldLabel,
  StudentClassPrimaryKey,
);

export const StudentClassBasicModule = withModuleController<
  StudentClass,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  StudentClassBasicList,
  StudentClassBasicForm,
  StudentClassModuleConfig,
);
