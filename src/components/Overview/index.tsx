import { CircleDollarSign, ArrowUpNarrowWide, ArrowDownNarrowWide } from "lucide-react";

export function Overview() {
  return (
    <div className="Overview__container">
      <div className="Overview__content">
        <header>
          <h3>Entradas</h3>
          <ArrowUpNarrowWide size={32} color="#57B22C" />
        </header>
        <strong>R$ 1200</strong>
      </div>
      <div className="Overview__content">
        <header>
          <h3>Saídas</h3>
          <ArrowDownNarrowWide size={32} color="#F02C2C" />
        </header>
        <strong>-R$ 500</strong>
      </div>
      <div className="Overview__content background">
        <header>
          <h3>Total</h3>
          <CircleDollarSign size={32} color="#FFFFFF" />
        </header>
        <strong>R$ 900</strong>
      </div>
    </div>
  )
}

// TODO: Formatação de números: INTl
// TODO: usar um reduce para calcular o que entra e sai. Além de criar um hook de context

// npm install lucide-react
// circle-dollar-sign
// arrow-up-narrow-wide
// arrow-down-narrow-wide