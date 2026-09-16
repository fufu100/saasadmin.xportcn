"use client"

import Link from "next/link"
import type { CrudRow } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"

export function OrderDetailView({ row }: { row: CrudRow }) {
  return (
    <div className="xport-order-detail">
      <div className="xport-od-bar">
        <span>订单ID:{row.id}</span>
        <span>订单编号:{row.orderNo}</span>
        <span>下单时间:{row.createTime || row.orderTime.replace("下单: ", "")}</span>
        <span>付款方式:{row.payMethod || "余额"}</span>
        <span>订单状态:{row.orderStatus}</span>
      </div>
      <section className="xport-ud-card">
        <div className="xport-ud-title">买家信息</div>
        <p>姓名: {row.buyerName || row.userName}</p>
        <p>手机号码: {row.buyerPhone || ""}</p>
        <p>仓库信息: {row.warehouse}</p>
        <p>{row.address}</p>
      </section>
      <section className="xport-ud-card">
        <table className="xport-table">
          <thead>
            <tr>
              <th>商品</th>
              <th>价格</th>
              <th>数量</th>
              <th>小计</th>
              <th>订单状态</th>
              <th>备注</th>
              <th>物流信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="xport-od-goods">
                  {row.productImg ? <img src={row.productImg} alt="" /> : null}
                  <div>
                    <div>{row.goodsTitle}</div>
                    {row.sku ? <div className="xport-pay-sku">{row.sku}</div> : null}
                  </div>
                </div>
              </td>
              <td>{row.unitPrice}</td>
              <td>{row.qty}</td>
              <td>{row.subtotal}</td>
              <td>{row.goodsStatus}</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <div className="xport-od-fees">
          <p><span>商品总价:</span><b>{row.goodsAmount}</b></p>
          <p><span>中国段运费:</span><b>{row.cnFreight}</b></p>
          <p><span>服务费:</span><b>{row.serviceFee}</b></p>
          <p><span>应收金额:</span><b>{row.payable}</b></p>
        </div>
      </section>
      <p className="xport-od-user">
        客户ID：<Link href={`/user/detail?id=${row.userId}`} className="xport-link">{row.userId}</Link>
      </p>
    </div>
  )
}
