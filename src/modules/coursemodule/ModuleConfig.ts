import {IJDAFormConfig} from '../../base/controllers/jda_form_controllers/withFormController';
import {IJDAModuleConfig} from '../../base/controllers/jda_module_controller/withModuleController';
import {IJDAListConfig} from '../../base/creators/createListComponents';
import {CourseModule} from '../../data_types/CourseModule';
import {
    FormNumberInput,
    FormStringInput,
} from '../FormInputs';

export const CourseModuleModuleConfig: IJDAModuleConfig<CourseModule> = {
  primaryKey: 'id',
  apiResource: 'course-modules',
  moduleName: 'Course Modules',
  fieldLabel: {
    id: 'Id',
    code: 'Code',
    name: 'Name',
    semester: 'Semester',
    credits: 'Credits',
  },
  quickRender: coursemodule => (coursemodule ? ` ${ coursemodule.id } | ${ coursemodule.code } | ${ coursemodule.name } | ${ coursemodule.semester } | ${ coursemodule.credits } |` : ''),
  apiConfig:{
      toPOST:(coursemodule)=>{
        return {
          ...coursemodule,
        }
      }
  }
};

export const CourseModuleFormConfig: IJDAFormConfig<CourseModule> = {
  id: FormNumberInput,
  code: FormStringInput,
  name: FormStringInput,
  semester: FormNumberInput,
  credits: FormNumberInput,
};

export const CourseModuleListConfig: IJDAListConfig<CourseModule> = {
  listItemProps: {
    icon: 'person-outline',
    title: coursemodule => ` ${ coursemodule.id } | ${ coursemodule.code } | ${ coursemodule.name } | ${ coursemodule.semester } | ${ coursemodule.credits } |`,
  },
  listProps: {},
};