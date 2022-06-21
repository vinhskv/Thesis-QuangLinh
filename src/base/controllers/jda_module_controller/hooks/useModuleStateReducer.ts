import * as React from 'react';
import { useReducer } from 'react';
import { JDAFormMode } from '../../jda_form_controllers/withFormController';
import { JDAModuleView } from './useListHandler';

interface ModuleState<T> {
    view: JDAModuleView
    viewMode: JDAFormMode // TODO List also have ListMode
    activeValue?: T
}

const reducer = (state:ModuleState<T>,action)={}

export function useModuleStateReducer<T>() {

    const [moduleState, dispatch] = useReducer(reducer, initialArg, init);

    const [currentView, setCurrentView] = React.useState<JDAModuleView>(
        JDAModuleView.LIST,
    );
    const [formMode, setFormMode] = React.useState<JDAFormMode>(JDAFormMode.CREATE);
    const [formValue, setFormValue] = React.useState<T | undefined>()
}
