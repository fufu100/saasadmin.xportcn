"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function formatNow() {
  const d = new Date()
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export function LoginView() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [clock, setClock] = useState("")

  useEffect(() => {
    const tick = () => setClock(formatNow())
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!username) {
      setError("请输入用户名")
      return
    }
    if (!password) {
      setError("请输入密码")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      const json = (await res.json()) as { success: boolean; message: string; data?: { userName: string; avatar: string; account: string } }
      if (!json.success || !json.data) {
        setError(json.message || "登录失败")
        return
      }
      localStorage.setItem("xport-admin-auth", JSON.stringify(json.data))
      router.push("/dashboard")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="xport-login login-container">
      <div className="login-weaper animated bounceInDown">
        <div className="login-left">
          <div className="login-time">{clock}</div>
          <img className="img" src="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/logo.png" alt="" />
          <p className="title">Xport 后台管理</p>
        </div>
        <div className="login-border">
          <div className="login-main">
            <h4 className="login-title">登录 Xport </h4>
            <form className="login-form" onSubmit={onSubmit}>
              <div className="login-item">
                <span className="login-prefix">👤</span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="请输入用户名"
                  autoComplete="username"
                />
              </div>
              <div className="login-item">
                <span className="login-prefix">🔒</span>
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  autoComplete="current-password"
                />
                <button type="button" className="login-eye" onClick={() => setShowPwd((v) => !v)} aria-label="显示密码">
                  {showPwd ? "🙈" : "👁"}
                </button>
              </div>
              {error ? <div className="login-error">{error}</div> : null}
              <button className="login-submit" type="submit" disabled={loading}>
                {loading ? "登录中,请稍后。。。" : "登录"}
              </button>
            </form>
            <div className="login-menu" />
          </div>
        </div>
      </div>
    </div>
  )
}
