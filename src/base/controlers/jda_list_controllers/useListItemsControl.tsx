import React, {useCallback, useEffect, useState} from 'react';
import {useAPI} from '../jda_apis/useAPI';

class Wrapper<T> {
  wrapped(
    routeName: string,
    page: number,
    pageSize: number,
    setTotalItem: React.Dispatch<React.SetStateAction<number>>,
  ) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useListItemsControl<T>(routeName, page, pageSize, setTotalItem);
  }
}
export type UseListItemControlType<T> = ReturnType<Wrapper<T>['wrapped']>;

export function useListItemsControl<T>(
  routeName: string,
  page: number,
  pageSize: number,
  setTotalItem: React.Dispatch<React.SetStateAction<number>>,
) {
  const api = useAPI<T>(routeName);
  const [items, setItems] = useState<T[]>([]);
  const [firstRender, setFirstRender] = useState(true);
  const refreshList = useCallback(async () => {
    //TODO api does not support pageSize
    const result = await api.getByPage(page);
    console.log(result);
    if (result.success) {
      setItems(_old => {
        return result.payload.content;
      });
      //TODO api in spring provide totalPage instead of totalItems, need to fix
      setTotalItem(result.payload.pageCount * pageSize); // isn't correct
    }
  }, [api, page, pageSize, setTotalItem]);

  useEffect(() => {
    if (firstRender) {
      refreshList();
      setFirstRender(false);
    }
  }, [refreshList, firstRender]);

  return {items, refreshList};
}
