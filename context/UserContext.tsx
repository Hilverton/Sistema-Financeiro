import { useState, createContext } from 'react';

import api from '../api.json';

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserProvider: React.FC = ({ children }) => {
  const [clients, setClients] = useState(api.client);
  const [oneClient, setOneClient] = useState<ClientType>({} as ClientType);

  const addClients = (newClient: ClientType) => {
    setClients([...clients, newClient]);
  };

  const findClient = (cpf: string) => {
    const client = clients.filter((clientItem) => clientItem.cpf.includes(cpf));

    setOneClient(client[0]);
  };

  return (
    <UserContext.Provider
      value={{
        clients,
        oneClient,
        addClients,
        findClient,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
