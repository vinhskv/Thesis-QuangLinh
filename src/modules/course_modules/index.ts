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
  CourseModule,
  CourseModuleApiResource,
  CourseModuleFieldLabel,
  CourseModulePrimaryKey,
} from '../../data_types/CourseModule/CourseModule';
import {CourseModuleFormConfig} from './CourseModuleFormConfig';

type ListItemProps = IJDABasicListItemProps<CourseModule>;
export const CourseModuleBasicListItem = withJDAListItemController<
  CourseModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<CourseModule>;
export const CourseModuleBasicList = withJDAListController<
  CourseModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  CourseModuleBasicListItem,
  {
    icon: 'book-open',
    title: course => `${course.name}`,
  },
  CourseModulePrimaryKey,
);

type FormProps = IJDABasicFormProps<CourseModule>;
export const CourseModuleBasicForm = withJDAFormControler<
  CourseModule,
  FormProps
>(
  JDABasicForm,
  CourseModuleFormConfig,
  CourseModuleFieldLabel,
  CourseModulePrimaryKey,
);

export const CourseModuleBasicModule = withModuleController<
  CourseModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  CourseModuleBasicList,
  CourseModuleBasicForm,
  CourseModuleApiResource,
  CourseModulePrimaryKey,
);
