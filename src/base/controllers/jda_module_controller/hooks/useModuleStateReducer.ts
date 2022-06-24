import { useCallback, useReducer, useRef } from 'react';
import { IJDAFormRef, JDAFormMode } from '../../jda_form_controllers/withFormController';
import { IJDAListRef } from '../../jda_list_controllers/hocs/withJDAListController';
import { IJDAListMode as JDAListMode } from '../../jda_list_controllers/hocs/withListController';
import { JDAModuleView } from './useListHandler';

interface ModuleState<T> {
    view: JDAModuleView
    viewMode: JDAFormMode | JDAListMode // TODO List also have ListMode
}

export enum JDAModuleModes {
    CREATE_NEW_ITEM,
    EDIT_ITEM,
    SHOW_ITEM_DETAIL,
    SHOW_LIST_ITEM
}

type ModuleActionType<T> = {
    type: JDAModuleModes.CREATE_NEW_ITEM
    data: {
        goBackAfterCreated: boolean
        prevScreenState: any
    }
} | {
    type: JDAModuleModes.EDIT_ITEM
    data: {
        editItem: T
    }
} | {
    type: JDAModuleModes.SHOW_ITEM_DETAIL
    data: {
        viewItem: T
    }
} | {
    type: JDAModuleModes.SHOW_LIST_ITEM
}

/**
 * @param value value to edit/view
 * @param prevScreenKey The key of screen that call navigate() to this screen
 */
export interface IJDAModuleInput<T>{
    mode: JDAModuleModes
    value?:T,
    prevScreenKey?:string
}
/**
 * @param value Return edited/created instance of poped screen
 */
export interface IJDAModuleOutput<T>{
    value?:T
}

export function useModuleStateReducer<T>(listRef: ReturnType<typeof useRef<IJDAListRef<T>>>, formRef: ReturnType<typeof useRef<IJDAFormRef<T>>>) {
    // const router = useContext(JDARouterContext);
    // const mode =
    const reducer = useCallback((state: ModuleState<T>, action: ModuleActionType<T>) => {
        switch (action.type) {
            case JDAModuleModes.CREATE_NEW_ITEM:
                return {
                    ...state,
                    view: JDAModuleView.FORM,
                    viewMode: JDAFormMode.CREATE
                }
                case JDAModuleModes.EDIT_ITEM:
                    formRef.current?.setFormValue(action.data.editItem)
                return {
                    ...state,
                    view: JDAModuleView.FORM,
                    viewMode: JDAFormMode.EDIT,
                }
                case JDAModuleModes.SHOW_ITEM_DETAIL:
                    return {
                        ...state,
                        view: JDAModuleView.FORM,
                        activeValue: action.data.viewItem
                    }
                    case JDAModuleModes.SHOW_LIST_ITEM:
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
