import * as React from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {IJDAInput, IJDAMultiInput} from '.';

export interface IJDAMultiInputProps<T, P extends IJDAInput<T>>
  extends IJDAMultiInput<T> {
  SingleInputComponent: React.ComponentType<P>;
}

export function JDAMultiInput<T, P extends IJDAInput<T>>(
  props: IJDAMultiInputProps<T, P>,
) {
  return (
    <List.Section>
      <List.Accordion title={props.label}>
        <FlatList
          data={props.values}
          renderItem={({item, index}) => (
            <props.SingleInputComponent
              {...({} as any)}
              key={index}
              value={item}
            />
          )}
        />
      </List.Accordion>
    </List.Section>
  );
}
