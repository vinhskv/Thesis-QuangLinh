import {createJDAList} from '../../base/creators/createJDAList';
import {CourseResource} from '../../data_types/CourseModule';
import {Student, StudentKeyField} from '../../data_types/Student';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<Student>(CourseResource, StudentKeyField);

export type StudentListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type StudentListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withStudentListController = withListController;

export const withStudentListItemController = withListItemController;
