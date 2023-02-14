import { apolloClient } from '../..';
import { useActiveAreaQuery } from '../../graphql/generated/graphql-schema';

const useActiveAreas = () => {
  const { data } = useActiveAreaQuery({
    client: apolloClient
  });

  return {
    data
  };
};

export default useActiveAreas;
