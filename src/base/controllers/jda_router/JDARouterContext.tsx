import React from "react";
import { useRouter } from "./useRouter";

interface IJDARouterContext extends ReturnType<typeof useRouter> { }

const defaultContextValue: IJDARouterContext = {
    JDARouter: {
        goHome: () => { },
        goToModule: (_v) => { },
        openModuleCreateForm: (r) => undefined,
        openModuleEditForm: (r, i) => undefined,
        openModuleViewForm: (r, i) => { },
        goBack: () => { }
    }
}

export const JDARouterContext = React.createContext<IJDARouterContext>(defaultContextValue)