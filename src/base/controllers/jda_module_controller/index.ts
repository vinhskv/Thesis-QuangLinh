export interface ModuleConfig<T> {
  primaryKey: keyof T;
  apiResource: string;
  moduleName: string;
  fieldLabel: Record<keyof T, string>;
  quickRender: (v?: T) => string;
}
export enum JDAModuleView {
  LIST,
  FORM,
}
