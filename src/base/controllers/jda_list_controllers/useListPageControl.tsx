import {useCallback, useEffect, useState} from 'react';

export function useListPageControl(totalItems: number, initPageSize?: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initPageSize || 10);

  useEffect(() => {
    setPageSize(initPageSize || 10);
    setTotalPage(Math.ceil(totalItems / (initPageSize || 10)));
  }, [totalItems, initPageSize]);

  const nextPage = useCallback(() => {
    setCurrentPage(Math.min(totalPage, currentPage + 1));
  }, [totalPage, currentPage]);

  const backPage = useCallback(() => {
    setCurrentPage(Math.max(1, currentPage - 1));
  }, [currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1) {
        page = 1;
      }
      if (page > totalPage) {
        page = totalPage;
      }
      setCurrentPage(page);
    },
    [totalPage],
  );

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const gotoLastPage = useCallback(() => {
    setCurrentPage(totalPage);
  }, [totalPage]);

  const setItemPerPage = useCallback(
    (_itemPerPage: number) => {
      setPageSize(Math.max(totalPage, 1));
    },
    [totalPage],
  );

  return {
    currentPage,
    pageSize,
    totalPage,
    setItemPerPage,
    nextPage,
    backPage,
    goToPage,
    goToFirstPage,
    gotoLastPage,
  };
}
