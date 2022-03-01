import {useCallback, useState} from 'react';

export function useListCheckControl<T>(keyField: string | keyof T, items: T[]) {
  const [checkedItems, setCheckedItems] = useState<T[]>([]);
  const check = useCallback(
    (id: string | number) => {
      const item = items.find(
        x => String(x[keyField as keyof T]) === String(id),
      );
      if (item) {
        setCheckedItems(oldArr => {
          const newArr = [...oldArr, item];
          return newArr;
        });
      }
    },
    [items, keyField],
  );
  const checkAll = useCallback(() => {
    setCheckedItems([...items]);
  }, [items]);
  const unCheck = useCallback(
    (id: string | number) => {
      setCheckedItems(oldArr => {
        const newArr = [...oldArr].filter(
          x => String(x[keyField as keyof T]) === String(id),
        );
        return newArr;
      });
    },
    [keyField],
  );
  const unCheckAll = useCallback(() => {
    setCheckedItems([]);
  }, []);
  return {
    checkedItems,
    check,
    checkAll,
    unCheck,
    unCheckAll,
  };
}