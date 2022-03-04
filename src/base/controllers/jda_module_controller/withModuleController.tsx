import * as React from 'react';
import {ComponentType, useCallback, useEffect, useRef, useState} from 'react';
import {useAPI} from '../jda_apis/useAPI';
import {
  IJDAFormControlerProps,
  JDAControlledFormComponent,
  JDAFormMode,
} from '../jda_form_controllers/withFormController';
import {
  IJDAListControllerProps,
  IJDAListRef,
  JDAControlledListComponent,
} from '../jda_list_controllers/hocs/withJDAListController';
import {IJDAListItemControllerProps} from '../jda_list_controllers/hocs/withJDAListItemController';
export enum JDAModuleView {
  LIST,
  FORM,
}
export interface IJDAModuleAPI {
  currentView: JDAModuleView;
  ListView: React.ReactNode;
  FormView: React.ReactNode;
  listRouteName: string;
  formRouteName: string;
}

export interface IJDAModuleControllerProps extends IJDAModuleAPI {} // reversed for other logic

export function withModuleController<
  T,
  ListItemProps extends IJDAListItemControllerProps<T>,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
  P extends IJDAModuleControllerProps,
>(
  Component: ComponentType<P>,
  ListView: JDAControlledListComponent<T, ListItemProps, ListProps>,
  FormView: JDAControlledFormComponent<T, FormProps>,
  apiResouce: string,
) {
  return (props: Omit<P, keyof IJDAModuleAPI>) => {
    const [currentView, setCurrentView] = useState<JDAModuleView>(
      JDAModuleView.LIST,
    );
    const [formMode, setFormMode] = useState<JDAFormMode>(
      JDAFormMode.READ_ONLY,
    );
    const api = useAPI<T>(apiResouce);
    const listRef = useRef<IJDAListRef<T>>();

    /////////// Connect List and Form to API
    const handleFormSubmit = useCallback(
      async (_submitedItem: T) => {
        console.log(_submitedItem);
        switch (formMode) {
          case JDAFormMode.EDIT:
            break;
          case JDAFormMode.CREATE:
            const res = await api.create(_submitedItem);
            setCurrentView(JDAModuleView.LIST);
            listRef.current?.itemsControl.addItems([res]);
            console.log(res);
            break;
          case JDAFormMode.READ_ONLY:
            break;
        }
      },
      [api, formMode],
    );
    const handleAddItem = useCallback(() => {
      setFormMode(JDAFormMode.CREATE);
      setCurrentView(JDAModuleView.FORM);
    }, []);

    const handleEditItem = useCallback((_item: T) => {
      setCurrentView(JDAModuleView.FORM);
      setFormMode(JDAFormMode.EDIT);
    }, []);

    const handleDeleteItems = useCallback(
      async (_items: T[keyof T][]) => {
        const res = await api.deleteById(_items[0]);
        if (res.success) {
          listRef.current?.itemsControl.deleteItems(_items);
        }
      },
      [api],
    );
    const handleChangePage = useCallback(
      async (page: number) => {
        listRef.current?.setLoading(true);
        const res = await api.getByPage(page);
        if (res.success) {
          const {content, pageCount, currentPage} = res.payload;
          if (content) {
            listRef.current?.itemsControl.resetItems(content);
          }
          if (pageCount) {
            listRef.current?.pageControl.setTotalPage(pageCount);
          }
          if (currentPage) {
            listRef.current?.pageControl.setCurrentPage(currentPage);
          }
        }
        listRef.current?.setLoading(false);
      },
      [api],
    );
    const handleRefresh = () => handleChangePage(0);
    const handleChangePageSize = useCallback((_pageSize: number) => {}, []);
    const handleShowDetail = useCallback((_item: T) => {}, []);
    const handleFormCancel = useCallback(() => {
      setCurrentView(JDAModuleView.LIST);
    }, []);
    // auto load page 0 when first render
    useEffect(() => {
      handleChangePage(0);
    }, [handleChangePage]);
    ///////// Render
    return (
      <Component
        {...(props as P)}
        currentView={currentView}
        ListView={
          <ListView
            ref={listRef}
            onAddItem={handleAddItem}
            onShowDetail={handleShowDetail}
            onEditItem={handleEditItem}
            onRefresh={handleRefresh}
            onDeleteItems={handleDeleteItems}
            onChangePage={handleChangePage}
            onChangePageSize={handleChangePageSize}
            {...({} as any)}
          />
        }
        listRouteName={'List'}
        FormView={
          <FormView
            onCancel={handleFormCancel}
            onSubmit={handleFormSubmit}
            {...({} as any)}
          />
        }
        formRouteName={'Form'}
      />
    );
  };
}
