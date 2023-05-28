"use client"
import { Header } from "@/components/Header";
import '../styles/global.scss'
import { DashBoard } from "@/components/Dashboard";
import { NewFinanceModal } from "@/components/NewFinanceModal";
import { TransactionsProvider } from "@/Hooks/useTransactions";
import { useState } from "react";


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
