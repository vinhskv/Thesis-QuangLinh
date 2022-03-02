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
  StudentClass,
  StudentClassApiResource,
  StudentClassPrimaryKey,
} from '../../data_types/StudentClass';

type ListItemProps = IJDABasicListItemProps<StudentClass>;
export const StudentClassBasicListItem = withJDAListItemController<
  StudentClass,
  ListItemProps
>(JDABasicListItem);

type ListProps = IJDABasicListProps<StudentClass, ListItemProps>;
export const StudentClassBasicList = withJDAListController<
  StudentClass,
  ListProps
>(JDABasicList, StudentClassPrimaryKey);

type FormProps = IJDABasicFormProps<StudentClass>;
export const StudentClassBasicForm = withJDAFormControler<
  StudentClass,
  FormProps
>(JDABasicForm);

export const StudentClassBasicModule = withModuleController<
  StudentClass,
  ListProps,
  FormProps,
  IJDABasicModuleProps
>(
  JDABasicModule,
  StudentClassBasicList,
  StudentClassBasicForm,
  StudentClassApiResource,
);
