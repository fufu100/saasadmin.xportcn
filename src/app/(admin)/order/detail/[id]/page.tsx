import { tableData } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import { OrderDetailView } from "@/components/sites/saasadmin-xportcn-com-d4f587c2/shared/OrderDetailView"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const row = tableData.orders.find((o) => o.id === id) ?? tableData.orders[0]
  return <OrderDetailView row={row} />
}
