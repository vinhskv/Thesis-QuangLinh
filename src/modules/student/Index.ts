import { createModuleComponents } from "../../base/creators/createModuleComponents";
import {Student, SubStudent} from '../../data_types/Student';
import { StudentFormConfig } from "./FormConfig";
import { StudentListConfig } from "./ListConfig";
import { StudentModuleConfig } from "./ModuleConfig";

export const {
    Module: StudentModule,
    List: StudentList,
    ListItem: StudentListItem,
    Form: StudentForm,
} = createModuleComponents<Student, SubStudent>(
    StudentModuleConfig,
    StudentListConfig,
    StudentFormConfig,
);