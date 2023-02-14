import React from 'react';

import {
  useCitiesQuery,
  useCitiesLazyQuery,
  CitiesQueryVariables
} from '../../graphql/generated/graphql-schema';
import { apolloClient } from '../..';

export const useCitiesById = () => {
  const { data } = useCitiesQuery({
    client: apolloClient
  });

  return {
    data
  };
};

// export default useCitiesById;

export const useCitiesByIdLazy = () => {
  const [query, { data }] = useCitiesLazyQuery({
    client: apolloClient
  });

  const _handleMutation = React.useCallback(
    (variables: CitiesQueryVariables) => query({ variables }),
    [query]
  );
  return {
    queryCities: _handleMutation,
    dataCities: data?.cities
  };
};

// export default useCitiesByIdLazy;
