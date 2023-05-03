import { UseQueryOptions, useQuery } from 'vue-query';
import { supervisorApi } from '..';
import SupervisorApiType from '../SupervisorApiType';

type TQueryFnData = Awaited<ReturnType<SupervisorApiType['getProposalsTime']>>;

export type UseGetProposalsTimeQueryOptions<T = TQueryFnData> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_GET_PROPOSALS_TIME_QUERY_KEY
>;

export const USE_GET_PROPOSALS_TIME_QUERY_KEY =
  'USE_GET_PROPOSALS_TIME_QUERY_KEY';

export const useGetProposalsTimeQuery = <T = TQueryFnData>(
  options?: UseGetProposalsTimeQueryOptions<T>,
) =>
  useQuery(
    USE_GET_PROPOSALS_TIME_QUERY_KEY,
    () => supervisorApi.getProposalsTime(),
    {
      staleTime: Infinity,
      ...options,
    },
  );
