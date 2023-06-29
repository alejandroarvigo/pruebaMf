import { NameContextProvider } from 'shared-context_shared-library';
import React from 'react';

const Welcome: React.FC = () => {
  const name = React.useContext(NameContextProvider);

  return <p>Welcome, {name}</p>;
};

export default Welcome;