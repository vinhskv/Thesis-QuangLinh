import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useAPI } from '../../../common_hooks/useAPI';
import { useTypedContext } from '../../../common_hooks/useTypedContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IJDAFormRef, JDAFormMode } from '../../jda_form_controllers/withFormController';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { IJDARouterContext, JDARouterContext } from '../../jda_router/JDARouterContext';
import { IJDAModuleConfig, JDAModuleMode } from '../withModuleController';

const FormModeMaping: Record<JDAModuleMode, JDAFormMode> = {
    [JDAModuleMode.CREATE_ITEM]: JDAFormMode.CREATE,
    [JDAModuleMode.VIEW_ITEM]: JDAFormMode.READ_ONLY,
    [JDAModuleMode.EDIT_ITEM]: JDAFormMode.EDIT,
    [JDAModuleMode.VIEW_LIST_ITEM]: JDAFormMode.CREATE,
};

export function useFormHandler<T, SubT>(moduleConfig: IJDAModuleConfig<T, SubT>,
    // eslint-disable-next-line prettier/prettier
    listRef: ReturnType<typeof useRef<IJDAListRef<T>>>,
    formRef: ReturnType<typeof useRef<IJDAFormRef<T>>>
) {
    const { ModuleParams, router } = useTypedContext<IJDARouterContext<T>>(JDARouterContext);
    const api = useAPI<T>(moduleConfig.apiResource);
    useEffect(() => {
      formRef.current?.setFormValue(ModuleParams?.moduleParams?.value);
    }, [ModuleParams?.moduleParams?.value, formRef]);

    const showListOrGoBack = useCallback(
        (item?: T) => {
            if (ModuleParams?.prevScreen) {
                router.goBack(item);
            } else {
                router.showList();
            }
        },
        [ModuleParams?.prevScreen, router],
    );
    const handleFormCancel = React.useCallback(() => {
        if (ModuleParams?.prevScreen) {
            router.goBack();
        } else {
            router.showList();
        }
    }, [ModuleParams?.prevScreen, router]);
    const handleFormSubmit = React.useCallback(
        async (submitedItem: T) => {
            switch (ModuleParams?.moduleParams.mode) {
                case JDAModuleMode.EDIT_ITEM: {
                    const res = await api.updateById(
                        submitedItem[moduleConfig.primaryKey],
                        submitedItem,
                    );
                    if (res.success) {
                        listRef.current?.itemsControl.updateItem(res.payload);
                        showListOrGoBack(res.payload);
                    }
                    break;
                }
                case JDAModuleMode.CREATE_ITEM: {
                    console.log("CREATE:",submitedItem);
                    const res = await api.create(submitedItem);
                    listRef.current?.itemsControl.addItems([res]);
                    showListOrGoBack(res);
                    break;
                }
                case JDAModuleMode.VIEW_ITEM:
                    showListOrGoBack();
                    break;
            }
        },
        [ModuleParams?.moduleParams.mode, api, listRef, moduleConfig.primaryKey, showListOrGoBack],
    );

    return {
        mode: FormModeMaping[ModuleParams?.moduleParams?.mode || JDAModuleMode.VIEW_LIST_ITEM],
        onCancel: handleFormCancel,
        onSubmit: handleFormSubmit,
    };
}
