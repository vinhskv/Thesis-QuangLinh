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
import {ICourseModule} from '../../data_types/CourseModule';
import {CompulsoryModuleBasicForm} from './compulsory_modules';
import {CourseModuleModuleConfig} from './config';
import {ElectiveModuleBasicForm} from './elective_modules';

type ListItemProps = IJDABasicListItemProps<ICourseModule>;
export const CourseModuleBasicListItem = withJDAListItemController<
  ICourseModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<ICourseModule>;
export const CourseModuleBasicList = withJDAListController<
  ICourseModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  CourseModuleBasicListItem,
  {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  CourseModuleModuleConfig,
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
  ICourseModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<ICourseModule>
>(
  JDABasicModule,
  CourseModuleBasicList,
  CourseModuleBasicForm,
  CourseModuleModuleConfig,
);
