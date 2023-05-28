import Image from "next/image";
import logoImg from '../../assets/LogofinanSafe.svg'

interface HandleProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HandleProps) {
  return (
    <header className="container">
      <div className="container__content">
        <Image src={logoImg} alt="logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </div>
    </header>
  )
}