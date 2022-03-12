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
import {IElectiveModule} from '../../../data_types/ElectiveModule';
import {ElectiveModuleFormConfig, ElectiveModuleModuleConfig} from './config';

type ListItemProps = IJDABasicListItemProps<IElectiveModule>;
export const ElectiveModuleBasicListItem = withJDAListItemController<
  IElectiveModule,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<IElectiveModule>;
export const ElectiveModuleBasicList = withJDAListController<
  IElectiveModule,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  ElectiveModuleBasicListItem,
  {
    icon: 'book-open-outline',
    title: course => `${course.name}`,
  },
  ElectiveModuleModuleConfig,
);

type FormProps = IJDABasicFormProps<IElectiveModule>;
export const ElectiveModuleBasicForm = withJDAFormControler<
  IElectiveModule,
  FormProps
>(JDABasicForm, ElectiveModuleFormConfig, ElectiveModuleModuleConfig);

export const ElectiveModuleBasicModule = withModuleController<
  IElectiveModule,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps<IElectiveModule>
>(
  JDABasicModule,
  ElectiveModuleBasicList,
  ElectiveModuleBasicForm,
  ElectiveModuleModuleConfig,
);
