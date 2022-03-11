import {Button, Divider, Icon, List, ListItem} from '@ui-kitten/components';
import * as React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

export interface IJDASelectProps<T> {
  label: string;
  values: T[];
  labelRender: (v: T) => string;
  value: T;
  onChange: (v: T) => void;
}

export function JDASelect<T>(props: IJDASelectProps<T>) {
  const ref = React.useRef<RBSheet>();
  return (
    <>
      {/* <View style={styles.container}> */}
      {/* <Select
          value={props.labelRender(props.value)}
          onPress={() => {
            console.log('Tapped');
            ref.current?.open();
          }}
          label={props.label}
        /> */}
      <Button onPress={() => ref.current?.open()}>
        {`Type: ${props.labelRender(props.value)}`}
      </Button>
      <RBSheet
        ref={ref as any}
        // height={300}
        openDuration={250}>
        <List
          data={props.values}
          ItemSeparatorComponent={Divider}
          renderItem={({item}) => (
            <ListItem
              onPress={() => {
                props.onChange(item);
                ref.current?.close();
              }}
              accessoryLeft={p => <Icon {...p} name="droplet-outline" />}
              title={props.labelRender(item)}
            />
          )}
        />
      </RBSheet>
      {/* </View> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });
