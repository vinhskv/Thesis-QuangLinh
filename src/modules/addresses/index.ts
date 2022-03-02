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
  Address,
  AddressApiResource,
  AddressPrimaryKey,
} from '../../data_types/Address';

type ListItemProps = IJDABasicListItemProps<Address>;
export const AddressBasicListItem = withJDAListItemController<
  Address,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<Address>;
export const AddressBasicList = withJDAListController<
  Address,
  ListItemProps,
  ListProps
>(
  JDABasicList,
  AddressBasicListItem,
  {
    icon: 'home',
    title: address => `${address.name}`,
  },
  AddressPrimaryKey,
);

type FormProps = IJDABasicFormProps<Address>;
export const AddressBasicForm = withJDAFormControler<Address, FormProps>(
  JDABasicForm,
);

export const AddressBasicModule = withModuleController<
  Address,
  ListItemProps,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(JDABasicModule, AddressBasicList, AddressBasicForm, AddressApiResource);
