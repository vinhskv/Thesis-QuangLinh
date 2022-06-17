import {IJDAListConfig} from '../../../../base/creators/createListComponents';
import {ElectiveModule} from '../../../../data_types/ElectiveModule';
export const ElectiveModuleListConfig: IJDAListConfig<ElectiveModule> = {
  listItemProps: {
    icon: 'person-outline',
    title: elective_module =>
      ` ${elective_module.id} | ${elective_module.code} | ${elective_module.name} | ${elective_module.semester} | ${elective_module.credits} |`,
  },
  listProps: {},
};
