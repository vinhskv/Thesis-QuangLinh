import {createJDAList} from '../../base/creators/createJDAList';
import {CourseModule} from '../../data_types/CourseModule';
import {
  CourseModuleKeyField,
  CourseResource,
} from '../../data_types/CourseModule';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<CourseModule>(CourseResource, CourseModuleKeyField);

export type CourseListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type CourseListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withCourseListController = withListController;

export const withCourseListItemController = withListItemController;
