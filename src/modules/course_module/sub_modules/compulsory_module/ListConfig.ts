import {IJDAListConfig} from '../../../../base/creators/createListComponents';
import {CompulsoryModule} from '../../../../data_types/CompulsoryModule';
export const CompulsoryModuleListConfig: IJDAListConfig<CompulsoryModule> = {
  listItemProps: {
    icon: 'person-outline',
    title: compulsory_module =>
      ` ${compulsory_module.id} | ${compulsory_module.code} | ${compulsory_module.name} | ${compulsory_module.semester} | ${compulsory_module.credits} |`,
  },
  listProps: {},
};
