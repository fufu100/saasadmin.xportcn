"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import type { PurchaseOrder } from "@/data/mock/saasadmin-xportcn-com-d4f587c2/purchase-orders"

const STATUS_TABS = ["全部", "待提交支付", "待财务支付", "待发货", "已发货", "已取消", "已入库", "支付中", "支付失败", "同步失败订单"] as const

export function PurchaseOrderBoard({ orders, initialPurchaseId = "" }: { orders: PurchaseOrder[]; initialPurchaseId?: string }) {
  const [status, setStatus] = useState<(typeof STATUS_TABS)[number]>("全部")
  const [purchaseId, setPurchaseId] = useState(initialPurchaseId)
  const [userId, setUserId] = useState("")
  const [customerOrderNo, setCustomerOrderNo] = useState("")
  const [customerCode, setCustomerCode] = useState("")
  const [rechargeNo, setRechargeNo] = useState("")
  const [platform, setPlatform] = useState("")
  const [createStart, setCreateStart] = useState("")
  const [createEnd, setCreateEnd] = useState("")
  const [payStart, setPayStart] = useState("")
  const [payEnd, setPayEnd] = useState("")
  const [applied, setApplied] = useState({
    purchaseId: initialPurchaseId, userId: "", customerOrderNo: "", customerCode: "", rechargeNo: "", platform: "",
    createStart: "", createEnd: "", payStart: "", payEnd: "",
  })
  const [checked, setChecked] = useState<string[]>([])
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [batchOpen, setBatchOpen] = useState(false)
  const [remarkId, setRemarkId] = useState<string | null>(null)
  const [addrId, setAddrId] = useState<string | null>(null)
  const [tip, setTip] = useState("")

  useEffect(() => {
    if (!initialPurchaseId) return
    setPurchaseId(initialPurchaseId)
    setApplied((prev) => ({ ...prev, purchaseId: initialPurchaseId }))
  }, [initialPurchaseId])

  const list = useMemo(() => {
    return orders.filter((o) => {
      if (status !== "全部" && o.statusTab !== status) return false
      if (applied.purchaseId) {
        const tokens = applied.purchaseId.split(/[\s,，/\\n]+/).filter(Boolean)
        if (tokens.length && !tokens.some((t) => o.purchaseId.includes(t) || o.purchaseNo.includes(t))) return false
      }
      if (applied.userId && !o.userId.includes(applied.userId)) return false
      if (applied.customerOrderNo && !o.customerOrderNo.includes(applied.customerOrderNo)) return false
      if (applied.platform && o.platform !== applied.platform) return false
      if (applied.createStart && o.createdAt < applied.createStart) return false
      if (applied.createEnd && o.createdAt > `${applied.createEnd} 23:59:59`) return false
      return true
    })
  }, [orders, status, applied])

  function toast(msg: string) {
    setTip(msg)
    setTimeout(() => setTip(""), 1600)
  }

  function actionsFor(order: PurchaseOrder) {
    if (order.statusTab === "待提交支付") {
      return ["submit", ...(order.purchaseNo ? ["refresh"] : []), "cancel", "remark"] as const
    }
    if (order.statusTab === "待财务支付") return ["cancelSubmit", "remark"] as const
    return ["remark"] as const
  }

  return (
    <div className="xport-pay">
      <div className="xport-card-panel">
        <div className="xport-tabs-line">
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
            setApplied({ purchaseId, userId, customerOrderNo, customerCode, rechargeNo, platform, createStart, createEnd, payStart, payEnd })
          }}
        >
          <div className="xport-field xport-field-lg">
            <label>采购单ID/单号:</label>
            <textarea rows={3} placeholder="请输入，支持多个单号空格、斜杠、中英文逗号、换行隔开" value={purchaseId} onChange={(e) => setPurchaseId(e.target.value)} />
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
            <label>客户代码:</label>
            <input placeholder="请输入" value={customerCode} onChange={(e) => setCustomerCode(e.target.value)} />
          </div>
          <div className="xport-field">
            <label>充值流程编号:</label>
            <input placeholder="请输入" value={rechargeNo} onChange={(e) => setRechargeNo(e.target.value)} />
          </div>
          <div className="xport-field">
            <label>下单平台:</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
              <option value="">请输入</option>
              <option>1688</option>
              <option>Taobao</option>
              <option>得物</option>
            </select>
          </div>
          <div className="xport-field">
            <label>创建时间:</label>
            <div className="xport-daterange">
              <input type="date" value={createStart} onChange={(e) => setCreateStart(e.target.value)} />
              <span>:</span>
              <input type="date" value={createEnd} onChange={(e) => setCreateEnd(e.target.value)} />
            </div>
          </div>
          <div className="xport-field">
            <label>付款时间:</label>
            <div className="xport-daterange">
              <input type="date" value={payStart} onChange={(e) => setPayStart(e.target.value)} />
              <span>:</span>
              <input type="date" value={payEnd} onChange={(e) => setPayEnd(e.target.value)} />
            </div>
          </div>
          <div className="xport-field xport-field-actions">
            <button type="submit" className="xport-btn xport-btn-primary">搜 索</button>
            <button
              type="button"
              className="xport-btn"
              onClick={() => {
                setPurchaseId(""); setUserId(""); setCustomerOrderNo(""); setCustomerCode(""); setRechargeNo(""); setPlatform("")
                setCreateStart(""); setCreateEnd(""); setPayStart(""); setPayEnd("")
                setApplied({ purchaseId: "", userId: "", customerOrderNo: "", customerCode: "", rechargeNo: "", platform: "", createStart: "", createEnd: "", payStart: "", payEnd: "" })
              }}
            >
              清 空
            </button>
          </div>
        </form>
      </div>

      <div className="xport-pay-toolbar">
        <label className="xport-check">
          <input
            type="checkbox"
            checked={list.length > 0 && checked.length === list.length}
            onChange={(e) => setChecked(e.target.checked ? list.map((o) => o.id) : [])}
          />
          全选
        </label>
        <button type="button" className="xport-btn xport-btn-primary" onClick={() => setBatchOpen(true)}>批量提交支付</button>
        <button type="button" className="xport-btn" onClick={() => setRemarkId("batch")}>批量编辑备注</button>
        <button type="button" className="xport-btn" onClick={() => toast("导出任务已提交")}>导出数据</button>
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
            {order.platform === "Taobao" ? (
              <span className="xport-plat-badge">淘宝</span>
            ) : (
              <img src="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/1688.png" alt="1688" className="xport-plat-logo" />
            )}
            <div className="xport-pay-meta">
              <div>
                创建时间： {order.createdAt}
                <span className="xport-pay-sub">采购单ID： {order.purchaseId}</span>
                {order.purchaseNo ? <span className="xport-pay-sub">采购订单号： {order.purchaseNo}</span> : null}
                <span className="xport-pay-sub">付款时间：{order.paidAt || ""}</span>
              </div>
              <div>
                客户订单号：{order.customerOrderNo}
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
            <div className="xport-pay-action xport-pay-links">
              {confirmId === order.id && (
                <div className="xport-popconfirm">
                  <div>确认提交支付订单吗？</div>
                  <div className="xport-popconfirm-btns">
                    <button type="button" className="xport-btn" onClick={() => setConfirmId(null)}>取消</button>
                    <button type="button" className="xport-btn xport-btn-primary" onClick={() => { setConfirmId(null); toast("已提交支付") }}>确定</button>
                  </div>
                </div>
              )}
              {actionsFor(order).map((a) => (
                a === "submit" ? <button key={a} type="button" className="xport-link" onClick={() => setConfirmId(order.id)}>提交支付</button>
                : a === "refresh" ? <button key={a} type="button" className="xport-link" onClick={() => toast("已刷新订单")}>刷新订单</button>
                : a === "cancel" ? <button key={a} type="button" className="xport-link" onClick={() => toast("已取消订单")}>取消订单</button>
                : a === "cancelSubmit" ? <button key={a} type="button" className="xport-link" onClick={() => toast("已取消提交支付")}>取消提交支付</button>
                : <button key={a} type="button" className="xport-link" onClick={() => setRemarkId(order.id)}>备注</button>
              ))}
            </div>
          </header>
          <div className="xport-pay-meta xport-pay-extra">
            采购翻译：{order.translate}
            <span className="xport-pay-sub">充值流程编号：{order.rechargeNo}</span>
            <span className="xport-pay-sub">付款金额：{order.payAmount}</span>
          </div>
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
                  {g.orderNo ? <div>订单编号：{g.orderNo}</div> : null}
                  <div>子订单编号：{g.subOrderNo}{g.contactSeller ? <span className="xport-link-inline"> 联系商家</span> : null}</div>
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
            <div className="xport-dialog-body">{checked.length === 0 ? "请先勾选订单" : "确认提交支付订单吗？"}</div>
            <div className="xport-dialog-footer">
              <button type="button" className="xport-btn" onClick={() => setBatchOpen(false)}>取消</button>
              <button type="button" className="xport-btn xport-btn-primary" onClick={() => { setBatchOpen(false); if (checked.length) toast("已提交支付") }}>确定</button>
            </div>
          </div>
        </div>
      )}

      {remarkId && (
        <div className="xport-dialog-root is-open">
          <button type="button" className="xport-dialog-mask" onClick={() => setRemarkId(null)} aria-label="关闭" />
          <div className="xport-dialog" style={{ width: "480px" }}>
            <div className="xport-dialog-header">
              <span className="xport-dialog-title">备注</span>
              <button type="button" className="xport-dialog-x" onClick={() => setRemarkId(null)}>×</button>
            </div>
            <div className="xport-dialog-body">
              <div className="xport-form-row"><label>采购翻译:</label><input placeholder="请输入" /></div>
              <div className="xport-form-row"><label>充值流程编号:</label><input placeholder="请输入" /></div>
              <div className="xport-form-row"><label>付款金额:</label><input placeholder="请输入" /></div>
            </div>
            <div className="xport-dialog-footer">
              <button type="button" className="xport-btn" onClick={() => setRemarkId(null)}>取消</button>
              <button type="button" className="xport-btn xport-btn-primary" onClick={() => { setRemarkId(null); toast("已保存") }}>确定</button>
            </div>
          </div>
        </div>
      )}
      {tip ? <div className="xport-toast">{tip}</div> : null}
    </div>
  )
}
