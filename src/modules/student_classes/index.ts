import {createJDAList} from '../../base/creators/createJDAList';
import {CourseResource} from '../../data_types/CourseModule';
import {
  StudentClass,
  StudentClassKeyField,
} from '../../data_types/StudentClass';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<StudentClass>(CourseResource, StudentClassKeyField);

export type StudentClassListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type StudentClassListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withStudentClassListController = withListController;

export const withStudentClassListItemController = withListItemController;
