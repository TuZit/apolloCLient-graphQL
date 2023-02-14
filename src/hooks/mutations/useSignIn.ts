import React from 'react';
import {
  AdminSignInMutationVariables,
  useAdminSignInMutation
} from '../../graphql/generated/graphql-schema';
import { apolloClient } from '../..';

const useSignIn = () => {
  const [mutate, { loading, data, error }] = useAdminSignInMutation({
    client: apolloClient
  });

  const _handleMutation = React.useCallback(
    (variables: AdminSignInMutationVariables) => mutate({ variables }),
    [mutate]
  );

  const isLoaded = React.useMemo(() => !loading && !error, [loading, error]);

  return {
    loginMutate: _handleMutation,
    loginResult: { loading, isLoaded, data, error }
  };
};

export default useSignIn;
