import { FC } from 'react';
import { UseTransaction } from '@/Hooks/useTransactions';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const FinancesTable: FC = () => {
  const { transactions } = UseTransaction();

  return (
    <div className="FinancesTable__container">
      {transactions.length === 0 ? (
        <p>Não há transações. Por favor, adicione uma transação.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction: Transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
