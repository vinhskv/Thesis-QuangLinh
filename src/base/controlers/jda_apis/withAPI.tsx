import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ComponentType, useCallback} from 'react';

export interface IJDAAPIProps<T> {
  create: (data: Omit<T, 'id'>) => Promise<AxiosResponse<T, any>>;
  getById: (id: T[keyof T]) => Promise<T>;
  getByPage: (pageNumber: number) => Promise<T[]>;
  updateById: (id: string | number, data: Omit<T, 'id'>) => Promise<T>;
  deleteById: (id: string | number) => Promise<T>;
}

const axiosConfigs: AxiosRequestConfig = {
  baseURL: 'http://localhost:5000',
  withCredentials: true,
};
/**
 *
 * @param routeName
 * @param Component
 * @returns
 */
export function withAPI<T, P extends IJDAAPIProps<T>>(
  routeName: string,
  Component: ComponentType<P>,
) {
  const create = useCallback(async (data: Omit<T, 'id'>) => {
    const res = await axios.post<T, AxiosResponse<T>>(
      `/${routeName}`,
      data,
      axiosConfigs,
    );
    return res.data;
  }, []);
  const getById = useCallback(async (id: string | number) => {
    const res = await axios.get<T, AxiosResponse<T>>(
      `/${routeName}/${id}`,
      axiosConfigs,
    );
    return res.data;
  }, []);
  const getByPage = useCallback(async (pageNumber: number) => {
    const res = await axios.get<T, AxiosResponse<T[]>>(
      `/${routeName}/?pageNumber=${pageNumber}`,
      axiosConfigs,
    );
    return res.data;
  }, []);
  const updateById = useCallback(
    async (id: string | number, data: Omit<T, 'id'>) => {
      const res = await axios.patch<T, AxiosResponse<T>>(
        `/${routeName}/${id}`,
        data,
        axiosConfigs,
      );
      return res.data;
    },
    [],
  );
  const deleteById = useCallback(async (id: string | number) => {
    const res = await axios.delete<T, AxiosResponse<T>>(
      `/${routeName}/${id}`,
      axiosConfigs,
    );
    return res.data;
  }, []);
  return (props: Omit<P, keyof IJDAAPIProps<T>>) => {
    return (
      <Component
        {...(props as P)}
        create={create}
        getById={getById}
        getByPage={getByPage}
        updateById={updateById}
        deleteById={deleteById}
      />
    );
  };
}
