"use client"

import { useState } from "react"
import type { CrudRow } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"

export function UserDetailView({ row }: { row: CrudRow }) {
  const [tab, setTab] = useState<"基本信息" | "交易明细">("基本信息")
  return (
    <div className="xport-user-detail">
      <div className="xport-ud-wrap">
        <section className="xport-ud-head">
          <img
            className="xport-ud-avatar"
            src="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png"
            alt=""
          />
          <div>
            <div className="xport-ud-meta">
              <div className="flex-row"><span className="fw6">用户姓名：</span><span>{row.userName}</span></div>
              <div className="flex-row"><span className="fw6">客户ID：</span><span>{row.id}</span></div>
              <div className="flex-row"><span className="fw6">加入时间：</span><span>{row.joinTime}</span></div>
            </div>
            <div className="xport-ud-freeze">
              <button type="button" className="xport-btn">冻结</button>
            </div>
          </div>
        </section>
        <div className="xport-ud-split">
          <section className="xport-ud-card">
            <div className="xport-ud-title">消费信息</div>
            <div className="xport-ud-box">
              <div className="xport-ud-item">
                <div className="xport-ud-sub">最近消费</div>
                <div className="xport-ud-line">最近消费时间：{row.lastChargeTime || "-"}</div>
                <div className="xport-ud-line">最近消费金额：{row.lastChargeAmount}</div>
              </div>
              <div className="xport-ud-item">
                <div className="xport-ud-sub">累计消费&售后</div>
                <div className="xport-ud-line">总消费金额：{row.totalChargeAmount}</div>
                <div className="xport-ud-line">总消费次数：{row.totalChargeCount}</div>
                <div className="xport-ud-line">总售后金额：{row.afterSaleAmount || "￥0"}</div>
                <div className="xport-ud-line">总售后次数：{row.afterSaleCount || "0"}</div>
              </div>
            </div>
          </section>
          <section className="xport-ud-card">
            <div className="xport-ud-title">账户资产</div>
            <div className="xport-ud-item">
              <div className="xport-ud-sub">余额</div>
              <div className="xport-ud-line">当前余额：{row.balance || "￥0"}</div>
            </div>
          </section>
        </div>
        <div className="xport-ud-tabs xport-tabs-card">
          {(["基本信息", "交易明细"] as const).map((t) => (
            <button key={t} type="button" className={tab === t ? "is-active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        {tab === "基本信息" ? (
          <div className="xport-ud-basic">
            <div className="xport-ud-basic-title">基本信息</div>
            <div className="xport-ud-kv"><span className="basics_title">生日：</span><span>{row.birthday}</span></div>
            <div className="xport-ud-kv"><span className="basics_title">性别：</span><span>{row.gender || "男"}</span></div>
            <div className="xport-ud-kv"><span className="basics_title">邮箱：</span><span>{row.email}</span></div>
            <div className="xport-ud-remark">
              <label>备注：</label>
              <div className="xport-count-wrap">
                <textarea rows={4} defaultValue={row.remark} maxLength={500} placeholder="请输入" />
                <span>0/500</span>
              </div>
              <button type="button" className="xport-btn xport-btn-primary">保存</button>
            </div>
          </div>
        ) : (
          <div className="xport-empty-cell">暂无数据</div>
        )}
      </div>
    </div>
  )
}
