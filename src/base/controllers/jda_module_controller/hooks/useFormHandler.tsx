import * as React from 'react';
import { useRef } from 'react';
import { useAPI } from '../../jda_apis/useAPI';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { IJDAModuleConfig } from '../withModuleController';
import { ActionType, useModuleStateReducer } from './useModuleStateReducer';

export function useFormHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>, moduleStateHandler: ReturnType<typeof useModuleStateReducer<T>>, listRef: ReturnType<typeof useRef<IJDAListRef<T>>>) {
    const handleFormCancel = React.useCallback(() => {
        moduleStateHandler.changeModuleState({
            type: ActionType.SHOW_LIST_VIEW
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
                            type: ActionType.SHOW_LIST_VIEW
                        })
                        listRef.current?.itemsControl.updateItem(res.payload);
                    }
                    break;
                }
                case JDAFormMode.CREATE: {
                    console.log('here');
                    const res = await api.create(submitedItem);
                    console.log('Create result :', res);
                    moduleStateHandler.changeModuleState({
                        type: ActionType.SHOW_LIST_VIEW
                    })
                    listRef.current?.itemsControl.addItems([res]);
                    break;
                }
                case JDAFormMode.READ_ONLY:
                    moduleStateHandler.changeModuleState({
                        type: ActionType.SHOW_LIST_VIEW
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
