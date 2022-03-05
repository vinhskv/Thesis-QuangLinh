import {withJDAFormControler} from '../../../base/controllers/jda_form_controllers/withFormController';
import {withJDAListController} from '../../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {withModuleController} from '../../../base/controllers/jda_module_controller/withModuleController';
import JDABasicForm, {
  IJDABasicFormProps,
} from '../../../base/views/jda_form/JDABasicForm';
import JDABasicList, {
  IJDABasicListProps,
} from '../../../base/views/jda_list/JDABasicList';
import {
  IJDABasicListItemProps,
  JDABasicListItem,
} from '../../../base/views/jda_list/JDABasicListItem';
import {
  IJDABasicModuleProps,
  JDABasicModule,
} from '../../../base/views/jda_module/JDABasicModule';
import {
  ElectiveModule,
  ElectiveModulePrimaryKey,
  ElectiveModuleFieldLabel,
  ElectiveModuleApiResource,
} from '../../../data_types/CourseModule/ElectiveModule';
import {ElectiveModuleFormConfig} from './ElectiveModuleFormConfig';

type ListItemProps = IJDABasicListItemProps<ElectiveModule>;
export const ElectiveModuleBasicListItem = withJDAListItemController<
  ElectiveModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<ElectiveModule>;
export const ElectiveModuleBasicList = withJDAListController<
  ElectiveModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  ElectiveModuleBasicListItem,
  {
    icon: 'book-open',
    title: course => `${course.name}`,
  },
  ElectiveModulePrimaryKey,
);

type FormProps = IJDABasicFormProps<ElectiveModule>;
export const ElectiveModuleBasicForm = withJDAFormControler<
  ElectiveModule,
  FormProps
>(
  JDABasicForm,
  ElectiveModuleFormConfig,
  ElectiveModuleFieldLabel,
  ElectiveModulePrimaryKey,
);

export const ElectiveModuleBasicModule = withModuleController<
  ElectiveModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  ElectiveModuleBasicList,
  ElectiveModuleBasicForm,
  ElectiveModuleApiResource,
  ElectiveModulePrimaryKey,
);
