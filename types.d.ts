type Installments = {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
};

type SelectedLineType = {
  name: string;
  item: Installments;
};

type TableProps = {
  name: string;
  installments: Installments[];
  selectedLine: SelectedLineType | undefined;
  setChangeLine: (name: string, item: Installments) => void;
};

type RateTable = {
  id: number;
  name: string;
  installments: Installments[];
};

type PropsContext = {
  rateTable: RateTable[];
  selectedLine: SelectedLineType;
  loanAmount: number;
  saveLoanAmount: (value: number) => void;
  makeTable: () => void;
  saveSelectedLine: (name: string, item: Installments) => void;
};

type ClientType = {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
  card: {
    name: string;
    cardNumber: string;
    validate: string;
    cvc: string;
    frontCard: string;
    verseCard: string;
    selfieCard: string;
  };
};

type UserContextProps = {
  clients: ClientType[];
  oneClient: ClientType;
  addClients: (newClient: ClientType) => void;
  findClient: (cpf: string) => void;
  saveCard: (
    name: string,
    cardNumber: string,
    validate: string,
    cvc: string,
  ) => void;
};
