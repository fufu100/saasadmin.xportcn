import { PayOrderBoard } from "@/components/sites/saasadmin-xportcn-com-d4f587c2/finance-order-pay-ef439e68/PayOrderBoard"
import { payTaobaoOrders } from "@/data/mock/saasadmin-xportcn-com-d4f587c2/pay-orders"

export default function Page() {
  return (
    <PayOrderBoard
      platform="Taobao"
      logoSrc="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/1688.png"
      orders={payTaobaoOrders}
    />
  )
}
