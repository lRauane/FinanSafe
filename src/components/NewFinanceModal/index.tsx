import { ArrowUpNarrowWide, ArrowDownNarrowWide, X } from "lucide-react";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { UseTransaction } from "@/Hooks/useTransactions";
import classnames from "classnames";

interface NewModalProps {
  isModalOpen: boolean;
  OnRequestClose: () => void;
}

export function NewFinanceModal({
  isModalOpen,
  OnRequestClose,
}: NewModalProps) {
  const { createdTransaction } = UseTransaction();
  const [type, setType] = useState("deposit");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  async function handleCreatedNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createdTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    OnRequestClose();
  }

  return (
    <Dialog open={isModalOpen}>
      <DialogOverlay className="react-modal-overlay" />
      <DialogContent className="react-modal-content">
        <button
          type="button"
          onClick={OnRequestClose}
          className="react-modal-close">
          <X size={32} color="#ffffff" />
        </button>
        <form onSubmit={handleCreatedNewTransaction}>
          <h2>Cadastrar Transação</h2>
          <input
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <div className={`transaction-type-container`}>
            <button
              type="button"
              className={`radio-box ${type === "deposit" ? "active" : ""}`}
              onClick={() => setType("deposit")}>
              <ArrowUpNarrowWide size={32} color="green" />
              <span>Entrada</span>
            </button>
            <button
              type="button"
              className={`radio-box ${type === "withdraw" ? "active" : ""}`}
              onClick={() => setType("withdraw")}>
              <ArrowDownNarrowWide size={32} color="red" />
              <span>Saída</span>
            </button>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
