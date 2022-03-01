import {createJDAList} from '../../base/creators/createJDAList';
import {
  StudentClass,
  StudentClassPrimaryKey,
  StudentClassApiResource,
} from '../../data_types/StudentClass';

const {
  withListController,
  withListItemController,
  getListControllerPropsType,
  getListItemControllerPropsType,
} = createJDAList<StudentClass>(StudentClassApiResource, StudentClassPrimaryKey);

export type StudentClassListControllerProps = ReturnType<
  typeof getListControllerPropsType
>;

export type StudentClassListItemControllerProps = ReturnType<
  typeof getListItemControllerPropsType
>;

export const withStudentClassListController = withListController;

export const withStudentClassListItemController = withListItemController;
