import {createJDAList} from '../../base/creators/createJDAList';
import {
  Student,
  StudentPrimaryKey,
  StudentApiResource,
} from '../../data_types/Student';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<Student>(StudentApiResource, StudentPrimaryKey);

export type StudentListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type StudentListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withStudentListController = withListController;

export const withStudentListItemController = withListItemController;
