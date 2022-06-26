import * as React from 'react';

export interface IuseTypedContextProps {}

export function useTypedContext<T>(ContextType: any) {
  const context = React.useContext(ContextType) as T;
  return context;
}