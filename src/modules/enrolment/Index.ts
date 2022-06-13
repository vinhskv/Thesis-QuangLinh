import { createModuleComponents } from "../../base/creators/createModuleComponents";
import {Enrolment, SubEnrolment} from '../../data_types/Enrolment';
import { EnrolmentFormConfig } from "./FormConfig";
import { EnrolmentListConfig } from "./ListConfig";
import { EnrolmentModuleConfig } from "./ModuleConfig";

export const {
    Module: EnrolmentModule,
    List: EnrolmentList,
    ListItem: EnrolmentListItem,
    Form: EnrolmentForm,
} = createModuleComponents<Enrolment, SubEnrolment>(
    EnrolmentModuleConfig,
    EnrolmentListConfig,
    EnrolmentFormConfig,
);