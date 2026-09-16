"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import type { PayOrder } from "@/data/mock/saasadmin-xportcn-com-d4f587c2/pay-orders"

const STATUS_TABS = ["待付款", "支付中", "支付失败"] as const
const CHANNELS_1688 = ["先采后付", "跨境宝", "网商银行跨境直采", "支付宝"] as const

export function PayOrderBoard({
  platform,
  logoSrc,
  orders,
  showChannels,
}: {
  platform: "1688" | "Taobao"
  logoSrc: string
  orders: PayOrder[]
  showChannels?: boolean
}) {
  const [status, setStatus] = useState<(typeof STATUS_TABS)[number]>("待付款")
  const [channel, setChannel] = useState<(typeof CHANNELS_1688)[number]>("先采后付")
  const [purchaseNo, setPurchaseNo] = useState("")
  const [userId, setUserId] = useState("")
  const [customerOrderNo, setCustomerOrderNo] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [applied, setApplied] = useState({ purchaseNo: "", userId: "", customerOrderNo: "", start: "", end: "" })
  const [checked, setChecked] = useState<string[]>([])
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [batchOpen, setBatchOpen] = useState(false)
  const [tip, setTip] = useState("")
  const [addrId, setAddrId] = useState<string | null>(null)
  const [copied, setCopied] = useState("")

  const channelCounts = useMemo(() => {
    const base = orders.filter((o) => o.statusTab === status)
    return Object.fromEntries(CHANNELS_1688.map((c) => [c, base.filter((o) => o.channel === c).length])) as Record<string, number>
  }, [orders, status])

  const list = useMemo(() => {
    return orders.filter((o) => {
      if (o.statusTab !== status) return false
      if (showChannels && o.channel !== channel) return false
      if (applied.purchaseNo) {
        const tokens = applied.purchaseNo.split(/[\s,，/\\n]+/).filter(Boolean)
        if (tokens.length && !tokens.some((t) => o.purchaseNo.includes(t))) return false
      }
      if (applied.userId && !o.userId.includes(applied.userId)) return false
      if (applied.customerOrderNo && !o.customerOrderNo.includes(applied.customerOrderNo)) return false
      if (applied.start && o.createdAt < applied.start) return false
      if (applied.end && o.createdAt > `${applied.end} 23:59:59`) return false
      return true
    })
  }, [orders, status, channel, showChannels, applied])

  function copy(text: string) {
    void navigator.clipboard?.writeText(text).catch(() => undefined)
    setCopied(text)
    setTimeout(() => setCopied(""), 1200)
  }

  function doPay(ids: string[]) {
    setConfirmId(null)
    setBatchOpen(false)
    setTip(ids.length > 1 ? "支付成功" : "支付成功")
    setTimeout(() => setTip(""), 1600)
  }

  return (
    <div className="xport-pay">
      <div className="xport-card-panel">
        <div className="xport-tabs-card">
          {STATUS_TABS.map((t) => (
            <button key={t} type="button" className={status === t ? "is-active" : ""} onClick={() => { setStatus(t); setChecked([]) }}>
              {t}
            </button>
          ))}
        </div>
        <form
          className="xport-search-grid"
          onSubmit={(e) => {
            e.preventDefault()
            setApplied({ purchaseNo, userId, customerOrderNo, start, end })
          }}
        >
          <div className="xport-field xport-field-lg">
            <label>采购订单号:</label>
            <textarea
              rows={3}
              placeholder="请输入，支持多个单号空格、斜杠、中英文逗号、换行隔开"
              value={purchaseNo}
              onChange={(e) => setPurchaseNo(e.target.value)}
            />
          </div>
          <div className="xport-field">
            <label>客户ID:</label>
            <input placeholder="请输入" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div className="xport-field">
            <label>客户订单号:</label>
            <input placeholder="请输入" value={customerOrderNo} onChange={(e) => setCustomerOrderNo(e.target.value)} />
          </div>
          <div className="xport-field">
            <label>下单时间:</label>
            <div className="xport-daterange">
              <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
              <span>:</span>
              <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>
          </div>
          <div className="xport-field xport-field-actions">
            <button type="submit" className="xport-btn xport-btn-primary">搜 索</button>
            <button
              type="button"
              className="xport-btn"
              onClick={() => {
                setPurchaseNo(""); setUserId(""); setCustomerOrderNo(""); setStart(""); setEnd("")
                setApplied({ purchaseNo: "", userId: "", customerOrderNo: "", start: "", end: "" })
              }}
            >
              清 空
            </button>
          </div>
        </form>
      </div>

      {showChannels && (
        <div className="xport-tabs-line">
          {CHANNELS_1688.map((c) => (
            <button key={c} type="button" className={channel === c ? "is-active" : ""} onClick={() => { setChannel(c); setChecked([]) }}>
              {c}({channelCounts[c] ?? 0})
            </button>
          ))}
        </div>
      )}

      <div className="xport-pay-toolbar">
        <label className="xport-check">
          <input
            type="checkbox"
            checked={list.length > 0 && checked.length === list.length}
            onChange={(e) => setChecked(e.target.checked ? list.map((o) => o.id) : [])}
          />
          全选
        </label>
        <button type="button" className="xport-btn xport-btn-primary" onClick={() => setBatchOpen(true)}>
          批量支付（最多勾选10条）
        </button>
      </div>

      {list.map((order) => (
        <article key={order.id} className="xport-pay-card">
          <header className="xport-pay-head">
            <label className="xport-check">
              <input
                type="checkbox"
                checked={checked.includes(order.id)}
                onChange={(e) => setChecked((prev) => (e.target.checked ? [...prev, order.id] : prev.filter((id) => id !== order.id)))}
              />
            </label>
            {platform === "Taobao" ? (
              <span className="xport-plat-badge">淘宝</span>
            ) : (
              <img src={logoSrc} alt={platform} className="xport-plat-logo" />
            )}
            <div className="xport-pay-meta">
              <div>
                采购订单号： {order.purchaseNo}{" "}
                <button type="button" className="xport-copy" onClick={() => copy(order.purchaseNo)} title="复制">⧉</button>
                <span className="xport-pay-sub">创建时间： {order.createdAt}</span>
              </div>
              <div>
                客户订单号：{order.customerOrderNo}{" "}
                <button type="button" className="xport-copy" onClick={() => copy(order.customerOrderNo)}>⧉</button>
                {" "}客户ID： <Link href={`/user/detail?id=${order.userId}`}>{order.userId}</Link>
              </div>
              <div>
                采购员：{order.purchaser}
                <span className="xport-pay-sub">仓库名称：{order.warehouse} </span>
                {order.address ? (
                  <span className="xport-addr-wrap">
                    <button type="button" className="xport-addr" onMouseEnter={() => setAddrId(order.id)} onMouseLeave={() => setAddrId(null)}>
                      详细地址
                    </button>
                    {addrId === order.id && <span className="xport-addr-tip">{order.address}</span>}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="xport-pay-action">
              {confirmId === order.id && (
                <div className="xport-popconfirm">
                  <div>确认支付订单吗</div>
                  <div className="xport-popconfirm-btns">
                    <button type="button" className="xport-btn" onClick={() => setConfirmId(null)}>取消</button>
                    <button type="button" className="xport-btn xport-btn-primary" onClick={() => doPay([order.id])}>确定</button>
                  </div>
                </div>
              )}
              <button type="button" className="xport-link" onClick={() => setConfirmId(order.id)}>支付</button>
            </div>
          </header>
          <div className="xport-pay-cols">
            <span>商品详情</span>
            <span>应付金额</span>
            <span>预估采购价</span>
            <span>订单状态</span>
          </div>
          {order.goods.map((g) => (
            <div key={g.subOrderNo} className="xport-pay-goods">
              <div className="xport-pay-goods-info">
                <img src={g.image} alt="" />
                <div>
                  <div className="xport-pay-title">{g.title}</div>
                  <div className="xport-pay-sku">{g.sku}</div>
                  <div className="xport-pay-sku">×{g.qty}</div>
                  <div>订单编号：{g.orderNo}</div>
                  <div>子订单编号：{g.subOrderNo}</div>
                </div>
              </div>
              <div>￥{g.payable}</div>
              <div>￥{g.estimate}</div>
              <div><span className="xport-status-tag">{g.status}</span></div>
            </div>
          ))}
          <footer className="xport-pay-foot">
            <span>货品金额总计：<b>￥{order.goodsAmount}</b></span>
            <span>中国段运费总计：<b>￥{order.cnFreight}</b></span>
            {order.discount ? <span>优惠：{order.discount}</span> : null}
            <span>订单总额：<b>￥{order.total}</b></span>
          </footer>
        </article>
      ))}

      <div className="xport-pager">
        <span>共 {list.length} 条</span>
        <span className="xport-pager-num">1</span>
        <select defaultValue="10条/页">
          {["10条/页", "20条/页", "30条/页", "40条/页", "50条/页", "100条/页"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      {batchOpen && (
        <div className="xport-dialog-root is-open">
          <button type="button" className="xport-dialog-mask" onClick={() => setBatchOpen(false)} aria-label="关闭" />
          <div className="xport-dialog" style={{ width: "420px" }}>
            <div className="xport-dialog-header">
              <span className="xport-dialog-title">提示</span>
              <button type="button" className="xport-dialog-x" onClick={() => setBatchOpen(false)}>×</button>
            </div>
            <div className="xport-dialog-body">
              {checked.length === 0 ? "请先勾选订单" : checked.length > 10 ? "最多勾选10条" : "确认支付所选订单吗？"}
            </div>
            <div className="xport-dialog-footer">
              <button type="button" className="xport-btn" onClick={() => setBatchOpen(false)}>取消</button>
              <button
                type="button"
                className="xport-btn xport-btn-primary"
                onClick={() => {
                  if (checked.length === 0 || checked.length > 10) { setBatchOpen(false); return }
                  doPay(checked)
                }}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}
      {copied ? <div className="xport-toast">已复制</div> : null}
      {tip ? <div className="xport-toast">{tip}</div> : null}
    </div>
  )
}
