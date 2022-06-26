import {Button, Divider, Icon, List, ListItem} from '@ui-kitten/components';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {IJDAInput} from '.';
import {Modules} from '../../../../data_types/enums/Modules';
import useDebounce from '../../../common_hooks/useDebounce';
import {useTypedContext} from '../../../common_hooks/useTypedContext';
import {useAPI} from '../../../common_hooks/useAPI';
import {
  IJDARouterContext,
  JDARouterContext,
} from '../../../controllers/jda_router/JDARouterContext';
import {JDAButtonInput} from './JDAButtonInput';
import {JDAStringInput} from './JDAStringInput';

export interface IJDAObjectInputProps<T> extends IJDAInput<T> {
  apiResource: string;
  renderOption: (option?: T) => string;
  moduleName: Modules;
}

export function JDAObjectInput<T>(props: IJDAObjectInputProps<T>) {
  const ref = React.useRef<RBSheet>();
  const api = useAPI<T>(props.apiResource);
  const [options, setOptions] = React.useState<T[]>([]);
  const [keyword, setKeyword] = React.useState<string | undefined>('');
  const searchValue = useDebounce<string | undefined>(keyword, 500);
  const search = React.useCallback(async () => {
    const address = await api.getByPage(0);
    if (address.success && address.payload.content) {
      setOptions(address.payload.content);
    }
  }, [api]);
  // const [waitForReturnData, setWaitForReturnData] = useState(false);
  const {router} = useTypedContext<IJDARouterContext<T>>(JDARouterContext);
  // useEffect(() => {
  //   if (waitForReturnData) {
  //     const returnValue = router.getGoBackData<T>(props.moduleName);
  //     if (returnValue) {
  //       console.log(returnValue);
  //       props.onChange?.(returnValue);
  //       setWaitForReturnData(false);
  //     }
  //   }
  // }, [props, router, waitForReturnData]);
  // console.log('++++++++', router.getGoBackData<T>(props.moduleName));

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <>
      <JDAButtonInput
        disabled={props.disabled}
        onPress={() => ref.current?.open()}
        label={props.label}
        value={props.renderOption?.(props.value) ?? String(props.value)}
      />
      <RBSheet
        ref={ref as any}
        // height={300}
        openDuration={250}>
        <View style={styles.bottomSheetContainer}>
          <JDAStringInput
            value={keyword}
            onChange={setKeyword}
            InputProps={{
              accessoryLeft: p => <Icon {...p} name="search" />,
              placeholder: `Search for ${props.apiResource}`,
              style: {margin: 10, flex: 1},
            }}
          />
          <Button
            style={styles.createBtn}
            accessoryLeft={p => <Icon {...p} name="plus" />}
            size="tiny"
            onPress={() => {
              console.log('Open screen: ', props.moduleName);
              router.showCreateForm(props.moduleName);
              router.onFocus(() => {
                console.log('goback here');
                const value = router.getGoBackData<T>(props.moduleName);
                console.log(value);
                props.onChange?.(value);
              });
              // setWaitForReturnData(true);
            }}>
            Create
          </Button>
        </View>
        <List
          data={options}
          indicatorStyle="black"
          ItemSeparatorComponent={p => <Divider {...p} />}
          renderItem={({item}) => (
            <ListItem
              onPress={() => {
                props.onChange?.(item);
                ref.current?.close();
              }}
              title={props.renderOption(item)}
            />
          )}
        />
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  createBtn: {
    marginVertical: 10,
    marginRight: 10,
  },
});
