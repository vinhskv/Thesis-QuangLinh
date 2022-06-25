import React from 'react';
import {ReturnTypeUseRouter} from './useRouter';

export interface IJDARouterContext<T> extends ReturnTypeUseRouter<T> {}

const defaultContextValue: IJDARouterContext<any> = {
  RouteState: {
    key: '',
    name: '',
  },
  router: {
    goHome: () => {},
    goToModule: _v => {},
    showCreateForm: _r => undefined,
    showEditForm: (_r, _i) => undefined,
    showDetail: (_r, _i) => {},
    goBack: () => {},
    showList: () => {},
    getGoBackData: () => ({} as any),
    onFocus: _cb => {
      _cb();
    },
  },
  ModuleParams: {} as any,
};

export const JDARouterContext =
  React.createContext<IJDARouterContext<any>>(defaultContextValue);
