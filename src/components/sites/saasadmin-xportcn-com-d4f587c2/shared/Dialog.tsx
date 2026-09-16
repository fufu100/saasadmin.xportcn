"use client"

import { useEffect, useState, type ReactNode } from "react"

export function XportDialog({
  open,
  title,
  width = "420px",
  onClose,
  onConfirm,
  children,
  confirmText = "确定",
  cancelText = "取消",
  confirmFirst = false,
  hideConfirm = false,
  hideFooter = false,
}: {
  open: boolean
  title: string
  width?: string
  onClose: () => void
  onConfirm?: () => void
  children: ReactNode
  confirmText?: string
  cancelText?: string
  confirmFirst?: boolean
  hideConfirm?: boolean
  hideFooter?: boolean
}) {
  const [visible, setVisible] = useState(open)
  useEffect(() => {
    if (open) setVisible(true)
    else {
      const t = setTimeout(() => setVisible(false), 180)
      return () => clearTimeout(t)
    }
  }, [open])
  if (!visible) return null
  return (
    <div className={`xport-dialog-root ${open ? "is-open" : "is-leave"}`}>
      <button type="button" className="xport-dialog-mask" onClick={onClose} aria-label="关闭" />
      <div className="xport-dialog" style={{ width }}>
        <div className="xport-dialog-header">
          <span className="xport-dialog-title">{title}</span>
          <button type="button" className="xport-dialog-x" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="xport-dialog-body">{children}</div>
        {!hideFooter && (
        <div className="xport-dialog-footer">
          {hideConfirm ? (
            <button type="button" className="xport-btn" onClick={onClose}>
              {cancelText}
            </button>
          ) : confirmFirst ? (
            <>
              <button type="button" className="xport-btn xport-btn-primary" onClick={onConfirm ?? onClose}>
                {confirmText}
              </button>
              <button type="button" className="xport-btn" onClick={onClose}>
                {cancelText}
              </button>
            </>
          ) : (
            <>
              <button type="button" className="xport-btn" onClick={onClose}>
                {cancelText}
              </button>
              <button type="button" className="xport-btn xport-btn-primary" onClick={onConfirm ?? onClose}>
                {confirmText}
              </button>
            </>
          )}
        </div>
        )}
      </div>
    </div>
  )
}
