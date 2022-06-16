import { DrawerScreenProps } from '@react-navigation/drawer';
import { useCallback } from 'react';

interface ParamsList{

}

interface ScreenConfig{
    
}

function useNavigation(props: DrawerScreenProps<any>,screens:ScreenConfig) {
    const openCreateForm = useCallback(
        (type: string) => {
            props.navigation.navigate()
        },
        [],
    );
}

export default useNavigation;