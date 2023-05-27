import { Overview } from "@/components/Overview";
import { FinancesTable } from "@/components/FinancesTable";

export function DashBoard(){
  return(
    <main>
      <Overview />
      <FinancesTable />
    </main>
  )
}