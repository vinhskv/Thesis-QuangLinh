import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {
  IAPIError,
  IAPIGetListReturn,
  IAPIReturn as IAPIReturn,
} from './apiTypes';
const axiosConfigs: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  withCredentials: true,
};

function successWithData<T>(data: T): IAPIReturn<T> {
  return {
    success: true,
    payload: data,
    error: {
      code: 0,
      message: '',
    },
  };
}
function failWithError<T>(err: IAPIError): IAPIReturn<T> {
  return {
    success: false,
    payload: {} as T,
    error: err,
  };
}

export function useAPI<T, POST_T = T>(
  routeName: string,
  toPostObject?: (source: T) => POST_T,
) {
  const create = useCallback(
    async (data: T) => {
      const res = await axios.post<POST_T, AxiosResponse<T>>(
        `/${routeName}`,
        toPostObject ? toPostObject(data) : data,
        axiosConfigs,
      );
      return res.data;
    },
    [routeName, toPostObject],
  );
  const getById = useCallback(
    async (id: T[keyof T]): Promise<IAPIReturn<T>> => {
      try {
        const result = await axios.get<T, AxiosResponse<T>>(
          `/${routeName}/${id}`,
          axiosConfigs,
        );
        return successWithData(result.data);
      } catch (error) {
        return failWithError({
          code: 0,
        });
      }
    },
    [routeName],
  );
  const getByPage = useCallback(
    async (_pageNumber: number): Promise<IAPIReturn<IAPIGetListReturn<T>>> => {
      console.log(routeName);
      try {
        const res = await axios.get<T, AxiosResponse<IAPIGetListReturn<T>>>(
          `/${routeName}`,
          axiosConfigs,
        );
        console.log(res.data);
        return successWithData(res.data);
      } catch (error) {
        console.log(error);
        return failWithError({
          code: 100,
        });
      }
    },
    [routeName],
  );
  const updateById = useCallback(
    async (id: T[keyof T], data: Omit<T, 'id'>) => {
      const res = await axios.patch<T, AxiosResponse<T>>(
        `/${routeName}/${id}`,
        data,
        axiosConfigs,
      );
      return res.data;
    },
    [routeName],
  );
  const deleteById = useCallback(
    async (id: T[keyof T]) => {
      try {
        const res = await axios.delete<T, AxiosResponse<T>>(
          `/${routeName}/${id}`,
          axiosConfigs,
        );
        console.log(res.data);
        return successWithData('Deleted');
      } catch (error) {
        console.log(error);
        return failWithError({
          code: 100,
        });
      }
    },
    [routeName],
  );
  return {
    getById,
    getByPage,
    deleteById,
    updateById,
    create,
  };
}
