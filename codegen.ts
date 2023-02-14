import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config();

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_URL,
  documents: './src/graphql/**/*.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/graphql-schema.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
        scalars: {
          DateTime: 'string',
          ISO8601DateTime: 'string'
        }
      },
      hooks: {
        afterOneFileWrite: ['npx eslint --fix']
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
