<<<<<<< HEAD
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useCallback} from 'react';

function useNavigation(props: DrawerScreenProps<any>) {
  const openCreateForm = useCallback(
    (_type: string) => {
      props.navigation.navigate('home', {any: 1});
    },
    [props.navigation],
  );
  return {
    openCreateForm,
  };
}

export default useNavigation;
=======
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useCallback } from 'react';

interface ParamsList {

}

interface ScreenConfig {

}

function useNavigation(props: DrawerScreenProps<any>, screens: ScreenConfig) {
    const openCreateForm = useCallback(
        (domain: string) => {
            props.navigation.navigate(domain, {
                type: 'create'
            })
        },
        [],
    );
}

export default useNavigation;
>>>>>>> 69e6f8cb2ca34dbb86fc1cd2d167482142b389bc
