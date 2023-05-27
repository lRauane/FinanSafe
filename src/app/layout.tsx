import '../styles/global.scss'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo'})

export const metadata = {
  title: 'FinanSafe',
  description: 'Aplicativo de finanças pessoais, com controle de saída e chegada de dinheiro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
