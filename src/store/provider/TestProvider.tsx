import React from 'react';
import TestContext from '../context/TestContext';

type Props = {
  children: React.ReactElement;
};

const TestProvider: React.FC<Props> = ({ children }) => {
  const [test, setTest] = React.useState<any>(141);

  return <TestContext.Provider value={test}>{children}</TestContext.Provider>;
};

export default TestProvider;
