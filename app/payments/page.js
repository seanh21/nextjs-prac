import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import getUsers from '../data';

export default async function DemoPage() {
  const data = await getUsers();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
