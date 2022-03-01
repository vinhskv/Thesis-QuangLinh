import {createJDAList} from '../../base/creators/createJDAList';
import {
  Enrolment,
  EnrolmentPrimaryKey,
  EnrolmentApiResource,
} from '../../data_types/Enrolment';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<Enrolment>(EnrolmentApiResource, EnrolmentPrimaryKey);

export type EnrolmentListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type EnrolmentListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withEnrolmentListController = withListController;

export const withEnrolmentListItemController = withListItemController;
