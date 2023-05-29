import { UseTransaction } from "@/Hooks/useTransactions";
import { CircleDollarSign, ArrowUpNarrowWide, ArrowDownNarrowWide } from "lucide-react";

export function Overview() {
  const { transactions } = UseTransaction();

  const overview = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })


  return (
    <div className="Overview__container">
      <div className="Overview__content">
        <header>
          <h3>Entradas</h3>
          <ArrowUpNarrowWide size={32} color="#57B22C" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(overview.deposit)}</strong>
      </div>
      <div className="Overview__content">
        <header>
          <h3>Saídas</h3>
          <ArrowDownNarrowWide size={32} color="#F02C2C" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(overview.withdraw)}</strong>
      </div>
      <div className="Overview__content background">
        <header>
          <h3>Total</h3>
          <CircleDollarSign size={32} color="#FFFFFF" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(overview.total)
        }</strong>
      </div>
    </div>
  )
}
