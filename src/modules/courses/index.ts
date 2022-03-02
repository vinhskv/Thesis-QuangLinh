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
  CourseModule,
  CourseModuleApiResource,
  CourseModulePrimaryKey,
} from '../../data_types/CourseModule';

type ListItemProps = IJDABasicListItemProps<CourseModule>;
export const CourseModuleBasicListItem = withJDAListItemController<
  CourseModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<CourseModule, ListItemProps>;
export const CourseModuleBasicList = withJDAListController<
  CourseModule,
  ListProps
>(JDABasicList, CourseModulePrimaryKey);

type FormProps = IJDABasicFormProps<CourseModule>;
export const CourseModuleBasicForm = withJDAFormControler<
  CourseModule,
  FormProps
>(JDABasicForm);

export const CourseModuleBasicModule = withModuleController<
  CourseModule,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  CourseModuleBasicList,
  CourseModuleBasicForm,
  CourseModuleApiResource,
);
