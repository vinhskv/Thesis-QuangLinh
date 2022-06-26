import * as React from 'react';
import { useRef } from 'react';
import { useAPI } from '../../../common_hooks/useAPI';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { JDARouterContext } from '../../jda_router/JDARouterContext';
import { IJDAModuleConfig } from '../withModuleController';

export interface IuseModuleHandlerProps {
}

export function useListHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>,
    // eslint-disable-next-line prettier/prettier
    listRef: ReturnType<typeof useRef<IJDAListRef<T>>>) {
    /////////// Connect List and Form to API
    const api = useAPI<T>(moduleConfig.apiResource);
    const {router} = React.useContext(JDARouterContext);

    const handleAddItem = React.useCallback(() => {
        router.showCreateForm();
    }, [router]);

    const handleEditItem = React.useCallback((itemToEdit: T) => {
        if (itemToEdit) {
            router.showEditForm(itemToEdit);
        }
    }, [router]);

    const handleDeleteItems = React.useCallback(
        async (_items: T[keyof T][]) => {
            const res = await api.deleteById(_items[0]);
            if (res.success) {
                listRef.current?.itemsControl.deleteItems(_items);
            }
        },
        [api, listRef],
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
        [api, listRef],
    );
    const handleRefresh = () => handleChangePage(0);
    const handleChangePageSize = React.useCallback((_pageSize: number) => { }, []);
    const handleShowDetail = React.useCallback((item: T) => {
        router.showDetail(item);
    }, [router]);

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
