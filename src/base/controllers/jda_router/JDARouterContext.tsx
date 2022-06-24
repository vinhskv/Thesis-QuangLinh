import React from 'react';
import {useRouter} from './useRouter';

interface IJDARouterContext extends ReturnType<typeof useRouter> {}

const defaultContextValue: IJDARouterContext = {
  RouteState: {
    key: '',
    name: '',
  },
  router: {
    goHome: () => {},
    goToModule: _v => {},
    showCreateForm: r => undefined,
    showEditForm: (r, i) => undefined,
    showDetail: (r, i) => {},
    goBack: () => {},
  },
};

export const JDARouterContext =
  React.createContext<IJDARouterContext>(defaultContextValue);
