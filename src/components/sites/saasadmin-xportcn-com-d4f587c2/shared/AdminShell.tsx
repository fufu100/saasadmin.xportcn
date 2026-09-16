"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import { menus } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import type { MenuItem } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"
import { XportDialog } from "./Dialog"
import { MenuGlyph } from "./icons"

const AUTH_KEY = "xport-admin-auth"

function titleForPath(path: string) {
  if (path === "/dashboard") return "首页"
  if (path.startsWith("/user/detail")) return "客户详情"
  if (path.startsWith("/order/detail")) return "订单详情"
  for (const m of menus) {
    if (m.path === path) return m.label
    const child = m.children?.find((c) => c.path === path)
    if (child) return child.label
  }
  return path
}

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [tags, setTags] = useState<{ path: string; label: string }[]>([
    { path: "/dashboard", label: "首页" },
  ])
  const [userOpen, setUserOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) {
      router.replace("/login")
      return
    }
    setReady(true)
  }, [router])

  useEffect(() => {
    const parents = menus.filter((m) => m.children?.some((c) => pathname.startsWith(c.path) || pathname === c.path)).map((m) => m.name)
    setOpenMenus((prev) => Array.from(new Set([...prev, ...parents])))
    const label = titleForPath(pathname)
    setTags((prev) => (prev.some((t) => t.path === pathname) ? prev : [...prev, { path: pathname, label }]))
  }, [pathname])

  const user = useMemo(() => {
    if (typeof window === "undefined") return { userName: "xp-test", avatar: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png" }
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY) ?? "{}") as { userName: string; avatar: string }
    } catch {
      return { userName: "xp-test", avatar: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png" }
    }
  }, [ready])

  function toggle(item: MenuItem) {
    if (!item.children?.length) return
    setOpenMenus((prev) => (prev.includes(item.name) ? prev.filter((n) => n !== item.name) : [...prev, item.name]))
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY)
    router.replace("/login")
  }

  if (!ready) return <div className="xport-admin xport-boot">Loading</div>

  return (
    <div className={`xport-admin avue-contail ${collapse ? "is-collapse" : ""}`}>
      <div className="avue-logo">
        <Link href="/dashboard" className="avue-logo_title">
          <img src="/sites/saasadmin-xportcn-com-d4f587c2/shared/images/logo.png" alt="" className="logo-img" />
          {!collapse && <span>Xport Admin</span>}
        </Link>
      </div>
      <aside className="avue-left">
        <nav className="avue-sidebar">
          {menus.map((item) => {
            const active = pathname === item.path || item.children?.some((c) => c.path === pathname)
            const opened = openMenus.includes(item.name)
            if (!item.children?.length) {
              return (
                <Link key={item.name} href={item.path} className={`xport-menu-item ${active ? "is-active" : ""}`}>
                  <MenuGlyph name={item.icon} />
                  {!collapse && <span>{item.label}</span>}
                </Link>
              )
            }
            return (
              <div key={item.name} className={`xport-submenu ${opened ? "is-opened" : ""} ${active ? "is-active-group" : ""}`}>
                <button type="button" className="xport-menu-item xport-submenu-title" onClick={() => toggle(item)}>
                  <MenuGlyph name={item.icon} />
                  {!collapse && <span>{item.label}</span>}
                  {!collapse && <i className={`xport-caret ${opened ? "is-open" : ""}`} />}
                </button>
                {opened && !collapse && (
                  <div className="xport-submenu-children">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className={`xport-menu-item is-child ${pathname === child.path ? "is-active" : ""}`}
                      >
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
      <header className="avue-header">
        <div className="xport-top">
          <button type="button" className="xport-icon-btn" onClick={() => setCollapse((v) => !v)} aria-label="折叠菜单">
            <MenuGlyph name="menu" />
          </button>
          <div className="xport-top-right">
            <button
              type="button"
              className="xport-icon-btn"
              aria-label={fullscreen ? "退出全屏" : "全屏"}
              onClick={() => {
                if (!document.fullscreenElement) {
                  void document.documentElement.requestFullscreen()
                  setFullscreen(true)
                } else {
                  void document.exitFullscreen()
                  setFullscreen(false)
                }
              }}
            >
              <svg viewBox="0 0 24 24" className="xport-menu-icon" aria-hidden>
                <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
            <div className="xport-user">
              <button type="button" className="xport-user-btn" onClick={() => setUserOpen((v) => !v)}>
                <img src={user.avatar || "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png"} alt="" />
                <span>{user.userName || "xp-test"}</span>
                <i className="xport-caret" />
              </button>
              {userOpen && (
                <div className="xport-dropdown">
                  <button type="button" onClick={() => { setProfileOpen(true); setUserOpen(false) }}>个人信息</button>
                  <button type="button" onClick={() => { setLogoutOpen(true); setUserOpen(false) }}>退出登录</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="avue-main">
        <div className="avue-tags">
          <div className="xport-tags-nav">
            {tags.map((tag) => (
              <Link key={tag.path} href={tag.path} className={`xport-tag ${pathname === tag.path ? "is-active" : ""}`}>
                {tag.label}
                {tag.path !== "/dashboard" && (
                  <span
                    className="xport-tag-x"
                    onClick={(e) => {
                      e.preventDefault()
                      setTags((prev) => prev.filter((t) => t.path !== tag.path))
                      if (pathname === tag.path) router.push("/dashboard")
                    }}
                  >
                    ×
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="xport-tags-more">
            <button type="button" className="xport-more-btn" onClick={() => setMoreOpen((v) => !v)}>
              更多 <i className="xport-caret" />
            </button>
            {moreOpen && (
              <div className="xport-dropdown right">
                <button type="button" onClick={() => { setTags((t) => t.filter((x) => x.path === pathname || x.path === "/dashboard")); setMoreOpen(false) }}>关闭其它</button>
                <button type="button" onClick={() => { setTags([{ path: "/dashboard", label: "首页" }]); setMoreOpen(false); router.push("/dashboard") }}>关闭所有</button>
                <button type="button" onClick={() => setMoreOpen(false)}>清除缓存</button>
              </div>
            )}
          </div>
        </div>
        <div className="avue-view">{children}</div>
      </div>
      <XportDialog open={logoutOpen} title="提示" onClose={() => setLogoutOpen(false)} onConfirm={logout}>
        退出系统, 是否继续?
      </XportDialog>
      <XportDialog open={profileOpen} title="个人信息" onClose={() => setProfileOpen(false)}>
        <div className="xport-form-row"><label>登录账号</label><input defaultValue={user.userName || "xp-test"} /></div>
        <div className="xport-form-row"><label>用户姓名</label><input defaultValue={user.userName || "xp-test"} /></div>
      </XportDialog>
    </div>
  )
}
