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

  const saveCard = (
    name: string,
    cardNumber: string,
    validate: string,
    cvc: string,
  ) => {
    const updateClientInfo = oneClient;
    updateClientInfo.card.name = name;
    updateClientInfo.card.cardNumber = cardNumber;
    updateClientInfo.card.validate = validate;
    updateClientInfo.card.cvc = cvc;
    setOneClient(updateClientInfo);
  };

  return (
    <UserContext.Provider
      value={{
        clients,
        oneClient,
        addClients,
        findClient,
        saveCard,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
