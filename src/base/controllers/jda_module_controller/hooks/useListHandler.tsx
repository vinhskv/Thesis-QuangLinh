import * as React from 'react';
import { useRef } from 'react';
import { useAPI } from '../../jda_apis/useAPI';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { IJDAModuleConfig } from '../withModuleController';
import { JDAModuleModes, useModuleStateReducer } from './useModuleStateReducer';
export enum JDAModuleView {
    LIST = "List",
    FORM = "Form",
}
export interface IuseModuleHandlerProps {
}

export function useListHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>,
    moduleState: ReturnType<typeof useModuleStateReducer<T>>,
    listRef: ReturnType<typeof useRef<IJDAListRef<T>>>) {
    /////////// Connect List and Form to API
    const api = useAPI<T>(moduleConfig.apiResource);

    const handleAddItem = React.useCallback(() => {
        moduleState.changeModuleState({
            type: JDAModuleModes.CREATE_NEW_ITEM,
            data: {
                goBackAfterCreated: false,
                prevScreenState: null
            }
        })
    }, []);

    const handleEditItem = React.useCallback((itemToEdit: T) => {
        if (itemToEdit) {
            moduleState.changeModuleState({
                type: JDAModuleModes.EDIT_ITEM,
                data: {
                    editItem: itemToEdit
                }
            })
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
        moduleState.changeModuleState({
            type: JDAModuleModes.SHOW_ITEM_DETAIL,
            data: {
                viewItem: item
            }
        })
    }, []);

    // auto load page 0 when first render
    React.useEffect(() => {
        handleChangePage(0);
    }, [handleChangePage]);
    return (
        {
            onAddItem: handleAddItem,
            onShowDetail: handleShowDetail,
            onEditItem: handleEditItem,
            onRefresh: handleRefresh,
            onDeleteItems: handleDeleteItems,
            onChangePage: handleChangePage,
            onChangePageSize: handleChangePageSize,
        }
    );
}
