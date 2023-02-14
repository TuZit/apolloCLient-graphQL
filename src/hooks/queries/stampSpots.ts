import React from 'react';

import {
  useStampSpotsQuery,
  useStampSpotsLazyQuery,
  StampSpotsQueryVariables
} from '../../graphql/generated/graphql-schema';
import { apolloClient } from '../..';

export const useStampSpots = (variables: StampSpotsQueryVariables) => {
  const { loading, error, data } = useStampSpotsQuery({
    client: apolloClient,
    variables
  });

  return { data, loading, error };
};

export const useStampSpotsLazy = () => {
  const [query, { data }] = useStampSpotsLazyQuery({
    client: apolloClient
  });

  const _handleMutation = React.useCallback(
    (variables: StampSpotsQueryVariables) => query({ variables }),
    [query]
  );
  return {
    queryStampSpots: _handleMutation,
    dataStampSpots: data?.stamp_spots
  };
};
