import {useCallback, useEffect, useState} from 'react';

export function useListPageControl(totalItems: number, itemPerPage?: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(itemPerPage || 10);

  useEffect(() => {
    setPageSize(itemPerPage || 10);
    setTotalPage(Math.ceil(totalItems / (itemPerPage || 10)));
  }, [totalItems, itemPerPage]);

  const nextPage = useCallback(() => {
    setCurrentPage(Math.min(totalPage, currentPage + 1));
  }, [totalPage, currentPage]);

  const backPage = useCallback(() => {
    setCurrentPage(Math.max(1, currentPage - 1));
  }, [totalPage, currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1) page = 1;
      if (page > totalPage) page = totalPage;
      setCurrentPage(page);
    },
    [totalPage, currentPage],
  );

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, [totalPage, currentPage]);

  const gotoLastPage = useCallback(() => {
    setCurrentPage(totalPage);
  }, [totalPage, currentPage]);

  const setItemPerPage = useCallback(
    (itemPerPage: number) => {
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
