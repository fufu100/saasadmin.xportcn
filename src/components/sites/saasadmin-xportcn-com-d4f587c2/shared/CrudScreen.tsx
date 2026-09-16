"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { exchangeRates, kefuTypes, shopForm, socialRows, supportCurrencies } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import { getPageSpec } from "@/lib/api/saasadmin-xportcn-com-d4f587c2"
import type { CrudRow, DialogSpec } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"
import { DeptCreateForm, PayConfigForm, RechargeAuditForm, RolePermForm, UserCreateForm, WarehouseCreateForm } from "../shared/AdminCrudForms"
import { XportDialog } from "../shared/Dialog"
import { RechargeApplyForm } from "../shared/RechargeApplyForm"

function actionsFor(specId: string, row: CrudRow, fallback: { id: string; label: string }[]) {
  if (specId === "userRecharge") {
    if (row.status === "待审核") {
      return [
        { id: "view", label: "查看" },
        { id: "approve", label: "审核通过" },
        { id: "reject", label: "驳回" },
      ]
    }
    return [{ id: "view", label: "查看" }]
  }
  if (specId === "accounts") {
    const actions = [
      { id: "view", label: "查 看" },
      { id: "edit", label: "编 辑" },
    ]
    if (row.account !== "xp-test") actions.push({ id: "delete", label: "删 除" })
    return actions
  }
  if (specId === "subRechargeAudit") {
    if (row.status.includes("待审核")) {
      return [
        { id: "approve", label: "审核通过" },
        { id: "reject", label: "驳回" },
      ]
    }
    return []
  }
  if (specId === "balanceStats") {
    return [{ id: "adjust", label: "余额调整" }]
  }
  if (specId === "orders") {
    const actions = [
      { id: "view", label: "查 看" },
      { id: "changePrice", label: "改价" },
    ]
    if (row.orderStatus === "待付款") {
      actions.push({ id: "toBuy", label: "去采购" }, { id: "cancelOrder", label: "取消订单" })
    }
    return actions
  }
  return fallback
}

export function CrudScreen({ path, resource }: { path: string; resource: string }) {
  const spec = getPageSpec(path)
  const router = useRouter()
  const [rows, setRows] = useState<CrudRow[] | null>(null)
  const [keyword, setKeyword] = useState("")
  const [tab, setTab] = useState(spec?.tabs?.[0] ?? spec?.tabGroups?.[0]?.items[0] ?? "")
  const [dialog, setDialog] = useState<DialogSpec | null>(null)
  const [activeRow, setActiveRow] = useState<CrudRow | null>(null)
  const [checked, setChecked] = useState<string[]>([])
  const [editing, setEditing] = useState(false)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    let cancelled = false
    setRows(null)
    setPage(1)
    fetch(resource === "orders" ? "/api/orders?pageSize=100" : `/api/crud/${resource}?pageSize=100`)
      .then((r) => r.json())
      .then((json: { data: { records: CrudRow[] } }) => {
        if (!cancelled) setRows(json.data.records)
      })
    return () => {
      cancelled = true
    }
  }, [resource])

  const filtered = useMemo(() => {
    if (!rows) return []
    if (!keyword) return rows
    const k = keyword.toLowerCase()
    return rows.filter((row) => Object.values(row).some((v) => v.toLowerCase().includes(k)))
  }, [rows, keyword])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)

  if (!spec) return <div className="xport-empty">页面不存在</div>

  return (
    <div className="xport-crud">
      {(spec.tabGroups ?? (spec.tabs ? [{ type: "line" as const, items: spec.tabs }] : [])).map((group) => (
        <div key={group.items.join("-")} className={group.type === "card" ? "xport-tabs-card" : "xport-tabs-line"}>
          {group.items.map((t) => (
            <button key={t} type="button" className={t === tab ? "is-active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
      ))}
      {spec.searchFields && (
        <form
          className="xport-search-grid"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          {spec.searchFields.map((f) => (
            <div className={`xport-field ${f.type === "textarea" ? "xport-field-lg" : ""}`} key={f.key}>
              <label>{f.label.endsWith(":") || f.label.endsWith("：") ? f.label : `${f.label}:`}</label>
              {f.type === "textarea" ? (
                <textarea rows={3} placeholder={f.placeholder} onChange={(e) => setKeyword(e.target.value)} />
              ) : f.type === "select" ? (
                <select onChange={(e) => setKeyword(e.target.value)}>
                  <option value="">{f.placeholder ?? "请选择"}</option>
                  {(f.options ?? []).map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === "select-input" ? (
                <div className="xport-select-input">
                  <select defaultValue={f.prependOptions?.[0]}>
                    {(f.prependOptions ?? []).map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <input placeholder={f.placeholder ?? "请输入"} onChange={(e) => setKeyword(e.target.value)} />
                </div>
              ) : f.type === "daterange" ? (
                <div className="xport-daterange">
                  <input type="date" />
                  <span>:</span>
                  <input type="date" />
                </div>
              ) : (
                <input placeholder={f.placeholder ?? "请输入"} onChange={(e) => setKeyword(e.target.value)} />
              )}
            </div>
          ))}
          <div className="xport-field xport-field-actions">
            <button type="submit" className="xport-btn xport-btn-primary">搜 索</button>
            <button type="button" className="xport-btn" onClick={() => setKeyword("")}>清 空</button>
          </div>
        </form>
      )}
      {spec.id === "bills" && (
        <div className="xport-balance-bar">当前账户余额： <b>￥33.13</b></div>
      )}
      {spec.toolbar && (
        <div className="xport-toolbar">
          {spec.toolbar.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`xport-btn ${b.type === "primary" ? "xport-btn-primary" : ""} ${b.type === "danger" ? "xport-btn-danger" : ""}`}
              onClick={() => setDialog(spec.dialogs?.find((d) => d.id === b.id) ?? { id: b.id, title: "提示", fields: [{ key: "tip", label: b.id === "delete" ? "确定将选择数据删除?" : `${b.label}（演示）` }] })}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}
      <div className="xport-table-wrap">
        {!rows ? (
          <div className="xport-skeleton xport-table-skel" />
        ) : (
          <table className="xport-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => setChecked(e.target.checked ? filtered.map((r) => r.id ?? r.account ?? r.name ?? "") : [])}
                  />
                </th>
                {spec.columns?.map((c) => (
                  <th key={c.key}>{c.label}</th>
                ))}
                {(spec.rowActions === undefined || spec.rowActions.length > 0) && <th>操作</th>}
              </tr>
            </thead>
            <tbody>
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={(spec.columns?.length ?? 0) + 2} className="xport-empty-cell">
                    暂无数据
                  </td>
                </tr>
              ) : (
                paged.map((row, i) => {
                  const id = row.id ?? row.account ?? row.name ?? String(i)
                  return (
                    <tr key={id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={checked.includes(id)}
                          onChange={(e) =>
                            setChecked((prev) => (e.target.checked ? [...prev, id] : prev.filter((x) => x !== id)))
                          }
                        />
                      </td>
                      {spec.columns?.map((c) => (
                        <td key={c.key} className={c.key === "user" || c.key === "status" ? "xport-cell-multi" : undefined}>
                          {spec.id === "accounts" && c.key === "status" ? (
                            <span className={`xport-switch ${row.status === "启用" ? "is-on" : ""} ${row.locked === "1" ? "is-disabled" : ""}`} />
                          ) : c.key === "voucher" && row.voucher ? (
                            <span className="xport-voucher">
                              <img src={row.voucher} alt="" />
                            </span>
                          ) : c.key === "file" && row.file ? (
                            <span className="xport-voucher">
                              {row.file.split(",").map((src) => (
                                <img key={src} src={src} alt="" />
                              ))}
                            </span>
                          ) : c.key === "productImg" && row.productImg ? (
                            <span className="xport-voucher">
                              <img src={row.productImg} alt="" />
                            </span>
                          ) : spec.id === "subRechargeAudit" && c.key === "status" ? (
                            <span className={`xport-el-tag ${row.status.includes("驳回") ? "is-danger" : row.status.includes("通过") ? "is-success" : row.status.includes("待审核") ? "is-primary" : ""}`}>
                              {row.status}
                            </span>
                          ) : spec.id === "orders" && c.key === "userId" ? (
                            <Link href={`/user/detail?id=${row.userId}`} className="xport-link">{row.userId}</Link>
                          ) : spec.id === "bills" && c.key === "relatedNo" && row.relatedNo ? (
                            <Link href={`/order/purchase-list?purchaseId=${row.relatedNo}`} className="xport-link">{row.relatedNo}</Link>
                          ) : (
                            row[c.key]
                          )}
                        </td>
                      ))}
                      {(spec.rowActions === undefined || spec.rowActions.length > 0) && (
                      <td className="xport-ops">
                        <div className="xport-ops-inner">
                        {actionsFor(spec.id, row, spec.rowActions ?? [
                          { id: "view", label: "查看" },
                          { id: "edit", label: "编辑" },
                        ]).map((a) => {
                          const label = spec.id === "customers" && a.id === "bind"
                            ? (row.purchaser ? "解绑采购账号" : "绑定采购账号")
                            : a.label
                          const dialogId = spec.id === "customers" && a.id === "bind" && row.purchaser ? "unbind" : a.id
                          return (
                          <button
                            key={a.id}
                            type="button"
                            className="xport-link"
                            onClick={() => {
                              setActiveRow(row)
                              if (spec.id === "customers" && a.id === "view") {
                                router.push(`/user/detail?id=${row.id}`)
                                return
                              }
                              if (spec.id === "orders" && a.id === "view") {
                                router.push(`/order/detail/${row.id}`)
                                return
                              }
                              if (a.id === "edit" && spec.id !== "warehouses" && spec.id !== "accounts" && spec.id !== "depts") {
                                setEditing(true)
                                return
                              }
                              setDialog(spec.dialogs?.find((d) => d.id === dialogId) ?? { id: dialogId, title: "提示", fields: [{ key: "tip", label: `确认${label}?` }] })
                            }}
                          >
                            {label}
                          </button>
                          )
                        })}
                        </div>
                      </td>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="xport-pager">
        <span>共 {filtered.length} 条</span>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            type="button"
            className={page === i + 1 ? "xport-pager-num" : "xport-pager-page"}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <select
          value={`${pageSize}条/页`}
          onChange={(e) => {
            setPageSize(Number(e.target.value.replace("条/页", "")))
            setPage(1)
          }}
        >
          {["10条/页", "20条/页", "30条/页", "40条/页", "50条/页", "100条/页"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <XportDialog
        open={!!dialog}
        title={dialog?.title ?? ""}
        width={dialog?.width}
        confirmText={dialog?.confirmText}
        cancelText={dialog?.cancelText}
        confirmFirst={dialog?.confirmFirst}
        hideConfirm={dialog?.hideConfirm}
        hideFooter={dialog?.hideFooter}
        onClose={() => { setDialog(null); setActiveRow(null) }}
        onConfirm={() => { setDialog(null); setActiveRow(null) }}
      >
        {dialog?.id === "payConfig" ? (
          <PayConfigForm />
        ) : dialog?.id === "view" && spec.id === "userRecharge" && activeRow ? (
          <RechargeAuditForm row={activeRow} mode="view" />
        ) : dialog?.id === "approve" && spec.id === "userRecharge" && activeRow ? (
          <RechargeAuditForm row={activeRow} mode="approve" />
        ) : dialog?.id === "reject" && spec.id === "userRecharge" && activeRow ? (
          <RechargeAuditForm row={activeRow} mode="reject" />
        ) : (dialog?.id === "create" || dialog?.id === "edit") && spec.id === "warehouses" ? (
          <WarehouseCreateForm row={dialog.id === "edit" ? activeRow ?? undefined : undefined} />
        ) : (dialog?.id === "create" || dialog?.id === "view" || dialog?.id === "edit") && spec.id === "accounts" ? (
          <UserCreateForm
            row={dialog.id === "create" ? undefined : activeRow ?? undefined}
            mode={dialog.id === "view" ? "view" : dialog.id === "edit" ? "edit" : "create"}
          />
        ) : (dialog?.id === "create" || dialog?.id === "view" || dialog?.id === "edit") && spec.id === "depts" ? (
          <DeptCreateForm
            row={dialog.id === "create" ? undefined : activeRow ?? undefined}
            mode={dialog.id === "view" ? "view" : dialog.id === "edit" ? "edit" : "create"}
          />
        ) : dialog?.id === "perm" && spec.id === "roles" ? (
          <RolePermForm />
        ) : dialog?.id === "create" && spec.id === "rechargeApply" ? (
          <RechargeApplyForm />
        ) : dialog?.id === "adjust" ? (
          <>
            <div className="xport-form-row">
              <label>类型:</label>
              <div className="xport-radio-row">
                <label className="xport-check"><input type="radio" name="adj" defaultChecked /> 余额增加</label>
                <label className="xport-check"><input type="radio" name="adj" /> 余额扣减</label>
              </div>
            </div>
            <div className="xport-form-row">
              <label>金额:</label>
              <div className="xport-input-append">
                <input placeholder="请输入" />
                <span>CNY</span>
              </div>
            </div>
            <div className="xport-form-row">
              <label>备注</label>
              <div className="xport-count-wrap">
                <textarea rows={4} placeholder="请输入" maxLength={200} />
                <span>0/200</span>
              </div>
            </div>
          </>
        ) : dialog?.id === "changePrice" ? (
          <>
            <div className="xport-form-row">
              <label>当前金额:</label>
              <span>{activeRow?.total ?? ""}</span>
            </div>
            <div className="xport-form-row">
              <label>改价金额:</label>
              <input placeholder="请输入改价金额" />
            </div>
          </>
        ) : dialog?.id === "createWork" ? (
          <div className="xport-aftersale-form">
            <div className="xport-form-row">
              <label>* 订单ID:</label>
              <input placeholder="请输入" />
              <button type="button" className="xport-btn xport-btn-primary">搜 索</button>
            </div>
            <div className="xport-form-row">
              <label>* 申请售后主订单:</label>
              <span>当前表格已选择 0 项</span>
              <button type="button" className="xport-btn">清 空</button>
            </div>
            <table className="xport-table">
              <thead>
                <tr>
                  <th /><th>商品详情</th><th>价格</th><th>数量</th><th>订单金额</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="xport-empty-cell">暂无数据</td>
                </tr>
              </tbody>
            </table>
            <div className="xport-form-row">
              <label>* 售后类型:</label>
              <label className="xport-check"><input type="radio" name="asType" defaultChecked /> 仅退款-余额</label>
            </div>
            <div className="xport-form-row">
              <label>* 退款金额:</label>
              <input defaultValue="0" />
              <span>￥</span>
            </div>
            <div className="xport-form-row">
              <label>* 退款凭证:</label>
              <button type="button" className="xport-btn">上传</button>
              <span>最多上传张凭证数量：10</span>
            </div>
            <div className="xport-form-row">
              <label>* 退款原因:</label>
              <textarea rows={4} placeholder="请输入" />
            </div>
          </div>
        ) : (
        dialog?.fields.map((f) => (
          f.key === "tip" ? (
            <div className="xport-confirm-msg" key={f.key}>{f.label}</div>
          ) : (
          <div className="xport-form-row" key={f.key}>
            <label>{f.required ? <><i>*</i>{f.label}:</> : f.label}</label>
            {f.type === "textarea" ? (
              <textarea rows={3} />
            ) : f.type === "select" ? (
              <select defaultValue="">
                <option value="">请选择</option>
                {(f.options ?? []).map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input />
            )}
          </div>
          )
        ))
        )}
      </XportDialog>
      <XportDialog open={editing} title="编辑" onClose={() => setEditing(false)} onConfirm={() => setEditing(false)}>
        <div className="xport-form-row">
          <label>内容</label>
          <input />
        </div>
      </XportDialog>
    </div>
  )
}

export function ShopFormScreen({ variant }: { variant: "base" | "pay" | "page" }) {
  const [mode, setMode] = useState<"view" | "edit">("view")
  const [kefuOpen, setKefuOpen] = useState<"add" | number | null>(null)
  const [payTab, setPayTab] = useState<"币种类型" | "汇率配置">("币种类型")
  const [addCur, setAddCur] = useState(false)
  const [editCur, setEditCur] = useState<string | null>(null)
  const [addRate, setAddRate] = useState(false)
  const editingCur = supportCurrencies.find((c) => c.code === editCur)

  return (
    <div className="xport-crud xport-module">
      {variant === "base" && (
        <>
          <section className="xport-mod-block">
            <div className="xport-mod-hd">
              <span>站点信息</span>
              {mode === "edit" ? (
                <div>
                  <button type="button" className="xport-btn" onClick={() => setMode("view")}>取消</button>
                  <button type="button" className="xport-btn xport-btn-primary" onClick={() => setMode("view")}>保存</button>
                </div>
              ) : (
                <button type="button" className="xport-btn xport-btn-primary" onClick={() => setMode("edit")}>编辑</button>
              )}
            </div>
            <div className="xport-mod-form">
              <div className="xport-form-row">
                <label>站点名称：</label>
                <input defaultValue={shopForm.shopName} disabled={mode === "view"} />
              </div>
              <div className="xport-form-row">
                <label>站点域名：</label>
                <div className="xport-input-prepend">
                  <select disabled={mode === "view"} defaultValue="https://">
                    <option>https://</option>
                    <option>http://</option>
                  </select>
                  <input defaultValue={shopForm.domainUrl} disabled={mode === "view"} />
                </div>
              </div>
              <div className="xport-form-row">
                <label>站点Logo：</label>
                <div>
                  <img src={shopForm.shopPicUrl} alt="" className="xport-logo-preview" />
                  {mode === "edit" && <div className="xport-upload-hint">上传图片 尺寸388*84px，仅支持JPG/PNG格式</div>}
                </div>
              </div>
              <div className="xport-form-row">
                <label>标签栏图标：</label>
                <div>
                  <img src={shopForm.tagIco} alt="" className="xport-ico-preview" />
                  {mode === "edit" && <div className="xport-upload-hint">上传图片 尺寸48*48px，仅支持ico、png格式</div>}
                </div>
              </div>
              <div className="xport-form-row">
                <label>支持的语言：</label>
                <div className="xport-check-group">
                  {shopForm.languageOptions.map((lang) => (
                    <label key={lang} className="xport-check">
                      <input type="checkbox" defaultChecked={shopForm.languages.includes(lang)} disabled={mode === "view"} />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>
              <div className="xport-form-row">
                <label>默认语言：</label>
                <select defaultValue={shopForm.language} disabled={mode === "view"}>
                  {shopForm.languages.map((lang) => (
                    <option key={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              <div className="xport-form-row">
                <label>汇率展示：</label>
                <span className={`xport-switch ${shopForm.rateShow ? "is-on" : ""}`} />
              </div>
              <div className="xport-form-row">
                <label>支持平台：</label>
                <div className="xport-check-group">
                  {["1688", "Taobao", "得物"].map((p) => (
                    <label key={p} className="xport-check">
                      <input type="checkbox" defaultChecked={shopForm.platforms.includes(p)} disabled={mode === "view"} />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              <div className="xport-form-row">
                <label>查看1688相似商品：</label>
                <span className={`xport-switch ${shopForm.similar1688 ? "is-on" : ""}`} />
              </div>
              <div className="xport-form-row">
                <label>支付方式：</label>
                <div className="xport-radio-block">
                  <label className="xport-check">
                    <input type="radio" name="payMode" defaultChecked={shopForm.payMode === "一段支付"} disabled={mode === "view"} />
                    一段支付
                    <span className="xport-subhint">(货款+国际物流 一并支付)</span>
                  </label>
                  <label className="xport-check">
                    <input type="radio" name="payMode" defaultChecked={shopForm.payMode === "二段支付"} disabled={mode === "view"} />
                    二段支付
                    <span className="xport-subhint">(先订单支付，后国际物流运费支付)</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section className="xport-mod-block">
            <div className="xport-mod-hd"><span>客服信息</span></div>
            <table className="xport-table">
              <thead>
                <tr>
                  <th>社交软件</th>
                  <th>账户id</th>
                  <th>客服二维码</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {socialRows.map((r, idx) => (
                  <tr key={r.accountId}>
                    {kefuOpen === idx ? (
                      <>
                        <td>
                          <select defaultValue={r.social}>
                            <option value="">请选择 社交软件</option>
                            {kefuTypes.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </td>
                        <td><input defaultValue={r.accountId} placeholder="请输入 账户id" /></td>
                        <td>
                          <img src={r.qr} alt="" className="xport-kefu-preview" />
                          <div className="xport-upload-hint">尺寸450*450px|3x，仅支持JPG/PNG格式</div>
                        </td>
                        <td className="xport-ops">
                          <button type="button" className="xport-link" onClick={() => setKefuOpen(null)}>保 存</button>
                          <button type="button" className="xport-link" onClick={() => setKefuOpen(null)}>取 消</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{r.social}</td>
                        <td>{r.accountId}</td>
                        <td>
                          <span className="xport-voucher"><img src={r.qr} alt="" /></span>
                        </td>
                        <td className="xport-ops">
                          <button type="button" className="xport-link" onClick={() => setKefuOpen(idx)}>编 辑</button>
                          <button type="button" className="xport-link danger">删 除</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
                <tr>
                  <td>
                    <select defaultValue="">
                      <option value="">请选择 社交软件</option>
                      {kefuTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </td>
                  <td><input placeholder="请输入 账户id" /></td>
                  <td>
                    <label className="xport-upload-box">+</label>
                    <div className="xport-upload-hint">尺寸450*450px|3x，仅支持JPG/PNG格式</div>
                  </td>
                  <td className="xport-ops">
                    <button type="button" className="xport-link">保 存</button>
                    <button type="button" className="xport-link">取 消</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="xport-toolbar">
              <button type="button" className="xport-btn xport-btn-primary" disabled={mode === "view"} onClick={() => setKefuOpen("add")}>
                新增联系客服(最多添加个数:3)
              </button>
            </div>
          </section>
          <section className="xport-mod-block">
            <div className="xport-mod-hd"><span>账户管理</span></div>
            <div className="xport-form-row">
              <label>抽佣扣款账户：</label>
              <select defaultValue={shopForm.commissionAccount} disabled={mode === "view"}>
                <option>账户余额</option>
              </select>
            </div>
          </section>
        </>
      )}
      {variant === "pay" && (
        <section className="xport-mod-block">
          <div className="xport-tabs-line">
            {(["币种类型", "汇率配置"] as const).map((t) => (
              <button key={t} type="button" className={t === payTab ? "is-active" : ""} onClick={() => setPayTab(t)}>
                {t}
              </button>
            ))}
          </div>
          {payTab === "币种类型" ? (
            <>
              <div className="xport-mod-hd">
                <span>商店支持币种列表</span>
                <button type="button" className="xport-btn xport-btn-primary" onClick={() => setAddCur(true)}>添加支持币种</button>
              </div>
              <table className="xport-table">
                <thead>
                  <tr>
                    <th>币种</th>
                    <th>币种符号</th>
                    <th>最小汇率</th>
                    <th>最大汇率</th>
                    <th>默认币种</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {supportCurrencies.map((c) => (
                    <tr key={c.code}>
                      <td>{c.code}</td>
                      <td>{c.symbol}</td>
                      <td>{c.min}</td>
                      <td>{c.max}</td>
                      <td><span className={`xport-switch ${c.isDefault ? "is-on" : ""}`} /></td>
                      <td className="xport-ops">
                        <button type="button" className="xport-link" onClick={() => setEditCur(c.code)}>编辑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <form className="xport-search-grid" onSubmit={(e) => e.preventDefault()}>
                <div className="xport-field">
                  <label>汇率类型:</label>
                  <select defaultValue="">
                    <option value="">请选择</option>
                    {supportCurrencies.map((c) => <option key={c.code}>{c.code}</option>)}
                  </select>
                </div>
                <div className="xport-field xport-field-actions">
                  <button type="submit" className="xport-btn xport-btn-primary">搜 索</button>
                  <button type="button" className="xport-btn">清 空</button>
                </div>
              </form>
              <div className="xport-toolbar">
                <button type="button" className="xport-btn xport-btn-primary" onClick={() => setAddRate(true)}>新 增</button>
              </div>
              <table className="xport-table">
                <thead>
                  <tr>
                    <th>汇率</th>
                    <th>汇率类型</th>
                    <th>汇率日期</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {exchangeRates.map((r) => (
                    <tr key={r.id}>
                      <td>{r.rate}</td>
                      <td>{r.type}</td>
                      <td>{r.date}</td>
                      <td className="xport-ops">
                        <button type="button" className="xport-link" onClick={() => setAddRate(true)}>编辑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </section>
      )}
      {variant === "page" && (
        <section className="xport-mod-block">
          <div className="xport-tabs-line">
            <button type="button" className="is-active">首页背景</button>
          </div>
          <div className="xport-form-grid">
            <label>
              首页海报
              <input disabled={mode === "view"} defaultValue="home-bg.png" />
            </label>
            <label>
              标签图标
              <input disabled={mode === "view"} defaultValue="favicon.ico" />
            </label>
          </div>
        </section>
      )}
      <XportDialog open={addCur} title="添加支持币种" onClose={() => setAddCur(false)} onConfirm={() => setAddCur(false)}>
        <div className="xport-form-row">
          <label>可支持币种:</label>
          <select defaultValue="">
            <option value="">请选择可支持币种:</option>
            {supportCurrencies.map((c) => (
              <option key={c.code}>{c.code}</option>
            ))}
          </select>
        </div>
      </XportDialog>
      <XportDialog open={!!editCur} title="编辑" onClose={() => setEditCur(null)} onConfirm={() => setEditCur(null)}>
        <div className="xport-form-row">
          <label>币种:</label>
          <span>{editingCur?.code}</span>
        </div>
        <div className="xport-form-row">
          <label>最小汇率:</label>
          <input defaultValue={editingCur?.min} placeholder="请输入" />
        </div>
        <div className="xport-form-row">
          <label>最大汇率:</label>
          <input defaultValue={editingCur?.max} placeholder="请输入" />
        </div>
        <div className="xport-form-row">
          <label>默认币种:</label>
          <span className={`xport-switch ${editingCur?.isDefault ? "is-on" : ""}`} />
        </div>
      </XportDialog>
      <XportDialog open={addRate} title="新增汇率" onClose={() => setAddRate(false)} onConfirm={() => setAddRate(false)}>
        <div className="xport-form-row">
          <label>汇率类型:</label>
          <select defaultValue="">
            <option value="">请选择</option>
            {supportCurrencies.map((c) => (
              <option key={c.code}>{c.code}</option>
            ))}
          </select>
        </div>
        <div className="xport-form-row">
          <label>汇率:</label>
          <input placeholder="请输入" />
        </div>
        <div className="xport-form-row">
          <label>汇率日期:</label>
          <input type="datetime-local" />
        </div>
      </XportDialog>
    </div>
  )
}
