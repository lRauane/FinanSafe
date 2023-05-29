"use client"
import { Header } from "@/components/Header";
import '../styles/global.scss'
import { DashBoard } from "@/components/Dashboard";
import { NewFinanceModal } from "@/components/NewFinanceModal";
import { TransactionsProvider } from "@/Hooks/useTransactions";
import { useState } from "react";
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'dev',
          amount: 1500,
          createdAt: new Date('2023-05-24')
        },
        {
          id: 2,
          title: 'Freelancer',
          type: 'deposit',
          category: 'dev',
          amount: 1500,
          createdAt: new Date('2023-05-24')
        },
      ],
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})


export default function Home() {
  const [isModalOpenNewTransition, setIsModalOpenNewTransition] = useState(false);

  function handleOpenNewTransictonModal() {
    setIsModalOpenNewTransition(true)
  }

  function handleCloseNewTransictonModal() {
    setIsModalOpenNewTransition(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransictonModal} />
      <DashBoard />

      <NewFinanceModal OnRequestClose={handleCloseNewTransictonModal} isModalOpen={isModalOpenNewTransition} />
    </TransactionsProvider>
  )
}
