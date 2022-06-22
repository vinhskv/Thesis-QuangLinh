import * as React from 'react';
import { useAPI } from '../../jda_apis/useAPI';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAModuleConfig } from '../withModuleController';
import { JDAModuleView } from './useListHandler';
import { ActionType, useModuleStateReducer } from './useModuleStateReducer';

export function useFormHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>, moduleStateHandler: ReturnType<typeof useModuleStateReducer<T>>) {
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
        },
        [api],
    );

    return {
        initValue: formValue,
        mode: formMode,
        onCancel: handleFormCancel,
        onSubmit: handleFormSubmit,
    }
}
