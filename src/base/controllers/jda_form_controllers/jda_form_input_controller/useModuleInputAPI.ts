import * as React from 'react';
import {useAPI} from '../../jda_apis/useAPI';

export function useModuleInputAPI<T>(apiResource: string) {
  const api = useAPI<T>(apiResource);
  const [options, setOptions] = React.useState<T[]>([]);

  const search = React.useCallback(async () => {
    console.log('Init search for ', apiResource);

    const res = await api.getByPage(0);
    if (res.success && res.payload.content) {
      setOptions(res.payload.content);
    } else setOptions([]);
  }, [api, apiResource]);

  React.useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {options, search};
}
