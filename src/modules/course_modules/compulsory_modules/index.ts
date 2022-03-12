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
  CompulsoryModule,
  CompulsoryModuleFieldLabel,
  CompulsoryModulePrimaryKey,
} from '../../../data_types/CourseModule/CompulsoryModule';
import {CompulsoryModuleFormConfig} from './CompulsoryModuleFormConfig';
import {CompulsoryModuleModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<CompulsoryModule>;
export const CompulsoryModuleBasicListItem = withJDAListItemController<
  CompulsoryModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<CompulsoryModule>;
export const CompulsoryModuleBasicList = withJDAListController<
  CompulsoryModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  CompulsoryModuleBasicListItem,
  {
    icon: 'book-open',
    title: course => `${course.name}`,
  },
  CompulsoryModulePrimaryKey,
);

type FormProps = IJDABasicFormProps<CompulsoryModule>;
export const CompulsoryModuleBasicForm = withJDAFormControler<
  CompulsoryModule,
  FormProps
>(
  JDABasicForm,
  CompulsoryModuleFormConfig,
  CompulsoryModuleFieldLabel,
  CompulsoryModulePrimaryKey,
);

export const CompulsoryModuleBasicModule = withModuleController<
  CompulsoryModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  CompulsoryModuleBasicList,
  CompulsoryModuleBasicForm,
  CompulsoryModuleModuleConfig,
);
