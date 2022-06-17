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
