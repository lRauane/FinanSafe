import { ReactNode, createContext, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createdTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionContext = createContext < TransactionContextData > (
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState < Transaction[] > ([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createdTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions',
      {
        ...transactionInput,
        createdAt: new Date(),
      })
    const { transaction } = response.data;
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createdTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function UseTransaction() {
  const Context = useContext(TransactionContext);
  return Context;
}