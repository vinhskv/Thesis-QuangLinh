import * as React from 'react';
import {
  StudentClassListControllerProps,
  withStudentClassListController,
} from '.';
import {JDAList} from '../../base/views/jda_list/JDAList';
import {StudentClass} from '../../data_types/StudentClass';
import StudentClassListItem from './StudentClassListItem';

export interface IStudentClassListProps
  extends StudentClassListControllerProps {}

function StudentClassList(props: IStudentClassListProps) {
  return (
    <JDAList<StudentClass>
      renderItem={item => <StudentClassListItem item={item} />}
      data={props.itemsControl.items}
      refreshList={props.itemsControl.refreshList}
    />
  );
}

export default withStudentClassListController(StudentClassList);
