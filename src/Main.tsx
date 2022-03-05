import {Icon} from '@ui-kitten/components';
import * as React from 'react';
import JDADrawer from './base/views/jda_drawer/JDADrawer';
import {JDABasicGenericModule} from './base/views/jda_generic_module/JDABasicGenericModule';
import {AddressModuleName} from './data_types/Address';
import {CompulsoryModuleModuleName} from './data_types/CourseModule/CompulsoryModule';
import {CourseModuleModuleName} from './data_types/CourseModule/CourseModule';
import {ElectiveModuleModuleName} from './data_types/CourseModule/ElectiveModule';
import {EnrolmentModuleName} from './data_types/Enrolment';
import {StudentModuleName} from './data_types/Student';
import {StudentClassModuleName} from './data_types/StudentClass';
import {AddressBasicModule} from './modules/addresses';
import {CompulsoryModuleBasicModule} from './modules/course_modules/compulsory_modules';
import {ElectiveModuleBasicModule} from './modules/course_modules/elective_modules';
import {EnrolmentBasicModule} from './modules/enrolments';
import {StudentBasicModule} from './modules/students';
import {StudentClassBasicModule} from './modules/student_classes';

export default class MainScreen extends React.Component {
  public render() {
    return (
      <JDADrawer
        initialRoute={AddressModuleName}
        routes={[
          {
            component: <AddressBasicModule moduleName={AddressModuleName} />,
            name: AddressModuleName,
          },
          {
            component: <StudentBasicModule moduleName={StudentModuleName} />,
            name: StudentModuleName,
          },
          {
            component: (
              <EnrolmentBasicModule moduleName={EnrolmentModuleName} />
            ),
            name: EnrolmentModuleName,
          },
          {
            component: (
              <JDABasicGenericModule
                modules={[
                  {
                    Component: ElectiveModuleBasicModule,
                    name: ElectiveModuleModuleName,
                    icon: props => (
                      <Icon
                        style={{width: props.size, height: props.size}}
                        fill={props.color}
                        name={'star'}
                      />
                    ),
                  },
                  {
                    Component: CompulsoryModuleBasicModule,
                    name: CompulsoryModuleModuleName,
                    icon: props => (
                      <Icon
                        style={{width: props.size, height: props.size}}
                        fill={props.color}
                        name={'pantone-outline'}
                      />
                    ),
                  },
                ]}
              />
            ),
            name: CourseModuleModuleName,
          },
          {
            component: (
              <StudentClassBasicModule moduleName={StudentClassModuleName} />
            ),
            name: StudentClassModuleName,
          },
        ]}
      />
    );
  }
}
