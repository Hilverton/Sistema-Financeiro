type Installments = {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
};

type DataTable = {
  nome: string;
  parcelas: number;
  valor: number;
};

type SelectedLineType = {
  name: string;
  id: number;
};

type TableProps = {
  name: string;
  installments: Installments[];
  selectedLine: SelectedLineType | undefined;
  setChange: Dispatch<SetStateAction<DataTable | undefined>>;
  setChangeLine: (name: string, id: number) => void;
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
  saveSelectedLine: (name: string, id: number) => void;
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
};

type UserContextProps = {
  clients: ClientType[];
  oneClient: ClientType;
  addClients: (newClient: ClientType) => void;
  findClient: (cpf: string) => void;
};
