import * as React from 'react';
import {ComponentType, useCallback, useRef, useState} from 'react';
import {useAPI} from '../jda_apis/useAPI';
import {IJDAFormControlerProps} from '../jda_form_controllers/withFormController';
import {
  IJDAListControllerProps,
  IJDAListRef,
} from '../jda_list_controllers/hocs/withJDAListController';

// export interface IJDAModuleAPI<
//   T,
//   ListProps extends IJDAListControllerProps<T>,
//   FormProps extends IJDAFormControlerProps<T>,
// > {

// }

export interface IJDAModuleControllerProps<
  T,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
> {
  ListView: React.ComponentType<ListProps>;
  FormView: React.ComponentType<FormProps>;
  listControlProps: ListProps;
  formControlProps: FormProps;
}

export function withModuleController<
  T,
  ListProps extends IJDAListControllerProps<T>,
  FormProps extends IJDAFormControlerProps<T>,
  P extends IJDAModuleControllerProps<T, ListProps, FormProps>,
>(Component: ComponentType<P>, routeName: string) {
  return (props: P) => {
    const [formMode, setFormMode] = useState<'create' | 'update'>('create');
    const api = useAPI<T>(routeName);
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
    const handleRefresh = handleChangePage(0);
    const handleChangePageSize = useCallback(() => {}, []);
    const handleShowDetail = useCallback((_item: T) => {}, []);

    ///////// Render
    const ListView = () => {
      return (
        <props.ListView
          {...props.listControlProps}
          ref={listRef}
          onAddItem={handleAddItem}
          onShowDetail={handleShowDetail}
          onEditItem={handleEditItem}
          onRefresh={handleRefresh}
          onDeleteItems={handleDeleteItems}
          onChangePage={handleChangePage}
          onChangePageSize={handleChangePageSize}
        />
      );
    };
    const FormView = () => {
      return (
        <props.FormView
          {...props.formControlProps}
          onSubmit={handleFormSubmit}
        />
      );
    };
    return (
      <Component {...(props as P)} ListView={ListView} FormView={FormView} />
    );
  };
}
