"use client"

import type { CrudRow } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"
import { menus } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"

const WORLDPAY_ACCOUNT =
  "汇入行 - Beneficiary Bank： J.P. MORGAN BANK LUXEMBOURG S.A., DUBLIN BRANCH \nSWIFT代码 - SWIFT Code： CHASIE4L \n开户银行地址 - Bank address： 200 Capital Dock 79 Sir John Rogersons Quay Dublin 2 D02 RK57 \n收款人姓名 - Beneficiary Name： Dragon Amazon Technology Co., Limited  \n收款人账户 - Account No： IE90CHAS93090301172664  \n收款人地址 - Beneficiary address： hongkong  \n收款人邮箱 - Beneficiary email：Contact@dragonamazon.com"

export function PayConfigForm() {
  return (
    <div className="xport-payconfig">
      <div className="xport-section-hd">万里汇</div>
      <div className="xport-form-row">
        <label>收款账户 - Account No</label>
        <textarea rows={8} defaultValue={WORLDPAY_ACCOUNT} />
      </div>
      <div className="xport-section-hd">银行转账</div>
      {[
        ["汇入行 - Beneficiary Bank", "招商银行"],
        ["SWIFT代码 - SWIFT Code", "2929"],
        ["开户银行地址 - Bank address", "杭州"],
        ["收款人姓名 - Beneficiary Name", "起码"],
        ["收款人账户 - Account No", "878827733"],
        ["收款人地址 - Beneficiary address", "滨江"],
        ["收款人邮箱 - Beneficiary email", "16666.com"],
      ].map(([label, value]) => (
        <div className="xport-form-row" key={label}>
          <label>{label}</label>
          <input defaultValue={value} placeholder="请输入" />
        </div>
      ))}
    </div>
  )
}

export function WarehouseCreateForm({ row }: { row?: CrudRow }) {
  return (
    <div className="xport-form-2col">
      <div className="xport-form-row">
        <label><i>*</i>姓:</label>
        <input placeholder="请输入 姓" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>名:</label>
        <input placeholder="请输入 名" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>手机号码:</label>
        <input placeholder="请输入 手机号码" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>仓库名称:</label>
        <input defaultValue={row?.name} placeholder="请输入 仓库名称" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>仓库英文名称:</label>
        <input defaultValue={row?.nameEn} placeholder="请输入 仓库英文名称" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>仓库地址:</label>
        <select defaultValue="">
          <option value="">请选择</option>
          <option>广东省 / 佛山市 / 南海区</option>
          <option>浙江省 / 金华市 / 义乌市</option>
        </select>
      </div>
      <div className="xport-form-row">
        <label><i>*</i>邮编:</label>
        <input defaultValue={row?.zip} placeholder="请输入 邮编" />
      </div>
      <div className="xport-form-row">
        <label>详细地址:</label>
        <div className="xport-count-wrap">
          <textarea rows={4} defaultValue={row?.address} placeholder="请输入 详细地址" maxLength={600} />
          <span>0/600</span>
        </div>
      </div>
    </div>
  )
}

export function UserCreateForm({ row, mode = "create" }: { row?: CrudRow; mode?: "create" | "view" | "edit" }) {
  const disabled = mode === "view"
  return (
    <div className="xport-recharge-form">
      <div className="xport-form-row">
        <label><i>*</i>登录账号:</label>
        <input defaultValue={row?.account} placeholder="请输入 登录账号" disabled={disabled} />
      </div>
      {mode === "create" && (
        <div className="xport-form-row">
          <label><i>*</i>密码:</label>
          <input defaultValue="123456" placeholder="请输入 密码" />
        </div>
      )}
      <div className="xport-form-row">
        <label><i>*</i>用户姓名:</label>
        <input defaultValue={row?.userName} placeholder="请输入 用户姓名" disabled={disabled} />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>手机号码:</label>
        <input defaultValue={row?.phone} placeholder="请输入 手机号码" disabled={disabled} />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>所属角色:</label>
        <div className="xport-tree-select">
          <label><input type="checkbox" defaultChecked={row?.role?.includes("采购员")} disabled={disabled} /> 采购员</label>
          <label><input type="checkbox" defaultChecked={row?.role?.includes("财务")} disabled={disabled} /> 财务</label>
        </div>
      </div>
      <div className="xport-form-row">
        <label><i>*</i>所属部门:</label>
        <select defaultValue={row?.dept ?? ""} disabled={disabled}>
          <option value="">请选择 所属部门</option>
          <option>采购部</option>
          <option>采购SaaS</option>
        </select>
      </div>
      {mode !== "create" && (
        <div className="xport-form-row">
          <label>所属店铺:</label>
          <input disabled={disabled} />
        </div>
      )}
      <div className="xport-form-row">
        <label>email:</label>
        <input placeholder="请输入 email" disabled={disabled} />
      </div>
      {mode === "view" && (
        <>
          <div className="xport-form-row">
            <label>状态:</label>
            <input defaultValue={row?.status} disabled />
          </div>
          <div className="xport-form-row">
            <label>操作人:</label>
            <input defaultValue={row?.operator} disabled />
          </div>
          <div className="xport-form-row">
            <label>创建时间:</label>
            <input defaultValue={row?.createTime} disabled />
          </div>
        </>
      )}
    </div>
  )
}

export function DeptCreateForm({ row, mode = "create" }: { row?: CrudRow; mode?: "create" | "view" | "edit" }) {
  const disabled = mode === "view"
  const star = (text: string) => (mode === "view" ? text : <><i>*</i>{text}</>)
  return (
    <div className="xport-form-2col">
      <div className="xport-form-row">
        <label>{star("部门名称:")}</label>
        <input defaultValue={row?.deptName} placeholder="请输入 部门名称" disabled={disabled} />
      </div>
      {mode === "view" && (
        <div className="xport-form-row">
          <label>员工数:</label>
          <input defaultValue={row?.memberNum} placeholder="请输入 员工数" disabled />
        </div>
      )}
      <div className="xport-form-row">
        <label>上级部门:</label>
        {mode === "view" ? (
          <input defaultValue={row?.parent || "0"} placeholder="请选择 上级部门" disabled />
        ) : (
          <select defaultValue={row?.parent ?? ""}>
            <option value="">请选择 上级部门</option>
            <option>采购部</option>
          </select>
        )}
      </div>
      {mode === "view" && (
        <div className="xport-form-row">
          <label>所属店铺:</label>
          <input defaultValue={row?.shop} placeholder="请输入 所属店铺" disabled />
        </div>
      )}
      <div className="xport-form-row">
        <label>{star("排序:")}</label>
        <input type="number" placeholder="请输入 排序" defaultValue={row?.sort ?? "1"} disabled={disabled} />
      </div>
      {mode === "view" && (
        <div className="xport-form-row">
          <label>创建时间:</label>
          <input defaultValue={row?.createTime} placeholder="请输入 创建时间" disabled />
        </div>
      )}
      <div className="xport-form-row xport-span-2">
        <label>备注:</label>
        <div className="xport-count-wrap">
          <textarea rows={4} placeholder="请输入 备注" maxLength={500} defaultValue={row?.remark} disabled={disabled} />
          <span>0/500</span>
        </div>
      </div>
    </div>
  )
}

export function RolePermForm() {
  return (
    <div className="xport-perm-tree">
      {menus.map((item) => (
        <div key={item.name} className="xport-perm-node">
          <div className="xport-perm-row">
            {item.children?.length ? <i className="xport-perm-caret is-open" /> : <i className="xport-perm-caret is-leaf" />}
            <label className="xport-check">
              <input type="checkbox" defaultChecked />
              {item.label}
            </label>
          </div>
          {item.children?.length ? (
            <div className="xport-perm-children">
              {item.children.map((c) => (
                <div key={c.path} className="xport-perm-row">
                  <label className="xport-check">
                    <input type="checkbox" defaultChecked />
                    {c.label}
                  </label>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function RechargeAuditForm({ row, mode }: { row: CrudRow; mode: "view" | "approve" | "reject" }) {
  const readonly = mode === "view"
  return (
    <div className="xport-audit-form">
      <div className="xport-form-row">
        <label>客户信息</label>
        <div className="xport-audit-user">
          <div>客户ID: {row.userId}</div>
          <div>用户姓名: {row.userName}</div>
        </div>
      </div>
      <div className="xport-form-row">
        <label>充值类型</label>
        <div>{row.type}</div>
      </div>
      <div className="xport-form-row">
        <label>汇款凭证</label>
        {row.voucher ? (
          <img className="xport-voucher-lg" src={row.voucher} alt="汇款凭证" />
        ) : (
          <span />
        )}
      </div>
      <div className="xport-form-row">
        <label>申请时间</label>
        <div>{row.applyTime}</div>
      </div>
      {mode === "reject" ? (
        <div className="xport-form-row">
          <label><i>*</i>驳回原因</label>
          <textarea rows={4} placeholder="请输入" />
        </div>
      ) : (
        <>
          <div className="xport-form-row xport-audit-gap">
            <label><i>*</i>充值币种</label>
            <select className="xport-audit-ctl" defaultValue={row.currency || "CNY"} disabled={readonly}>
              <option value="">请选择</option>
              <option value="CNY">CNY</option>
            </select>
          </div>
          <div className="xport-form-row">
            <label><i>*</i>充值金额</label>
            <input className="xport-audit-ctl" type="number" placeholder="请输入" defaultValue={row.amount} disabled={readonly} />
          </div>
        </>
      )}
    </div>
  )
}
