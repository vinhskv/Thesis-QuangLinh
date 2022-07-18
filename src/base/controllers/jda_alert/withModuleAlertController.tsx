import * as React from 'react';import {IJDAFormControlerProps} from '../jda_form_controllers/withFormController';export interface IJDAAlertControllerProps {}export enum ModuleErrorType {  ERROR,  WARNING,  INFO,}export interface IJDAModuleAlert<T> {  type: ModuleErrorType;  data?: T;  message: string;}export interface IJDAModuleAlertContext {  showAlert: (alert: IJDAModuleAlert<any>) => void;}export const JDAModuleAlertContext =  React.createContext<IJDAModuleAlertContext>({    showAlert: (_v) => null,  });export function withModuleAlertController<T, P extends IJDAModuleAlert<T>>(  Component: React.ComponentType<P>,) {  return (props: Omit<IJDAFormControlerProps<T>, keyof IJDAModuleAlert<T>>) => {    return (      <>        <Component {...(props as any)} />      </>    );  };}