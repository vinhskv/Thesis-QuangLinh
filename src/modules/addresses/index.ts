import {withJDAListController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListController';
import {withJDAListItemController} from '../../base/controllers/jda_list_controllers/hocs/withJDAListItemController';
import JDABasicList, {
  IJDABasicListProps,
} from '../../base/views/jda_list/JDABasicList';
import {
  IJDABasicListItemProps,
  JDABasicListItem,
} from '../../base/views/jda_list/JDABasicListItem';
import {
  Address,
  AddressApiResource,
  AddressPrimaryKey,
} from '../../data_types/Address';

export const AddressBasicList = withJDAListController<
  Address,
  IJDABasicListProps<Address, IJDABasicListItemProps<Address>>
>(AddressApiResource, AddressPrimaryKey, JDABasicList);

export const AddressBasicListItem = withJDAListItemController<
  Address,
  IJDABasicListItemProps<Address>
>(JDABasicListItem);
