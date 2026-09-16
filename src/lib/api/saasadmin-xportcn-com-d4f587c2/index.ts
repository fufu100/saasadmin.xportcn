import {
  dashboardData,
  menus,
  pageSpecs,
  tableData,
} from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import type {
  CrudListResponse,
  DashboardPayload,
  LoginRequest,
  LoginResponse,
  MenuItem,
  PageSpec,
} from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"

const delay = () => new Promise((r) => setTimeout(r, 120 + Math.floor(Math.random() * 80)))

export async function loginUser(body: LoginRequest): Promise<LoginResponse> {
  await delay()
  if (body.username === "xp-test" && body.password === "test") {
    return {
      success: true,
      message: "ok",
      data: {
        account: "xp-test",
        userName: "xp-test",
        avatar: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png",
      },
    }
  }
  return { success: false, message: "用户名或密码错误" }
}

export async function getMenus(): Promise<MenuItem[]> {
  await delay()
  return menus
}

export async function getDashboard(): Promise<DashboardPayload> {
  await delay()
  return dashboardData
}

export function getPageSpec(path: string): PageSpec | undefined {
  return pageSpecs.find((p) => p.path === path)
}

export async function getCrudList(
  resource: string,
  query: { keyword?: string; page?: number; pageSize?: number } = {},
): Promise<CrudListResponse> {
  await delay()
  const page = query.page ?? 1
  const pageSize = query.pageSize ?? 100
  let records = tableData[resource] ?? []
  if (query.keyword) {
    const k = query.keyword.toLowerCase()
    records = records.filter((row) => Object.values(row).some((v) => v.toLowerCase().includes(k)))
  }
  const start = (page - 1) * pageSize
  return {
    records: records.slice(start, start + pageSize),
    total: records.length,
    page,
    pageSize,
  }
}
