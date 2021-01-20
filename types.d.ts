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
  setChangeLine: Dispatch<SetStateAction<SelectedLineType | undefined>>;
};
