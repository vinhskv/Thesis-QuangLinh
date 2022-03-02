import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {AddressBasicListItem, AddressBasicModule} from './modules/addresses';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={'Addresses'}
        routes={[
          {
            component: <AddressBasicModule />,
            name: 'Addresses',
          },
          {
            component: (
              <AddressBasicListItem
                title={a => a.name}
                icon={'home'}
                item={{id: '1', name: 'Linh'}}
                itemIndex={0}
              />
            ),
            name: 'TEST',
          },
          // {
          //   component: <StudentBasicModule />,
          //   name: 'Student',
          // },
          // {
          //   component: <EnrolmentBasicModule />,
          //   name: 'Enrolments',
          // },
          // {
          //   component: <CourseModuleBasicModule />,
          //   name: 'Courses',
          // },
          // {
          //   component: <StudentClassBasicModule />,
          //   name: 'Student Class',
          // },
        ]}
      />
    );
  }
}
