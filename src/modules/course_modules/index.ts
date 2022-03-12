import {withJDAMultiFormController} from '../../base/controllers/jda_form_controllers/withMultiFormControler';
import {withJDAListController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import {withModuleController} from '../../base/controllers/jda_module_controller/withModuleController';
import {
  IJDABasicGenenricFormProps,
  JDABasicMultiForm,
} from '../../base/views/jda_form/JDABasicMultiForm';
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
  CourseModulePrimaryKey,
} from '../../data_types/CourseModule/CourseModule';
import {CompulsoryModuleBasicForm} from './compulsory_modules';
import {CourseModuleModuleConfig} from './config';
import {ElectiveModuleBasicForm} from './elective_modules';

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

type FormProps = IJDABasicGenenricFormProps;
export const CourseModuleBasicForm = withJDAMultiFormController(
  JDABasicMultiForm,
  [
    {
      type: 'compulsory',
      formComponent: CompulsoryModuleBasicForm,
    },
    {
      type: 'elective',
      formComponent: ElectiveModuleBasicForm,
    },
  ],
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
  CourseModuleModuleConfig,
);
