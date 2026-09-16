import { PayOrderBoard } from "@/components/sites/saasadmin-xportcn-com-d4f587c2/finance-order-pay-ef439e68/PayOrderBoard"
import { pay1688Orders } from "@/data/mock/saasadmin-xportcn-com-d4f587c2/pay-orders"

export default function Page() {
  return (
    <PayOrderBoard
      platform="1688"
      logoSrc="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/1688.png"
      orders={pay1688Orders}
      showChannels
    />
  )
}
