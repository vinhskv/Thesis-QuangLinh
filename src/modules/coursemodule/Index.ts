import { createModuleComponents } from "../../base/creators/createModuleComponents";
import {CourseModule} from '../../data_types/CourseModule';
import { CourseModuleFormConfig } from "./FormConfig";
import { CourseModuleListConfig } from "./ListConfig";
import { CourseModuleModuleConfig } from "./ModuleConfig";

export const {
    Module: CourseModuleModule,
    List: CourseModuleList,
    ListItem: CourseModuleListItem,
    Form: CourseModuleForm,
} = createModuleComponents<CourseModule>(
    CourseModuleModuleConfig,
    CourseModuleListConfig,
    CourseModuleFormConfig,
);