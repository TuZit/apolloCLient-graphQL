import React from 'react';

import { useCitiesLazyQuery, CitiesQueryVariables } from '../../graphql/generated/graphql-schema';
import { apolloClient } from '../..';

const useCities = () => {
  const [query, { data }] = useCitiesLazyQuery({
    client: apolloClient
  });

  const _handleMutation = React.useCallback(
    (variables: CitiesQueryVariables) => query({ variables }),
    [query]
  );
  return {
    queryCities: _handleMutation,
    dataCities: { data }
  };
};

export default useCities;
