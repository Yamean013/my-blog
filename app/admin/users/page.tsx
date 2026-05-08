import { columns, Payment } from "./columns"; // ← Payment stays here
import { payments } from "./data"; // ← only the data array
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return payments;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
