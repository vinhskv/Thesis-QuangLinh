import {Button, Divider, Icon, List, ListItem} from '@ui-kitten/components';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {IJDAInput} from '.';
import {Modules} from '../../../../data_types/enums/Modules';
import {useAPI} from '../../../common_hooks/useAPI';
import useDebounce from '../../../common_hooks/useDebounce';
import {useTypedContext} from '../../../common_hooks/useTypedContext';
import {
  IJDARouterContext,
  JDARouterContext,
} from '../../../controllers/jda_router/JDARouterContext';
import {JDAButtonInput} from './JDAButtonInput';
import {JDAStringInput} from './JDAStringInput';

export interface IJDAObjectInputProps<T> extends IJDAInput<T> {
  apiResource: string;
  renderOption: (option?: T) => string;
  containerModuleName?: Modules;
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

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    //Try to update value if goBackData Change
    const value = router.getGoBackData<T>(props.moduleName);
    props.onChange?.(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.getGoBackData]);

  return (
    <>
      <JDAButtonInput
        disabled={props.disabled}
        onPress={() => ref.current?.open()}
        label={props.label}
        value={props.renderOption?.(props.value) ?? String(props.value)}
        accessoryRight={
          <>
            {props.value && (
              <View style={styles.row}>
                <Button
                  style={styles.button}
                  appearance={'ghost'}
                  status="basic"
                  accessoryRight={<Icon name="edit-2-outline" />}
                  onPress={() => {
                    if (props.value)
                      router.showEditForm(props.value, props.moduleName);
                  }}
                />
                <Button
                  style={styles.button}
                  appearance={'ghost'}
                  status="danger"
                  accessoryRight={<Icon name="flash-off-outline" />}
                  onPress={() => {
                    props.onChange?.(undefined);
                  }}
                />
              </View>
            )}
          </>
        }
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
    alignItems: 'center',
  },
  expanded: {
    flex: 1,
  },
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  createBtn: {
    marginVertical: 10,
    marginRight: 10,
  },
  button: {
    margin: 0,
    padding: 0,
    width: 10,
  },
});
