import React from 'react';

import {
  useStampRewardsQuery,
  useStampRewardsLazyQuery,
  StampRewardsQueryVariables
} from '../../graphql/generated/graphql-schema';
import { apolloClient } from '../..';

export const useStampRewards = (variables: StampRewardsQueryVariables) => {
  const { loading, error, data } = useStampRewardsQuery({
    client: apolloClient,
    variables
  });

  return { data, loading, error };
};

export const useStampRewardsLazy = () => {
  const [query, { data }] = useStampRewardsLazyQuery({
    client: apolloClient
  });

  const _handleMutation = React.useCallback(
    (variables: StampRewardsQueryVariables) => query({ variables }),
    [query]
  );
  return {
    queryStampRewards: _handleMutation,
    dataStampRewards: data?.stamp_rewards
  };
};
