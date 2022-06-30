import * as React from 'react';
import { useContext } from 'react';
import { useAPI } from '../../jda_apis/useAPI';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { JDARouterContext } from '../../jda_router/JDARouterContext';
import { IJDAModuleConfig } from '../withModuleController';
export enum JDAModuleView {
    LIST,
    FORM,
}
export interface IuseModuleHandlerProps {
}

export function useModuleHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>) {
    const router = useContext(JDARouterContext);
    /////////// Connect List and Form to API
    const [currentView, setCurrentView] = React.useState<JDAModuleView>(
        JDAModuleView.LIST,
    );
    const [formMode, setFormMode] = React.useState<JDAFormMode>(JDAFormMode.CREATE);
    const [formValue, setFormValue] = React.useState<T | undefined>();
    const api = useAPI<T>(moduleConfig.apiResource);
    const listRef = React.useRef<IJDAListRef<T>>();
    const handleFormSubmit = React.useCallback(
        async (submitedItem: T) => {
            switch (formMode) {
                case JDAFormMode.EDIT: {
                    const res = await api.updateById(
                        submitedItem[moduleConfig.primaryKey],
                        submitedItem,
                    );
                    if (res.success) {
                        setCurrentView(JDAModuleView.LIST);
                        listRef.current?.itemsControl.updateItem(res.payload);
                    }
                    break;
                }
                case JDAFormMode.CREATE: {
                    console.log('here');
                    const res = await api.create(submitedItem);
                    console.log('Create result :', res);
                    setCurrentView(JDAModuleView.LIST);
                    listRef.current?.itemsControl.addItems([res]);
                    break;
                }
                case JDAFormMode.READ_ONLY:
                    setCurrentView(JDAModuleView.LIST);
                    break;
            }
            router.JDARouter.goBack()
        },
        [api, formMode],
    );
    const handleAddItem = React.useCallback(() => {
        setCurrentView(JDAModuleView.FORM);
        setFormMode(JDAFormMode.CREATE);
        setFormValue(undefined);
    }, []);

    const handleEditItem = React.useCallback((itemToEdit: T) => {
        if (itemToEdit) {
            setCurrentView(JDAModuleView.FORM);
            setFormMode(JDAFormMode.EDIT);
            setFormValue(itemToEdit);
        }
    }, []);

    const handleDeleteItems = React.useCallback(
        async (_items: T[keyof T][]) => {
            const res = await api.deleteById(_items[0]);
            if (res.success) {
                listRef.current?.itemsControl.deleteItems(_items);
            }
        },
        [api],
    );
    const handleChangePage = React.useCallback(
        async (page: number) => {
            listRef.current?.setLoading(true);
            const res = await api.getByPage(page);
            if (res.success) {
                const { content, pageCount, currentPage } = res.payload;
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
    const handleChangePageSize = React.useCallback((_pageSize: number) => { }, []);
    const handleShowDetail = React.useCallback((item: T) => {
        setCurrentView(JDAModuleView.FORM);
        setFormMode(JDAFormMode.READ_ONLY);
        setFormValue(item);
    }, []);
    const handleFormCancel = React.useCallback(() => {
        setCurrentView(JDAModuleView.LIST);
    }, []);
    // auto load page 0 when first render
    React.useEffect(() => {
        handleChangePage(0);
    }, [handleChangePage]);
    return (
        {
            currentView,
            setCurrentView,
            setFormMode,
            listHandler: {
                ref: listRef,
                onAddItem: handleAddItem,
                onShowDetail: handleShowDetail,
                onEditItem: handleEditItem,
                onRefresh: handleRefresh,
                onDeleteItems: handleDeleteItems,
                onChangePage: handleChangePage,
                onChangePageSize: handleChangePageSize,
            },
            formHandler: {
                initValue: formValue,
                mode: formMode,
                onCancel: handleFormCancel,
                onSubmit: handleFormSubmit,
            }
        }
    );
}
