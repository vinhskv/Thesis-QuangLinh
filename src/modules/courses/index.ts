import {createJDAList} from '../../base/creators/createJDAList';
import {
  CourseModule,
  CourseModulePrimaryKey,
  CourseApiResource,
} from '../../data_types/CourseModule';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<CourseModule>(CourseApiResource, CourseModulePrimaryKey);

export type CourseListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type CourseListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withCourseListController = withListController;

export const withCourseListItemController = withListItemController;
