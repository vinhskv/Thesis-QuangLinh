import * as React from 'react';
import {StudentListControllerProps, withStudentListController} from '.';
import {JDAList} from '../../base/views/jda_list/JDAList';
import {Student} from '../../data_types/Student';
import StudentListItem from './StudentListItem';

export interface IStudentListProps extends StudentListControllerProps {}

function StudentList(props: IStudentListProps) {
  return (
    <JDAList<Student>
      renderItem={item => <StudentListItem item={item} />}
      data={props.itemsControl.items}
      refreshList={props.itemsControl.refreshList}
    />
  );
}

export default withStudentListController(StudentList);
