import * as React from 'react';
import {
  IJDAModuleControllerProps,
  JDAModuleMode,
} from '../../controllers/jda_module_controller/withModuleController';
export interface IJDABasicModuleProps<T> extends IJDAModuleControllerProps<T> {}

const ViewMap: Record<JDAModuleMode, string> = {
  [JDAModuleMode.CREATE_ITEM]: 'Form',
  [JDAModuleMode.EDIT_ITEM]: 'Form',
  [JDAModuleMode.VIEW_ITEM]: 'Form',
  [JDAModuleMode.VIEW_LIST_ITEM]: 'List',
};

export function JDABasicModule<T>(props: IJDABasicModuleProps<T>) {
  return (
    <>
      {ViewMap[props.mode] === 'Form' && props.FormView}
      {ViewMap[props.mode] === 'List' && props.ListView}
    </>
  );
}
