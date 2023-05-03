import { UseQueryOptions, useQuery } from 'vue-query';
import InstituteDirectorApiType from '../InstituteDirectorApiType';
import { instituteDirectorApi } from '..';

type TQueryFnData = Awaited<
  ReturnType<InstituteDirectorApiType['getInstituteProjectProposals']>
>;

export type UseGetInstituteProjectProposalsQueryOptions<T = TQueryFnData> =
  UseQueryOptions<
    TQueryFnData,
    unknown,
    T,
    typeof USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY
  >;

export const USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY =
  'USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY';

export const useGetInstituteProjectProposalsQuery = <T = TQueryFnData>(
  options?: UseGetInstituteProjectProposalsQueryOptions<T>,
) =>
  useQuery(
    USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY,
    () => instituteDirectorApi.getInstituteProjectProposals(),
    {
      staleTime: Infinity,
      ...options,
    },
  );
