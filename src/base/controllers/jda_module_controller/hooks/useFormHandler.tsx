import * as React from 'react';
import { useRef } from 'react';
import { useAPI } from '../../jda_apis/useAPI';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { JDARouterContext } from '../../jda_router/JDARouterContext';
import { IJDAModuleConfig } from '../withModuleController';
import { JDAModuleModes, useModuleStateReducer } from './useModuleStateReducer';

export function useFormHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>, 
    listRef: ReturnType<typeof useRef<IJDAListRef<T>>>) {

    const router = React.useContext(JDARouterContext);
    const handleFormCancel = React.useCallback(() => {
        router.router.showCreateForm
        moduleStateHandler.changeModuleState({
            type: JDAModuleModes.SHOW_LIST_ITEM
        })
    }, []);
    const api = useAPI<T>(moduleConfig.apiResource);
    const handleFormSubmit = React.useCallback(
        async (submitedItem: T) => {
            switch (moduleStateHandler.moduleState.viewMode) {
                case JDAFormMode.EDIT: {
                    const res = await api.updateById(
                        submitedItem[moduleConfig.primaryKey],
                        submitedItem,
                    );
                    if (res.success) {
                        moduleStateHandler.changeModuleState({
                            type: JDAModuleModes.SHOW_LIST_ITEM
                        })
                        listRef.current?.itemsControl.updateItem(res.payload);
                    }
                    break;
                }
                case JDAFormMode.CREATE: {
                    console.log('here');
                    const res = await api.create(submitedItem);
                    console.log('Create result :', res);

                    router.router.goBack()

                    moduleStateHandler.changeModuleState({
                        type: JDAModuleModes.SHOW_LIST_ITEM
                    })
                    listRef.current?.itemsControl.addItems([res]);
                    break;
                }
                case JDAFormMode.READ_ONLY:
                    moduleStateHandler.changeModuleState({
                        type: JDAModuleModes.SHOW_LIST_ITEM
                    })
                    break;
            }
        },
        [api],
    );

    return {
        onCancel: handleFormCancel,
        onSubmit: handleFormSubmit,
    }
}
