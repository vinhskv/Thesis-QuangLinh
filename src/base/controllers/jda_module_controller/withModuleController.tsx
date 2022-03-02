import * as React from 'react';
import {ComponentType, useCallback, useRef, useState} from 'react';
import {useAPI} from '../jda_apis/useAPI';
import {
  IJDAFormControlerProps,
  JDAControlledFormComponent,
} from '../jda_form_controllers/withFormController';
import {
  IJDAListControllerProps,
  IJDAListRef,
  JDAControlledListComponent,
} from '../jda_list_controllers/hocs/withJDAListController';
import {IJDAListItemControllerProps} from '../jda_list_controllers/hocs/withJDAListItemController';

export interface IJDAModuleAPI {
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
    const [formMode, setFormMode] = useState<'create' | 'update'>('create');
    const api = useAPI<T>(apiResouce);
    const listRef = useRef<IJDAListRef<T>>();

    /////////// Connect List and Form to API
    const handleFormSubmit = useCallback(
      (_submitedItem: T) => {
        switch (formMode) {
          case 'create':
            break;
          case 'update':
            break;
        }
      },
      [formMode],
    );
    const handleAddItem = useCallback(() => {
      setFormMode('create');
    }, []);

    const handleEditItem = useCallback((_item: T) => {
      setFormMode('update');
    }, []);

    const handleDeleteItems = useCallback((_items: T[]) => {}, []);
    const handleChangePage = useCallback(
      async (page: number) => {
        const res = await api.getByPage(page);
        if (res.success) {
          const {content, pageCount, currentPage} = res.payload;
          if (content) {
            console.log('++++++REF++++++', listRef.current);

            listRef.current?.itemsControl.resetItems(content);
          }
          if (pageCount) {
            listRef.current?.pageControl.setTotalPage(pageCount);
          }
          if (currentPage) {
            listRef.current?.pageControl.setCurrentPage(currentPage);
          }
        }
      },
      [api],
    );
    const handleRefresh = () => handleChangePage(0);
    const handleChangePageSize = useCallback((_pageSize: number) => {}, []);
    const handleShowDetail = useCallback((_item: T) => {}, []);

    ///////// Render
    return (
      <Component
        {...(props as P)}
        ListView={
          <ListView
            {...({
              ref: listRef,
              onAddItem: handleAddItem,
              onShowDetail: handleShowDetail,
              onEditItem: handleEditItem,
              onRefresh: handleRefresh,
              onDeleteItems: handleDeleteItems,
              onChangePage: handleChangePage,
              onChangePageSize: handleChangePageSize,
            } as any)}
          />
        }
        listRouteName={`List_${apiResouce}`}
        FormView={<FormView {...({onSubmit: handleFormSubmit} as any)} />}
        formRouteName={`Form_${apiResouce}`}
      />
    );
  };
}
