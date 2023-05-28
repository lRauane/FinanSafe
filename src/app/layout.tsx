import '../styles/global.scss'
import { Archivo } from 'next/font/google'
import { createServer, Model } from 'miragejs';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })

export const metadata = {
  title: 'FinanSafe',
  description: 'Aplicativo de finanças pessoais, com controle de saída e chegada de dinheiro.',
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  )
}
