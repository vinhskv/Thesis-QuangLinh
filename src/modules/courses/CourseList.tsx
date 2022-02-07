import * as React from 'react';
import {CourseListControllerProps, withCourseListController} from '.';
import {JDAList} from '../../base/views/jda_list/JDAList';
import {CourseModule} from '../../data_types/CourseModule';
import CourseListItem from './CourseListItem';

export interface ICourseListProps extends CourseListControllerProps {}

function CourseList(props: ICourseListProps) {
  return (
    <JDAList<CourseModule>
      renderItem={item => <CourseListItem item={item} />}
      data={props.itemsControl.items}
      refreshList={props.itemsControl.refreshList}
    />
  );
}

export default withCourseListController(CourseList);
