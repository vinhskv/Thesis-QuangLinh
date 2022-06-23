import { useCallback, useReducer, useRef } from 'react';
import { IJDAFormRef, JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { IJDAListMode as JDAListMode } from '../../jda_list_controllers/hocs/withListController';
import { JDAModuleView } from './useListHandler';

interface ModuleState<T> {
    view: JDAModuleView
    viewMode: JDAFormMode | JDAListMode // TODO List also have ListMode
    activeValue?: T
}

export enum ActionType {
    SHOW_CREATE_FORM,
    SHOW_EDIT_FORM,
    SHOW_READ_ONLY_FORM,
    SHOW_LIST_VIEW
}

type ModuleActionType<T> = {
    type: ActionType.SHOW_CREATE_FORM
    data: {
        goBackAfterCreated: boolean
        prevScreenState: any
    }
} | {
    type: ActionType.SHOW_EDIT_FORM
    data: {
        editItem: T
    }
} | {
    type: ActionType.SHOW_READ_ONLY_FORM
    data: {
        viewItem: T
    }
} | {
    type: ActionType.SHOW_LIST_VIEW
}



export function useModuleStateReducer<T>(listRef: ReturnType<typeof useRef<IJDAListRef<T>>>, formRef: ReturnType<typeof useRef<IJDAFormRef<T>>>) {

    const reducer = useCallback((state: ModuleState<T>, action: ModuleActionType<T>) => {
        switch (action.type) {
            case ActionType.SHOW_CREATE_FORM:
                return {
                    ...state,
                    view: JDAModuleView.FORM,
                    viewMode: JDAFormMode.CREATE
                }
            case ActionType.SHOW_EDIT_FORM:
                formRef.current?.setFormValue(action.data.editItem)
                return {
                    ...state,
                    view: JDAModuleView.FORM,
                    viewMode: JDAFormMode.EDIT,
                }
            case ActionType.SHOW_READ_ONLY_FORM:
                return {
                    ...state,
                    view: JDAModuleView.FORM,
                    activeValue: action.data.viewItem
                }
            case ActionType.SHOW_LIST_VIEW:
                return {
                    view: JDAModuleView.LIST,
                    viewMode: JDAListMode.VIEW
                }
            default:
                return { ...state }
        }
    }, [listRef, formRef]);

    const [moduleState, changeModuleState] = useReducer(reducer, {
        view: JDAModuleView.LIST,
        viewMode: JDAListMode.VIEW
    });

    return {
        moduleState,
        changeModuleState
    }
}
