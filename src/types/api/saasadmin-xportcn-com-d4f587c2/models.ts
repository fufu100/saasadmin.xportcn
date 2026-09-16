export type MenuChild = {
  name: string
  label: string
  path: string
}

export type MenuItem = {
  name: string
  label: string
  path: string
  icon: string
  children?: MenuChild[]
}

export type AuthUser = {
  account: string
  userName: string
  avatar: string
}

export type LoginRequest = {
  username: string
  password: string
}

export type LoginResponse = {
  success: boolean
  message: string
  data?: AuthUser
}

export type DashboardSummary = {
  users: number
  orderFlow: string
  orderNum: number
}

export type MonthChart = {
  monthData: string[]
  orderData: number[]
  userData: number[]
}

export type YearChart = {
  monthData: string[]
  orderData: number[]
  userData: number[]
  orderFlowData: string[]
}

export type DashboardPayload = {
  totalData: DashboardSummary
  lineChartData: MonthChart
  lineBarChartData: YearChart
}

export type CrudColumn = {
  key: string
  label: string
  width?: string
}

export type CrudRow = Record<string, string>

export type CrudListResponse = {
  records: CrudRow[]
  total: number
  page: number
  pageSize: number
}

export type DialogSpec = {
  id: string
  title: string
  width?: string
  confirmText?: string
  cancelText?: string
  confirmFirst?: boolean
  hideConfirm?: boolean
  hideFooter?: boolean
  fields: { key: string; label: string; type?: "text" | "textarea" | "select"; options?: string[]; required?: boolean }[]
}

export type SearchField = {
  key: string
  label: string
  placeholder?: string
  type?: "text" | "textarea" | "select" | "daterange" | "select-input"
  options?: string[]
  prependOptions?: string[]
}

export type TabGroup = {
  type: "card" | "line"
  items: string[]
}

export type PageSpec = {
  id: string
  title: string
  path: string
  kind: "crud" | "form" | "tabs" | "pay-cards"
  searchFields?: SearchField[]
  columns?: CrudColumn[]
  toolbar?: { id: string; label: string; type?: "primary" | "danger" | "default" }[]
  dialogs?: DialogSpec[]
  tabs?: string[]
  tabGroups?: TabGroup[]
  rowActions?: { id: string; label: string }[]
  formSections?: { title: string; fields: { key: string; label: string; value: string }[] }[]
}
