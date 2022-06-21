import * as React from 'react';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAModuleConfig } from '../withModuleController';
import { JDAModuleView } from './useListHandler';

export function useFormHandler<T,SubT>(moduleConfig: IJDAModuleConfig<T, SubT>) {
    const [formMode, setFormMode] = React.useState<JDAFormMode>(JDAFormMode.CREATE);
    const [formValue, setFormValue] = React.useState<T | undefined>();
    const handleFormCancel = React.useCallback(() => {
        setCurrentView(JDAModuleView.LIST);
    }, []);

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

    return {
        initValue: formValue,
        mode: formMode,
        onCancel: handleFormCancel,
        onSubmit: handleFormSubmit,
    }
}
