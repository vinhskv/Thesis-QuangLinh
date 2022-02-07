import {createJDAList} from '../../base/creators/createJDAList';
import {CourseResource} from '../../data_types/CourseModule';
import {Enrolment, EnrolmentKeyField} from '../../data_types/Enrolment';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<Enrolment>(CourseResource, EnrolmentKeyField);

export type EnrolmentListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type EnrolmentListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withEnrolmentListController = withListController;

export const withEnrolmentListItemController = withListItemController;
