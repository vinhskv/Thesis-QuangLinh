import * as React from 'react';
import {EnrolmentListControllerProps, withEnrolmentListController} from '.';
import {JDAList} from '../../base/views/jda_list/JDAList';
import {Enrolment} from '../../data_types/Enrolment';
import EnrolmentListItem from './EnrolmentListItem';

export interface IEnrolmentListProps extends EnrolmentListControllerProps {}

function EnrolmentList(props: IEnrolmentListProps) {
  return (
    <JDAList<Enrolment>
      renderItem={item => <EnrolmentListItem item={item} />}
      data={props.itemsControl.items}
      refreshList={props.itemsControl.refreshList}
    />
  );
}

export default withEnrolmentListController(EnrolmentList);
