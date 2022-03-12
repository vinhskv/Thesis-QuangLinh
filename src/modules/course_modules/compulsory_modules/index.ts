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
import {ICompulsoryModule} from '../../../data_types/CompulsoryModule';
import {
  CompulsoryModuleFormConfig,
  CompulsoryModuleModuleConfig,
} from './config';

type ListItemProps = IJDABasicListItemProps<ICompulsoryModule>;
export const CompulsoryModuleBasicListItem = withJDAListItemController<
  ICompulsoryModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<ICompulsoryModule>;
export const CompulsoryModuleBasicList = withJDAListController<
  ICompulsoryModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  CompulsoryModuleBasicListItem,
  {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  CompulsoryModuleModuleConfig,
);

type FormProps = IJDABasicFormProps<ICompulsoryModule>;
export const CompulsoryModuleBasicForm = withJDAFormControler<
  ICompulsoryModule,
  FormProps
>(JDABasicForm, CompulsoryModuleFormConfig, CompulsoryModuleModuleConfig);

export const CompulsoryModuleBasicModule = withModuleController<
  ICompulsoryModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<ICompulsoryModule>
>(
  JDABasicModule,
  CompulsoryModuleBasicList,
  CompulsoryModuleBasicForm,
  CompulsoryModuleModuleConfig,
);
