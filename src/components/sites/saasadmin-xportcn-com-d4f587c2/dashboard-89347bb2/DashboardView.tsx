"use client"

import { useEffect, useState } from "react"
import { notice } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import type { DashboardPayload } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"
import { IconDollar, IconPeoples, IconShopping } from "../shared/icons"

function formatFlow(v: string) {
  const n = Number(v)
  if (Number.isNaN(n)) return v
  return Math.round(n).toLocaleString("en-US")
}

function LineScatter({
  labels,
  seriesA,
  seriesB,
  colorA,
  colorB,
}: {
  labels: string[]
  seriesA: number[]
  seriesB: number[]
  colorA: string
  colorB: string
}) {
  const w = 1100
  const h = 320
  const max = Math.max(1, ...seriesA, ...seriesB)
  const points = (s: number[]) =>
    s.map((v, i) => {
      const x = 48 + (i * (w - 80)) / Math.max(s.length - 1, 1)
      const y = h - 36 - (v / max) * (h - 70)
      return { x, y, v }
    })
  const a = points(seriesA)
  const b = points(seriesB)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="xport-chart-svg">
      {Array.from({ length: 8 }, (_, i) => {
        const y = 20 + i * ((h - 56) / 7)
        return <line key={i} x1="48" x2={w - 16} y1={y} y2={y} stroke="#f0f0f0" />
      })}
      {a.map((p, i) => (
        <circle key={`a${i}`} cx={p.x} cy={p.y} r="3.5" fill={colorA} />
      ))}
      {b.map((p, i) => (
        <circle key={`b${i}`} cx={p.x} cy={p.y} r="3.5" fill={colorB} />
      ))}
      {labels.map((l, i) => {
        const x = 48 + (i * (w - 80)) / Math.max(labels.length - 1, 1)
        return i % 2 === 0 ? (
          <text key={l} x={x} y={h - 10} fontSize="10" fill="#999" textAnchor="middle">
            {l}
          </text>
        ) : null
      })}
    </svg>
  )
}

function ComboChart({ data }: { data: DashboardPayload["lineBarChartData"] }) {
  const w = 1100
  const h = 320
  const max = Math.max(1, ...data.orderData, ...data.userData, ...data.orderFlowData.map((n) => Number(n)))
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="xport-chart-svg">
      {data.orderData.map((v, i) => {
        const x = 56 + i * ((w - 90) / data.orderData.length)
        const bh = (v / max) * (h - 70)
        return <rect key={i} x={x} y={h - 36 - bh} width="28" height={bh} fill="#409EFF" opacity="0.75" />
      })}
      <polyline
        fill="none"
        stroke="#f4516c"
        strokeWidth="2"
        points={data.orderFlowData
          .map((v, i) => {
            const x = 70 + i * ((w - 90) / data.orderFlowData.length)
            const y = h - 36 - (Number(v) / max) * (h - 70)
            return `${x},${y}`
          })
          .join(" ")}
      />
      {data.monthData.map((l, i) => {
        const x = 70 + i * ((w - 90) / data.monthData.length)
        return (
          <text key={l} x={x} y={h - 10} fontSize="10" fill="#999" textAnchor="middle">
            {l.slice(5)}
          </text>
        )
      })}
    </svg>
  )
}

export function DashboardView() {
  const [data, setData] = useState<DashboardPayload | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((json: { data: DashboardPayload }) => {
        if (!cancelled) setData(json.data)
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (!data) {
    return (
      <div className="dashboard-editor-container">
        <div className="panel-group">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card-panel-col">
              <div className="card-panel xport-skeleton" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-editor-container">
      {!dismissed && (
        <div className="xport-alert">
          <div>
            <div className="xport-alert-title">{notice.title}</div>
            <div className="xport-alert-desc">
              {notice.desc1}{" "}
              <a href={notice.link} target="_blank" rel="noreferrer">
                {notice.link}
              </a>{" "}
              {notice.desc2}
            </div>
          </div>
          <button type="button" className="xport-alert-ok" onClick={() => setDismissed(true)}>
            {notice.ok}
          </button>
        </div>
      )}
      <div className="panel-group">
        <div className="card-panel-col">
          <div className="card-panel">
            <div className="card-panel-icon-wrapper icon-people">
              <IconPeoples className="svg-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">注册客户</div>
              <span className="card-panel-num">{data.totalData.users}</span>
            </div>
          </div>
        </div>
        <div className="card-panel-col">
          <div className="card-panel">
            <div className="card-panel-icon-wrapper icon-money">
              <IconDollar className="svg-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">订单流水</div>
              <span className="card-panel-num">{formatFlow(data.totalData.orderFlow)}</span>
              <span className="card-panel-unit"> CNY</span>
            </div>
          </div>
        </div>
        <div className="card-panel-col">
          <div className="card-panel">
            <div className="card-panel-icon-wrapper icon-shopping">
              <IconShopping className="svg-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">成交订单量</div>
              <span className="card-panel-num">{data.totalData.orderNum}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <div className="chart-title">最近一月成交订单/注册客户</div>
        <div className="xport-legend">
          <span className="dot pink" /> 成交订单量 <span className="dot blue" /> 注册客户
        </div>
        <LineScatter
          labels={data.lineChartData.monthData}
          seriesA={data.lineChartData.orderData}
          seriesB={data.lineChartData.userData}
          colorA="#f4516c"
          colorB="#409EFF"
        />
      </div>
      <div className="chart-wrapper">
        <div className="chart-title">今年累计注册客户/成交订单/订单流水</div>
        <ComboChart data={data.lineBarChartData} />
      </div>
    </div>
  )
}
