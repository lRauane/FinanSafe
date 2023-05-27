import Image from "next/image";
import logoImg from '../../assets/LogofinanSafe.svg'

// TO-DO: onClick e props

export function Header(){
  return (
    <header className="container">
      <div className="container__content">
        <Image src={logoImg} alt="logo"/>
        <button type="button">Nova transação</button>
      </div>
    </header>
  )
}