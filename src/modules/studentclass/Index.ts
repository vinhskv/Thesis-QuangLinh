import { createModuleComponents } from "../../base/creators/createModuleComponents";
import {StudentClass, SubStudentClass} from '../../data_types/StudentClass';
import { StudentClassFormConfig } from "./FormConfig";
import { StudentClassListConfig } from "./ListConfig";
import { StudentClassModuleConfig } from "./ModuleConfig";

export const {
    Module: StudentClassModule,
    List: StudentClassList,
    ListItem: StudentClassListItem,
    Form: StudentClassForm,
} = createModuleComponents<StudentClass, SubStudentClass>(
    StudentClassModuleConfig,
    StudentClassListConfig,
    StudentClassFormConfig,
);