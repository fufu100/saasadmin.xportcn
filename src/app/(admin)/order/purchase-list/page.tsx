import { PurchaseOrderBoard } from "@/components/sites/saasadmin-xportcn-com-d4f587c2/order-purchase-list-a1/PurchaseOrderBoard"
import { purchaseOrders } from "@/data/mock/saasadmin-xportcn-com-d4f587c2/purchase-orders"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ purchaseId?: string }>
}) {
  const query = await searchParams
  return <PurchaseOrderBoard orders={purchaseOrders} initialPurchaseId={query.purchaseId ?? ""} />
}
