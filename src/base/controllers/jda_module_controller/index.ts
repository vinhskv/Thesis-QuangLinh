export interface ModuleConfig<T> {
  primaryKey: keyof T;
  apiResource: string;
  moduleName: string;
  fieldLabel: Record<keyof T, string>;
}
export enum JDAModuleView {
  LIST,
  FORM,
}
