import { DrawerScreenProps } from '@react-navigation/drawer';
import { useCallback } from 'react';

interface ParamsList {

}

interface ScreenConfig {

}

function useModuleRouter() {
    const openCreateForm = useCallback(
        (domain: string) => {
            props.navigation.navigate(domain, {
                type: 'create'
            })
        },
        [],
    );
}

export default useModuleRouter;