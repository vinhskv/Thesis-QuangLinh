import * as React from 'react';
import {AddressBasicList, AddressBasicListItem} from '.';

export default function AddressModule() {
  return (
    <AddressBasicList
      data={[
        {id: '1', name: 'Phu Tho'},
        {id: '1', name: 'Phu Tho'},
        {id: '1', name: 'Phu Tho'},
        {id: '1', name: 'Phu Tho'},
      ]}
      ItemView={AddressBasicListItem}
      itemViewProps={{
        icon: 'delete',
        title: item => `${item.name}`,
      }}
      onRefresh={() => {
        console.log('asdfasdf');
      }}
      onAddItem={() => {
        console.log('asdfasdf');
      }}
      onChangePage={() => {
        console.log('asdfasdf');
      }}
      onChangePageSize={() => {
        console.log('asdfasdf');
      }}
    />
  );
}
