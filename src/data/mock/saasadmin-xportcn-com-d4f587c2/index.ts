import type { DashboardPayload, MenuItem, PageSpec } from "@/types/api/saasadmin-xportcn-com-d4f587c2/models"

export const menus: MenuItem[] = [
  { name: "dashboard", label: "首页", path: "/dashboard", icon: "home" },
  {
    name: "webConfig",
    label: "网站设置",
    path: "/web-config",
    icon: "desktop",
    children: [
      { name: "baseModule", label: "基础模块", path: "/web-config/base-info/index" },
      { name: "paymentModule", label: "支付模块", path: "/web-config/pay/index" },
      { name: "pageSetting", label: "页面配置", path: "/web-config/page-module/index" },
    ],
  },
  { name: "customerList", label: "客户列表", path: "/user/index", icon: "team" },
  {
    name: "orderMange",
    label: "订单管理",
    path: "/order",
    icon: "menu",
    children: [
      { name: "orderList", label: "客户订单列表", path: "/order/list" },
      { name: "purchaseList", label: "采购订单列表", path: "/order/purchase-list" },
      { name: "afterSaleList", label: "售后订单列表", path: "/order/after-sale/index" },
    ],
  },
  {
    name: "financeManage",
    label: "财务管理",
    path: "/finance",
    icon: "transaction",
    children: [
      { name: "toBePaidOrder1688", label: "1688待支付订单", path: "/finance/order-pay" },
      { name: "toBePaidOrderTaobao", label: "Taobao待支付订单", path: "/finance/tb-order-pay" },
      { name: "childAccountRechargeAudit", label: "子账户充值审核", path: "/finance/sub-account-recharge-review" },
      { name: "accountBalanceStatistics", label: "账户余额统计", path: "/finance/account-balance-statistics" },
    ],
  },
  {
    name: "accountBalance",
    label: "账户余额",
    path: "/account-balance",
    icon: "card-line",
    children: [
      { name: "rechargeApply", label: "充值申请", path: "/account-balance/recharge-application" },
      { name: "billStatement", label: "账单流水", path: "/account-balance/bill-statement" },
    ],
  },
  {
    name: "moneyManagement",
    label: "客户资金管理",
    path: "/money",
    icon: "dollar",
    children: [{ name: "userRecharge", label: "客户充值管理", path: "/money/userRecharge/index" }],
  },
  {
    name: "logisticsManage",
    label: "物流管理",
    path: "/logistics",
    icon: "send",
    children: [{ name: "warehouseManage", label: "仓库管理", path: "/logistics/warehouse-manage" }],
  },
  {
    name: "systemManage",
    label: "系统管理",
    path: "/system",
    icon: "setting",
    children: [
      { name: "accountManage", label: "账号管理", path: "/system/user" },
      { name: "roleManage", label: "角色管理", path: "/authority/role" },
      { name: "deptManage", label: "部门管理", path: "/system/dept" },
    ],
  },
]

export const dashboardData: DashboardPayload = {
  totalData: { users: 5, orderFlow: "18279.83", orderNum: 155 },
  lineChartData: {
    monthData: ["08-17","08-18","08-19","08-20","08-21","08-22","08-23","08-24","08-25","08-26","08-27","08-28","08-29","08-30","08-31","09-01","09-02","09-03","09-04","09-05","09-06","09-07","09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-15"],
    orderData: [0,0,0,0,0,3,19,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,1,2],
    userData: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  },
  lineBarChartData: {
    monthData: ["2026-01","2026-02","2026-03","2026-04","2026-05","2026-06","2026-07","2026-08","2026-09","2026-10","2026-11","2026-12"],
    orderData: [23,6,13,5,0,7,1,31,7,0,0,0],
    userData: [0,0,1,0,0,2,0,0,0,0,0,0],
    orderFlowData: ["288.6","125","770.89","413.77","0","1276.47","0","1648.03","1020.9","0","0","0"],
  },
}

export const shopForm = {
  shopName: "非XP代采模式-客户自有账号模式",
  shopUserName: "xiayu",
  domainUrl: "saas.xportcn.com",
  email: "saasDeveloper@163.com",
  shopPicUrl: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/shop-logo.png",
  tagIco: "/sites/saasadmin-xportcn-com-d4f587c2/shared/favicon.ico",
  language: "简体中文",
  languages: ["简体中文", "English", "Русский", "繁體中文"],
  languageOptions: ["简体中文", "English", "Русский", "Việt Nam", "繁體中文"],
  rateShow: true,
  platforms: ["1688", "Taobao", "得物"],
  similar1688: true,
  payMode: "一段支付",
  commissionAccount: "账户余额",
}

export const kefuTypes = ["Wechat", "KakaoTalk", "Zalo", "Facebook Messenger", "WhatsApp", "Telegram", "Viber", "VKontakte"]

export const socialRows = [
  { social: "Wechat", accountId: "test", qr: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/kefu-1.png" },
  { social: "Wechat", accountId: "xinling_hyyb", qr: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/kefu-2.png" },
]

export const supportCurrencies = [
  { code: "CNY", symbol: "¥", min: "0", max: "10", isDefault: true },
  { code: "USD", symbol: "$", min: "0.1", max: "10", isDefault: false },
  { code: "EUR", symbol: "€", min: "", max: "", isDefault: false },
  { code: "GBP", symbol: "£", min: "", max: "", isDefault: false },
  { code: "CZK", symbol: "Kč", min: "", max: "", isDefault: false },
  { code: "DKK", symbol: "kr", min: "", max: "", isDefault: false },
  { code: "HUF", symbol: "Ft", min: "", max: "", isDefault: false },
  { code: "NOK", symbol: "kr", min: "", max: "", isDefault: false },
  { code: "SEK", symbol: "kr", min: "", max: "", isDefault: false },
  { code: "CHF", symbol: "Fr", min: "", max: "", isDefault: false },
  { code: "PLN", symbol: "zł", min: "", max: "", isDefault: false },
  { code: "RON", symbol: "lei", min: "", max: "", isDefault: false },
  { code: "KES", symbol: "Ksh", min: "", max: "", isDefault: false },
  { code: "ZAR", symbol: "R", min: "", max: "", isDefault: false },
  { code: "RUB", symbol: "₽", min: "", max: "", isDefault: false },
  { code: "TJS", symbol: "SM", min: "", max: "", isDefault: false },
]

export const exchangeRates = [
  { id: "r1", rate: "6.8", type: "USD", date: "2025-12-01 19:48:53" },
  { id: "r2", rate: "1", type: "CNY", date: "2025-11-28 11:19:50" },
  { id: "r3", rate: "7", type: "USD", date: "2025-11-27 16:11:05" },
  { id: "r4", rate: "0.0876", type: "RUB", date: "2025-11-11 16:11:42" },
]

function rows(prefix: string, columns: string[], count = 8): Record<string, string>[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1
    const row: Record<string, string> = { id: String(1000 + n) }
    for (const col of columns) {
      if (col === "id") continue
      row[col] = `${prefix}-${col}-${n}`
    }
    return row
  })
}

export const pageSpecs: PageSpec[] = [
  {
    id: "customers",
    title: "客户列表",
    path: "/user/index",
    kind: "crud",
    searchFields: [
      { key: "userId", label: "客户ID", placeholder: "请输入 客户ID" },
      { key: "userName", label: "用户姓名", placeholder: "请输入 用户姓名" },
      { key: "email", label: "邮箱", placeholder: "请输入 邮箱" },
      { key: "purchaser", label: "绑定采购账号", placeholder: "请输入 绑定采购账号" },
    ],
    columns: [
      { key: "id", label: "客户ID" },
      { key: "userName", label: "用户姓名" },
      { key: "phone", label: "电话" },
      { key: "email", label: "邮箱" },
      { key: "purchaser", label: "绑定采购账号" },
      { key: "joinTime", label: "加入时间" },
      { key: "lastChargeTime", label: "最近消费时间" },
      { key: "lastChargeAmount", label: "最近消费金额" },
      { key: "totalChargeCount", label: "总消费次数" },
      { key: "totalChargeAmount", label: "总消费金额" },
    ],
    toolbar: [
      { id: "bind", label: "绑定采购账号", type: "primary" },
      { id: "unbind", label: "解绑采购账号" },
    ],
    rowActions: [
      { id: "view", label: "查看" },
      { id: "freeze", label: "冻结" },
      { id: "bind", label: "绑定采购账号" },
    ],
    dialogs: [
      { id: "bind", title: "绑定采购账号", fields: [{ key: "purchaserAccount", label: "采购员账号", type: "select", options: ["xp-test", "test2", "testcg"] }] },
      { id: "unbind", title: "解绑采购账号", fields: [{ key: "tip", label: "确认解绑所选客户的采购账号？" }] },
      { id: "freeze", title: "冻结", fields: [{ key: "tip", label: "确认冻结该客户吗？" }] },
      { id: "view", title: "查看", fields: [{ key: "tip", label: "客户详情" }] },
    ],
  },
  {
    id: "orders",
    title: "客户订单列表",
    path: "/order/list",
    kind: "crud",
    searchFields: [
      { key: "id", label: "订单ID", placeholder: "请输入" },
      { key: "orderNo", label: "订单编号", placeholder: "请输入" },
      { key: "userId", label: "客户ID", placeholder: "请输入" },
      { key: "orderStatus", label: "订单状态", type: "select", placeholder: "请选择", options: ["待付款","待采购","采购中","处理中","已发货","部分发货","已入库","部分入库","已完成","订单取消","支付中"] },
      { key: "platform", label: "下单平台", type: "select", placeholder: "请选择", options: ["1688","Taobao","得物"] },
      { key: "orderTime", label: "订单时间", type: "daterange", placeholder: "开始日期" },
    ],
    columns: [
      { key: "id", label: "订单ID" },
      { key: "orderNo", label: "订单编号" },
      { key: "userId", label: "客户ID" },
      { key: "userName", label: "用户姓名" },
      { key: "productImg", label: "商品图" },
      { key: "orderStatus", label: "订单状态" },
      { key: "total", label: "订单总额" },
      { key: "purchaser", label: "采购员" },
      { key: "platform", label: "下单平台" },
      { key: "orderTime", label: "订单时间" },
    ],
    toolbar: [
      { id: "export", label: "导出数据" },
      { id: "purchase", label: "批量采购", type: "primary" },
    ],
    dialogs: [
      { id: "purchase", title: "批量采购", fields: [{ key: "tip", label: "确认采购所选订单吗？" }] },
      { id: "changePrice", title: "改价", width: "480px", confirmText: "确定", cancelText: "取消", fields: [
        { key: "origin", label: "当前金额" },
        { key: "price", label: "改价金额" },
      ] },
      { id: "toBuy", title: "去采购", fields: [{ key: "tip", label: "确认去采购该订单吗？" }] },
      { id: "cancelOrder", title: "取消订单", confirmText: "确定", cancelText: "取消", fields: [
        { key: "reason", label: "取消原因", type: "select", options: ["暂无存货", "已下架", "协商取消订单", "其它"] },
      ] },
    ],
    rowActions: [
      { id: "view", label: "查 看" },
      { id: "changePrice", label: "改价" },
      { id: "toBuy", label: "去采购" },
      { id: "cancelOrder", label: "取消订单" },
    ],
  },
  {
    id: "purchaseOrders",
    title: "采购订单列表",
    path: "/order/purchase-list",
    kind: "crud",
    tabGroups: [{ type: "line", items: ["全部","待提交支付","待财务支付","待发货","已发货","已取消","已入库","支付中","支付失败","同步失败订单0"] }],
    searchFields: [
      { key: "purchaseId", label: "采购单ID/单号", type: "textarea", placeholder: "请输入，支持多个单号空格、斜杠、中英文逗号、换行隔开" },
      { key: "userId", label: "客户ID", placeholder: "请输入" },
      { key: "orderNo", label: "客户订单号", placeholder: "请输入" },
      { key: "customerCode", label: "客户代码", placeholder: "请输入" },
      { key: "rechargeNo", label: "充值流程编号", placeholder: "请输入" },
      { key: "platform", label: "下单平台", type: "select", placeholder: "请输入", options: ["1688","Taobao","得物"] },
      { key: "createTime", label: "创建时间", type: "daterange" },
      { key: "payTime", label: "付款时间", type: "daterange" },
      { key: "translate", label: "采购翻译", placeholder: "请输入" },
      { key: "payAmount", label: "付款金额", placeholder: "请输入" },
    ],
    columns: [
      { key: "id", label: "采购订单号" },
      { key: "orderNo", label: "客户订单编号" },
      { key: "status", label: "采购状态" },
      { key: "purchaser", label: "采购员" },
      { key: "amount", label: "金额" },
      { key: "createTime", label: "创建时间" },
    ],
    toolbar: [
      { id: "submitPay", label: "批量提交支付", type: "primary" },
      { id: "remark", label: "批量编辑备注" },
      { id: "export", label: "导出数据" },
    ],
    dialogs: [
      { id: "submitPay", title: "批量提交支付", fields: [{ key: "tip", label: "确认提交支付订单吗？" }] },
      { id: "remark", title: "批量编辑备注", fields: [{ key: "remark", label: "备注", type: "textarea" }] },
    ],
  },
  {
    id: "afterSales",
    title: "售后订单列表",
    path: "/order/after-sale/index",
    kind: "crud",
    searchFields: [
      { key: "orderNo", label: "订单编号", type: "select-input", placeholder: "请输入", prependOptions: ["售后单号", "主订单编号", "子订单编号"] },
      { key: "handler", label: "处理人", placeholder: "请输入" },
      { key: "afterType", label: "售后类型", type: "select", placeholder: "请选择", options: ["仅退款", "退货退款"] },
      { key: "status", label: "售后状态", type: "select", placeholder: "请选择", options: ["售后客服-待处理", "待商家审核", "商家审核通过", "商家审核拒绝", "待商家收货", "退款财务-待处理", "退款失败", "待退款", "退款成功", "已取消"] },
      { key: "applyTime", label: "申请时间", type: "daterange" },
    ],
    columns: [
      { key: "id", label: "售后单号" },
      { key: "orderNo", label: "主订单编号" },
      { key: "afterType", label: "售后类型" },
      { key: "status", label: "售后状态" },
      { key: "handler", label: "处理人" },
      { key: "applyTime", label: "申请时间" },
    ],
    toolbar: [{ id: "createWork", label: "新建工单", type: "primary" }],
    rowActions: [],
    dialogs: [
      { id: "createWork", title: "创建售后工单", width: "720px", fields: [
        { key: "tradeId", label: "订单ID" },
        { key: "afterType", label: "售后类型", type: "select", options: ["仅退款-余额"] },
        { key: "refundAmount", label: "退款金额" },
        { key: "reason", label: "退款原因", type: "textarea" },
      ] },
    ],
  },
  {
    id: "pay1688",
    title: "1688待支付订单",
    path: "/finance/order-pay",
    kind: "tabs",
    tabs: ["待付款", "支付中", "支付失败", "先采后付(0)", "跨境宝(0)", "网商银行跨境直采(0)", "支付宝(0)"],
    searchFields: [{ key: "purchaseId", label: "采购订单号", placeholder: "请输入采购订单号" }],
    columns: [
      { key: "id", label: "采购订单号" },
      { key: "account", label: "1688账号" },
      { key: "amount", label: "应付金额" },
      { key: "status", label: "状态" },
      { key: "createTime", label: "创建时间" },
    ],
    toolbar: [{ id: "batchPay", label: "批量支付（最多勾选10条）", type: "primary" }],
    dialogs: [{ id: "batchPay", title: "批量支付", fields: [{ key: "tip", label: "确认支付所选订单吗？" }] }],
  },
  {
    id: "payTaobao",
    title: "Taobao待支付订单",
    path: "/finance/tb-order-pay",
    kind: "tabs",
    tabs: ["待付款", "支付中", "支付失败"],
    searchFields: [{ key: "purchaseId", label: "采购订单号" }],
    columns: [
      { key: "id", label: "采购订单号" },
      { key: "account", label: "淘宝账号" },
      { key: "amount", label: "应付金额" },
      { key: "status", label: "状态" },
    ],
    toolbar: [{ id: "batchPay", label: "批量支付（最多勾选10条）", type: "primary" }],
    dialogs: [{ id: "batchPay", title: "批量支付", fields: [{ key: "tip", label: "确认支付所选订单吗？" }] }],
  },
  {
    id: "subRechargeAudit",
    title: "子账户充值审核",
    path: "/finance/sub-account-recharge-review",
    kind: "crud",
    searchFields: [
      { key: "rechargeNo", label: "充值流程编号", type: "textarea", placeholder: "支持输入多个号码，以空格、斜杠、中英文逗号、换行隔开" },
      { key: "waterNo", label: "水单号", type: "textarea", placeholder: "支持输入多个号码，以空格、斜杠、中英文逗号、换行隔开" },
      { key: "amount", label: "收款金额", placeholder: "请输入" },
      { key: "remark", label: "收款说明", placeholder: "请输入" },
      { key: "customerCode", label: "客户代码", placeholder: "请输入" },
      { key: "status", label: "审核状态", type: "select", placeholder: "请选择", options: ["待审核", "通过", "拒绝"] },
      { key: "createTime", label: "创建时间", type: "daterange" },
    ],
    columns: [
      { key: "id", label: "充值流程编号" },
      { key: "createTime", label: "创建时间" },
      { key: "applyAccount", label: "申请账号" },
      { key: "rechargeAccount", label: "充值账号" },
      { key: "waterNo", label: "水单号" },
      { key: "channel", label: "收款渠道" },
      { key: "amount", label: "收款金额" },
      { key: "rate", label: "收款日汇率" },
      { key: "converted", label: "收款换算金额" },
      { key: "customerCode", label: "客户代码" },
      { key: "payAmount", label: "付款金额" },
      { key: "file", label: "收款附件" },
      { key: "remark", label: "收款说明" },
      { key: "status", label: "审核状态" },
    ],
    toolbar: [
      { id: "export", label: "导出数据" },
      { id: "audit", label: "批量审核", type: "primary" },
    ],
    rowActions: [
      { id: "approve", label: "审核通过" },
      { id: "reject", label: "驳回" },
    ],
    dialogs: [
      { id: "audit", title: "批量审核", fields: [
        { key: "result", label: "审核结果", type: "select", options: ["通过", "拒绝"] },
        { key: "reason", label: "拒绝原因", type: "textarea" },
      ] },
      { id: "approve", title: "充值审核", width: "520px", confirmText: "确定", cancelText: "取消", fields: [
        { key: "tip", label: "确认审核通过该充值申请？" },
      ] },
      { id: "reject", title: "充值审核", width: "520px", confirmText: "确定", cancelText: "取消", fields: [
        { key: "reason", label: "驳回原因", type: "textarea" },
      ] },
    ],
  },
  {
    id: "balanceStats",
    title: "账户余额统计",
    path: "/finance/account-balance-statistics",
    kind: "crud",
    searchFields: [{ key: "account", label: "账号", placeholder: "请输入 账号" }],
    columns: [
      { key: "account", label: "账号" },
      { key: "balance", label: "账户余额" },
    ],
    rowActions: [{ id: "adjust", label: "余额调整" }],
    dialogs: [
      { id: "adjust", title: "余额调整", width: "480px", confirmText: "确定", cancelText: "取消", fields: [
        { key: "type", label: "类型", type: "select", options: ["余额增加", "余额扣减"] },
        { key: "amount", label: "金额" },
        { key: "remark", label: "备注", type: "textarea" },
      ] },
    ],
  },
  {
    id: "rechargeApply",
    title: "充值申请",
    path: "/account-balance/recharge-application",
    kind: "crud",
    searchFields: [
      { key: "rechargeNo", label: "充值流程编号", type: "textarea", placeholder: "支持输入多个号码，以空格、斜杠、中英文逗号、换行隔开" },
      { key: "waterNo", label: "水单号", type: "textarea", placeholder: "支持输入多个号码，以空格、斜杠、中英文逗号、换行隔开" },
      { key: "amount", label: "收款金额", placeholder: "请输入" },
      { key: "remark", label: "收款说明", placeholder: "请输入" },
      { key: "applyStatus", label: "申请状态", type: "select", placeholder: "请选择", options: ["已完结"] },
      { key: "status", label: "审核状态", type: "select", placeholder: "请选择", options: ["审核通过", "审核驳回"] },
      { key: "createTime", label: "创建时间", type: "daterange" },
      { key: "customerCode", label: "客户代码", placeholder: "请输入" },
    ],
    columns: [
      { key: "id", label: "充值流程编号" },
      { key: "createTime", label: "创建时间" },
      { key: "applyAccount", label: "申请账号" },
      { key: "rechargeAccount", label: "充值账号" },
      { key: "waterNo", label: "水单号" },
      { key: "channel", label: "收款渠道" },
      { key: "amount", label: "收款金额" },
      { key: "rate", label: "收款日汇率" },
      { key: "converted", label: "收款换算金额" },
      { key: "customerCode", label: "客户代码" },
      { key: "payAmount", label: "付款金额" },
      { key: "file", label: "收款附件" },
      { key: "applyStatus", label: "申请状态" },
      { key: "remark", label: "收款说明" },
      { key: "status", label: "审核状态" },
    ],
    toolbar: [
      { id: "create", label: "创建充值申请", type: "primary" },
      { id: "export", label: "导出数据" },
    ],
    rowActions: [{ id: "create", label: "复制新建" }],
    dialogs: [
      { id: "create", title: "创建充值申请", width: "720px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
    ],
  },
  {
    id: "bills",
    title: "账单流水",
    path: "/account-balance/bill-statement",
    kind: "crud",
    searchFields: [
      { key: "relatedNo", label: "关联单号", placeholder: "请输入 关联单号" },
      { key: "account", label: "账号", placeholder: "请输入 账号" },
      { key: "type", label: "类型", type: "select", placeholder: "请选择 类型", options: ["支付扣款", "充值", "取消订单回款", "取消提交支付退款", "售后退款"] },
      { key: "createTime", label: "创建时间", type: "daterange" },
    ],
    columns: [
      { key: "createTime", label: "创建时间" },
      { key: "account", label: "账号" },
      { key: "type", label: "类型" },
      { key: "amount", label: "收支金额" },
      { key: "balance", label: "账户余额" },
      { key: "platform", label: "平台" },
      { key: "relatedNo", label: "关联单号" },
      { key: "remark", label: "备注" },
      { key: "operator", label: "操作人" },
    ],
    toolbar: [{ id: "export", label: "导出数据" }],
    rowActions: [],
  },
  {
    id: "userRecharge",
    title: "客户充值管理",
    path: "/money/userRecharge/index",
    kind: "crud",
    searchFields: [
      { key: "applyTime", label: "申请时间", type: "daterange" },
      { key: "userId", label: "客户ID", placeholder: "请输入 客户ID" },
      { key: "type", label: "充值类型", type: "select", placeholder: "请选择 充值类型", options: ["万里汇", "银行转账"] },
      { key: "rechargeNo", label: "充值单号", placeholder: "请输入 充值单号" },
      { key: "status", label: "审核状态", type: "select", placeholder: "请选择 审核状态", options: ["待审核", "审核通过", "审核驳回"] },
    ],
    columns: [
      { key: "applyTime", label: "申请时间" },
      { key: "user", label: "客户信息" },
      { key: "type", label: "充值类型" },
      { key: "voucher", label: "汇款凭证" },
      { key: "rechargeNo", label: "充值单号" },
      { key: "status", label: "审核状态" },
    ],
    toolbar: [{ id: "payConfig", label: "收款配置", type: "primary" }],
    dialogs: [
      { id: "payConfig", title: "收款配置", width: "680px", confirmText: "确 定", cancelText: "取 消", fields: [] },
      { id: "view", title: "查看", width: "720px", hideConfirm: true, cancelText: "取消", fields: [] },
      { id: "approve", title: "充值审核", width: "720px", confirmText: "确定", cancelText: "取消", fields: [] },
      { id: "reject", title: "充值审核", width: "720px", confirmText: "确定", cancelText: "取消", fields: [] },
    ],
  },
  {
    id: "warehouses",
    title: "仓库管理",
    path: "/logistics/warehouse-manage",
    kind: "crud",
    columns: [
      { key: "name", label: "仓库名称" },
      { key: "nameEn", label: "仓库英文名称" },
      { key: "address", label: "仓库地址" },
      { key: "zip", label: "邮编" },
      { key: "status", label: "状态" },
      { key: "type", label: "仓库类型" },
    ],
    toolbar: [{ id: "create", label: "新 增", type: "primary" }],
    rowActions: [
      { id: "edit", label: "编 辑" },
      { id: "delete", label: "删除" },
      { id: "disable", label: "禁用" },
    ],
    dialogs: [
      { id: "create", title: "新 增", width: "880px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "edit", title: "编 辑", width: "880px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "delete", title: "提示", fields: [{ key: "tip", label: "确定将选择数据删除?" }] },
      { id: "disable", title: "提示", fields: [{ key: "tip", label: "确定禁用该仓库?" }] },
    ],
  },
  {
    id: "accounts",
    title: "账号管理",
    path: "/system/user",
    kind: "crud",
    searchFields: [
      { key: "account", label: "登录账号", placeholder: "请输入 登录账号" },
      { key: "userName", label: "用户姓名", placeholder: "请输入 用户姓名" },
      { key: "role", label: "所属角色", type: "select", placeholder: "请选择 所属角色", options: ["采购员", "财务"] },
      { key: "status", label: "状态", type: "select", placeholder: "请选择 状态", options: ["启用", "禁用"] },
    ],
    columns: [
      { key: "id", label: "#" },
      { key: "account", label: "登录账号" },
      { key: "userName", label: "用户姓名" },
      { key: "phone", label: "手机号码" },
      { key: "role", label: "所属角色" },
      { key: "dept", label: "所属部门" },
      { key: "status", label: "状态" },
      { key: "operator", label: "操作人" },
      { key: "createTime", label: "创建时间" },
    ],
    toolbar: [
      { id: "create", label: "新 增", type: "primary" },
      { id: "delete", label: "删 除", type: "danger" },
      { id: "reset", label: "密码重置" },
    ],
    dialogs: [
      { id: "create", title: "新 增", width: "560px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "view", title: "查 看", width: "864px", hideFooter: true, fields: [] },
      { id: "edit", title: "编 辑", width: "560px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "delete", title: "提示", fields: [{ key: "tip", label: "确定将选择数据删除?" }] },
      { id: "reset", title: "密码重置", fields: [{ key: "password", label: "新密码" }] },
    ],
  },
  {
    id: "roles",
    title: "角色管理",
    path: "/authority/role",
    kind: "crud",
    searchFields: [{ key: "roleName", label: "角色名称", placeholder: "请输入 角色名称" }],
    columns: [
      { key: "id", label: "#" },
      { key: "roleName", label: "角色名称" },
      { key: "sort", label: "角色排序" },
      { key: "desc", label: "角色描述" },
      { key: "memberNum", label: "员工数" },
    ],
    toolbar: [
      { id: "create", label: "新增", type: "primary" },
      { id: "delete", label: "删除", type: "danger" },
      { id: "perm", label: "权限设置" },
    ],
    dialogs: [
      { id: "create", title: "新增角色", width: "520px", confirmText: "确 定", cancelText: "取 消", fields: [
        { key: "roleName", label: "角色名称", required: true },
        { key: "sort", label: "角色排序", required: true },
        { key: "desc", label: "角色描述", type: "textarea" },
      ] },
      { id: "perm", title: "权限设置", width: "640px", confirmText: "保 存", cancelText: "取 消", fields: [] },
      { id: "delete", title: "提示", fields: [{ key: "tip", label: "确定将选择数据删除?" }] },
    ],
  },
  {
    id: "depts",
    title: "部门管理",
    path: "/system/dept",
    kind: "crud",
    searchFields: [{ key: "deptName", label: "部门名称", placeholder: "请输入 部门名称" }],
    columns: [
      { key: "id", label: "#" },
      { key: "deptName", label: "部门名称" },
      { key: "memberNum", label: "员工数" },
      { key: "sort", label: "排序" },
      { key: "createTime", label: "创建时间" },
    ],
    toolbar: [
      { id: "create", label: "新 增", type: "primary" },
      { id: "delete", label: "删 除", type: "danger" },
    ],
    rowActions: [
      { id: "view", label: "查 看" },
      { id: "edit", label: "编 辑" },
      { id: "delete", label: "删 除" },
    ],
    dialogs: [
      { id: "create", title: "新 增", width: "880px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "view", title: "查 看", width: "864px", hideFooter: true, fields: [] },
      { id: "edit", title: "编 辑", width: "880px", confirmText: "保 存", cancelText: "取 消", confirmFirst: true, fields: [] },
      { id: "delete", title: "提示", fields: [{ key: "tip", label: "确定将选择数据删除?" }] },
    ],
  },
]

const voucher = (no: string, ext = "jpg") =>
  `/sites/saasadmin-xportcn-com-d4f587c2/shared/images/vouchers/${no}.${ext}`

const subFile = (...names: string[]) =>
  names.map((n) => `/sites/saasadmin-xportcn-com-d4f587c2/shared/images/vouchers/${n}`).join(",")

const curLabel = (type: number) => (type === 1 ? "USD" : type === 23 ? "RUB" : "CNY")

function subAudit(row: {
  id: string
  createTime: string
  apply: string
  account: string
  water: string
  channel: string
  foreign: number
  ctype: number
  rate: string
  cny: number
  code: string
  pay: string
  files: string
  remark: string
  status: string
  reason?: string
}) {
  const status = row.status === "审核驳回" ? `审核驳回\n驳回原因：${row.reason ?? "测试"}` : row.status
  return {
    id: row.id,
    createTime: row.createTime,
    applyAccount: row.apply,
    rechargeAccount: row.account,
    waterNo: row.water,
    channel: row.channel,
    amount: `${curLabel(row.ctype)} ${row.foreign}`,
    rate: row.rate,
    converted: `CNY ${row.cny}`,
    customerCode: row.code,
    payAmount: row.pay,
    file: row.files,
    remark: row.remark,
    status,
  }
}

const recharge = (
  no: string,
  applyTime: string,
  type: string,
  status: string,
  amount: string,
  ext = "jpg",
  userId = "100088",
) => ({
  id: no,
  applyTime,
  user: `客户ID :${userId}\n用户姓名 :${userId}`,
  userId,
  userName: userId,
  type,
  voucher: voucher(no, ext),
  rechargeNo: no,
  status,
  amount,
  currency: amount ? "CNY" : "",
})

export const tableData: Record<string, Record<string, string>[]> = {
  customers: [
    { id: "100106", userName: "100106", phone: "", email: "mhmadseyedii@gmail.com", purchaser: "test2", joinTime: "2026-06-24 07:38:02", lastChargeTime: "-", lastChargeAmount: "￥0", totalChargeCount: "0", totalChargeAmount: "￥0", afterSaleAmount: "￥0", afterSaleCount: "0", balance: "￥0", gender: "男", birthday: "", remark: "" },
    { id: "100105", userName: "100105", phone: "", email: "serge1en@me.com", purchaser: "", joinTime: "2026-06-10 14:04:50", lastChargeTime: "-", lastChargeAmount: "￥0", totalChargeCount: "0", totalChargeAmount: "￥0", afterSaleAmount: "￥0", afterSaleCount: "0", balance: "￥0", gender: "男", birthday: "", remark: "" },
    { id: "100103", userName: "100103", phone: "", email: "lilylian20@outlook.com", purchaser: "", joinTime: "2026-03-31 20:26:51", lastChargeTime: "-", lastChargeAmount: "￥0", totalChargeCount: "0", totalChargeAmount: "￥0", afterSaleAmount: "￥0", afterSaleCount: "0", balance: "￥0", gender: "男", birthday: "", remark: "" },
    { id: "100088", userName: "100088", phone: "", email: "2546794016@qq.com", purchaser: "xp-test", joinTime: "2025-11-06 11:35:02", lastChargeTime: "2026-08-25 16:03:05", lastChargeAmount: "￥2,990", totalChargeCount: "41", totalChargeAmount: "￥1,059,328", afterSaleAmount: "￥0", afterSaleCount: "0", balance: "￥22,434.01", gender: "男", birthday: "", remark: "" },
    { id: "100087", userName: "100087", phone: "", email: "611019476@qq.com", purchaser: "", joinTime: "2025-11-06 11:24:07", lastChargeTime: "-", lastChargeAmount: "￥0", totalChargeCount: "0", totalChargeAmount: "￥0", afterSaleAmount: "￥0", afterSaleCount: "0", balance: "￥0", gender: "男", birthday: "", remark: "" },
  ],
  orders: [
    { id: "181000534714199684", orderNo: "SO490630651466694656", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o1.jpg", orderStatus: "处理中", total: "CNY 680", purchaser: "xp-test", platform: "Taobao", orderTime: "下单: 2026-09-15 21:11:04", createTime: "2026-09-15 21:11:04", payMethod: "余额", goodsTitle: "ALO爱洛｜女士2026秋季 Airbrush Better Together 撞色网球裙", sku: "尺寸:S 颜色分类:经典黑/经典白", qty: "1", unitPrice: "CNY680", subtotal: "CNY680", goodsStatus: "待支付", goodsAmount: "CNY680", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY680", warehouse: "佛上仓22", buyerName: "100088", buyerPhone: "", address: "AAA 15088719404 广东省，佛山市，南海区，狮山镇前进东路1号" },
    { id: "181000534714199683", orderNo: "SO490629508980228096", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o2.jpg", orderStatus: "待付款", total: "CNY 1,080", purchaser: "xp-test", platform: "Taobao", orderTime: "下单: 2026-09-15 21:06:32", createTime: "2026-09-15 21:06:32", payMethod: "余额", goodsTitle: "ALO爱洛｜女士 Airbrush Splendor 修身运动休闲弹力吊带连衣裙", sku: "", qty: "1", unitPrice: "CNY1080", subtotal: "CNY1080", goodsStatus: "待支付", goodsAmount: "CNY1080", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY1080", warehouse: "佛上仓22", buyerName: "100088", buyerPhone: "", address: "AAA 15088719404 广东省，佛山市，南海区，狮山镇前进东路1号" },
    { id: "181000534714199657", orderNo: "SO490193469455941632", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o3.jpg", orderStatus: "处理中", total: "CNY 339", purchaser: "xp-test", platform: "Taobao", orderTime: "下单: 2026-09-14 16:13:52", createTime: "2026-09-14 16:13:52", payMethod: "余额", goodsTitle: "阿迪达斯加绒卫衣男装2025冬季新款保暖休闲圆领运动套头衫JF3542", sku: "", qty: "1", unitPrice: "CNY339", subtotal: "CNY339", goodsStatus: "待支付", goodsAmount: "CNY339", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY339", warehouse: "佛上仓22", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199640", orderNo: "SO488785270415941632", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o4.jpg", orderStatus: "处理中", total: "CNY 43.9", purchaser: "xp-test", platform: "1688", orderTime: "下单: 2026-09-10 18:58:10", createTime: "2026-09-10 18:58:10", payMethod: "余额", goodsTitle: "冰丝睡衣男春夏轻薄透气睡衣男款短袖短裤青少年简约男士睡衣", sku: "", qty: "1", unitPrice: "CNY43.9", subtotal: "CNY43.9", goodsStatus: "待支付", goodsAmount: "CNY43.9", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY43.9", warehouse: "佛上仓22", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199628", orderNo: "SO488497452242558976", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o5.jpg", orderStatus: "订单取消", total: "CNY 110", purchaser: "xp-test", platform: "1688", orderTime: "下单: 2026-09-09 23:54:29", createTime: "2026-09-09 23:54:29", payMethod: "余额", goodsTitle: "【8MM】扭扭棒加密款密绒高端手工diy艺术品材料包玩具毛根批发", sku: "", qty: "100", unitPrice: "CNY110", subtotal: "CNY110", goodsStatus: "已取消", goodsAmount: "CNY110", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY110", warehouse: "宝盛923-义乌仓库", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199627", orderNo: "SO488421603752624128", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o6.jpg", orderStatus: "订单取消", total: "CNY 110", purchaser: "xp-test", platform: "1688", orderTime: "下单: 2026-09-09 18:53:05", createTime: "2026-09-09 18:53:05", payMethod: "余额", goodsTitle: "跨境高品质正确版本秋冬马刺绣标男士连帽开衫拉链卫衣格子外套", sku: "", qty: "1", unitPrice: "CNY110", subtotal: "CNY110", goodsStatus: "已取消", goodsAmount: "CNY110", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY110", warehouse: "", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199624", orderNo: "SO488399968765861888", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o7.jpg", orderStatus: "处理中", total: "CNY 19.9", purchaser: "xp-test", platform: "Taobao", orderTime: "下单: 2026-09-09 17:27:08", createTime: "2026-09-09 17:27:08", payMethod: "余额", goodsTitle: "小白鞋男2026新款夏季潮流休闲耐磨防滑板鞋男款低帮百搭运动潮鞋", sku: "", qty: "1", unitPrice: "CNY19.9", subtotal: "CNY19.9", goodsStatus: "待支付", goodsAmount: "CNY19.9", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY19.9", warehouse: "", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199534", orderNo: "SO482967723159576576", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o8.jpg", orderStatus: "处理中", total: "CNY 153", purchaser: "xp-test", platform: "1688", orderTime: "下单: 2026-08-25 17:41:19", createTime: "2026-08-25 17:41:19", payMethod: "余额", goodsTitle: "45度斜裁高支荃亚麻  新中式清冷感无袖连衣裙气质背心裙", sku: "", qty: "1", unitPrice: "CNY153", subtotal: "CNY153", goodsStatus: "待支付", goodsAmount: "CNY153", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY153", warehouse: "", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199533", orderNo: "SO482965889627971584", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o9.jpg", orderStatus: "处理中", total: "CNY 89.9", purchaser: "xp-test", platform: "Taobao", orderTime: "下单: 2026-08-25 17:34:03", createTime: "2026-08-25 17:34:03", payMethod: "余额", goodsTitle: "猫和老鼠键帽创意键帽 汤姆树脂键帽机械键盘帽杰瑞按键帽客制化", sku: "", qty: "1", unitPrice: "CNY89.9", subtotal: "CNY89.9", goodsStatus: "待支付", goodsAmount: "CNY89.9", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY89.9", warehouse: "", buyerName: "100088", buyerPhone: "", address: "" },
    { id: "181000534714199532", orderNo: "SO482959260215926784", userId: "100088", userName: "100088", productImg: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/o10.jpg", orderStatus: "订单取消", total: "CNY 56.5", purchaser: "xp-test", platform: "1688", orderTime: "下单: 2026-08-25 17:07:41", createTime: "2026-08-25 17:07:41", payMethod: "余额", goodsTitle: "2026跨境新品 爱心印花撞色家居服 吊带三件套可外穿源头可定制", sku: "", qty: "3", unitPrice: "CNY56.5", subtotal: "CNY56.5", goodsStatus: "已取消", goodsAmount: "CNY56.5", cnFreight: "CNY0", serviceFee: "CNY0", payable: "CNY56.5", warehouse: "", buyerName: "100088", buyerPhone: "", address: "" },
  ],
  purchaseOrders: [
    { id: "P9001", orderNo: "XP20260823001", status: "待提交支付", purchaser: "buyer-01", amount: "413.77", createTime: "2026-08-23 11:00:00" },
  ],
  afterSales: [],
  pay1688: [
    { id: "P9001", account: "1688-main", amount: "413.77", status: "待付款", createTime: "2026-08-23 11:00:00" },
  ],
  payTaobao: [
    { id: "P9101", account: "tb-main", amount: "288.60", status: "待付款" },
  ],
  subRechargeAudit: [
    subAudit({ id: "340", createTime: "2026-03-03 17:33:50", apply: "2546794016@qq.com", account: "xp-test", water: "333", channel: "333", foreign: 100, ctype: 1, rate: "7.0000", cny: 14.29, code: "1", pay: "CNY 4", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核驳回" }),
    subAudit({ id: "284", createTime: "2026-02-25 16:33:23", apply: "2546794016@qq.com", account: "xp-test", water: "333", channel: "333", foreign: 10, ctype: 1, rate: "7.0000", cny: 81, code: "1", pay: "CNY 4", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核驳回" }),
    subAudit({ id: "283", createTime: "2026-02-25 16:32:38", apply: "2546794016@qq.com", account: "xptest", water: "333", channel: "333", foreign: 10, ctype: 1, rate: "7.0000", cny: 81, code: "122", pay: "CNY 432", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核驳回" }),
    subAudit({ id: "276", createTime: "2026-02-10 14:29:22", apply: "2546794016@qq.com", account: "xptest", water: "333", channel: "333", foreign: 10, ctype: 1, rate: "7.0000", cny: 81, code: "", pay: "", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核通过" }),
    subAudit({ id: "275", createTime: "2026-02-10 13:42:56", apply: "2546794016@qq.com", account: "", water: "333", channel: "333", foreign: 333, ctype: 1, rate: "7.0000", cny: 888, code: "", pay: "", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核驳回" }),
    subAudit({ id: "274", createTime: "2026-02-10 13:41:54", apply: "2546794016@qq.com", account: "testcg", water: "333", channel: "333", foreign: 333, ctype: 1, rate: "7.0000", cny: 888, code: "", pay: "", files: subFile("sub-a.jpeg"), remark: "5555kkkk", status: "审核驳回" }),
    subAudit({ id: "273", createTime: "2026-02-10 11:33:02", apply: "2546794016@qq.com", account: "xp-test", water: "号4", channel: "566", foreign: 22, ctype: 23, rate: "33.0000", cny: 66, code: "", pay: "", files: subFile("sub-a.jpeg"), remark: "5555", status: "审核驳回" }),
    subAudit({ id: "190", createTime: "2026-01-29 15:59:47", apply: "2546794016@qq.com", account: "xptest", water: "号4", channel: "566", foreign: 22, ctype: 23, rate: "33.0000", cny: 66, code: "", pay: "", files: subFile("sub-a.jpeg"), remark: "，5555", status: "审核驳回" }),
    subAudit({ id: "189", createTime: "2026-01-29 15:55:03", apply: "", account: "xptest", water: "11", channel: "22", foreign: 11, ctype: 23, rate: "22.0000", cny: 22, code: "", pay: "", files: subFile("sub-b.png"), remark: "33", status: "审核通过" }),
    subAudit({ id: "22", createTime: "2026-01-08 11:29:37", apply: "", account: "xp-test", water: "11", channel: "22", foreign: 33, ctype: 0, rate: "44.0000", cny: 54, code: "", pay: "", files: subFile("sub-c.png"), remark: "44", status: "审核通过" }),
    subAudit({ id: "8", createTime: "2025-12-22 15:38:33", apply: "", account: "xp-test", water: "11", channel: "11", foreign: 11, ctype: 0, rate: "22.0000", cny: 22, code: "", pay: "", files: subFile("sub-d.png", "sub-e.png"), remark: "eee", status: "待审核" }),
    subAudit({ id: "3", createTime: "2025-12-17 19:09:41", apply: "", account: "test", water: "22", channel: "22", foreign: 22, ctype: 0, rate: "22.0000", cny: 22, code: "", pay: "", files: subFile("sub-f.png"), remark: "", status: "审核驳回" }),
    subAudit({ id: "2", createTime: "2025-12-17 18:54:56", apply: "", account: "xp-test", water: "43", channel: "34", foreign: 3, ctype: 0, rate: "33.0000", cny: 300, code: "", pay: "", files: subFile("sub-f.png"), remark: "", status: "审核通过" }),
    subAudit({ id: "1", createTime: "2025-12-17 17:54:02", apply: "", account: "testcg", water: "11", channel: "11", foreign: 22, ctype: 0, rate: "22.1100", cny: 220, code: "", pay: "", files: subFile("sub-g.png"), remark: "啊啊啊", status: "审核通过" }),
  ],
  balanceStats: [
    { account: "testcg", balance: "￥150.8" },
    { account: "xp-test", balance: "￥33.13" },
    { account: "xptest", balance: "￥103" },
  ],
  rechargeApply: [
    { id: "340", createTime: "2026-03-03 17:33:50", applyAccount: "2546794016@qq.com", rechargeAccount: "xp-test", waterNo: "333", channel: "333", amount: "USD 100", rate: "7.0000", converted: "CNY 14.29", customerCode: "1", payAmount: "CNY 4", file: "附件", applyStatus: "已完结", remark: "5555kkkk", status: "审核驳回\n驳回原因：测试" },
    { id: "284", createTime: "2026-02-25 16:33:23", applyAccount: "2546794016@qq.com", rechargeAccount: "xp-test", waterNo: "333", channel: "333", amount: "USD 10", rate: "7.0000", converted: "CNY 81", customerCode: "1", payAmount: "CNY 4", file: "附件", applyStatus: "已完结", remark: "5555kkkk", status: "审核驳回\n驳回原因：测试" },
    { id: "283", createTime: "2026-02-25 16:32:38", applyAccount: "2546794016@qq.com", rechargeAccount: "xptest", waterNo: "333", channel: "333", amount: "USD 10", rate: "7.0000", converted: "CNY 81", customerCode: "122", payAmount: "CNY 432", file: "附件", applyStatus: "已完结", remark: "5555kkkk", status: "审核驳回\n驳回原因：测试" },
    { id: "22", createTime: "2026-01-08 11:29:37", applyAccount: "xp-test", rechargeAccount: "xp-test", waterNo: "11", channel: "22", amount: "CNY 33", rate: "44.0000", converted: "CNY 54", customerCode: "", payAmount: "", file: "", applyStatus: "已完结", remark: "44", status: "审核通过" },
  ],
  bills: [
    { id: "7167", createTime: "2026-09-15 00:08:43", account: "xp-test", type: "取消订单回款", amount: "0", balance: "33.13", platform: "1688", relatedNo: "3317005848349024695", remark: "", operator: "xp-test" },
    { id: "4785", createTime: "2026-06-02 13:38:22", account: "xp-test", type: "取消提交支付退款", amount: "+32.55", balance: "33.13", platform: "1688", relatedNo: "3305519402071134260", remark: "", operator: "xp-test" },
    { id: "4784", createTime: "2026-06-02 13:37:20", account: "xp-test", type: "支付扣款", amount: "-32.55", balance: "0.58", platform: "1688", relatedNo: "3305519402071134260", remark: "", operator: "xp-test" },
    { id: "2908", createTime: "2026-04-03 11:41:35", account: "xp-test", type: "支付扣款", amount: "-13.97", balance: "33.13", platform: "1688", relatedNo: "3294001560716134260", remark: "", operator: "xp-test" },
    { id: "2907", createTime: "2026-04-03 11:41:20", account: "xp-test", type: "取消提交支付退款", amount: "+13.97", balance: "47.1", platform: "1688", relatedNo: "3294001560716134260", remark: "", operator: "xp-test" },
    { id: "2906", createTime: "2026-04-03 11:41:19", account: "xp-test", type: "支付扣款", amount: "-13.97", balance: "33.13", platform: "1688", relatedNo: "3294001560716134260", remark: "", operator: "xp-test" },
    { id: "2905", createTime: "2026-04-03 11:41:18", account: "xp-test", type: "取消提交支付退款", amount: "+13.97", balance: "47.1", platform: "1688", relatedNo: "3294001560716134260", remark: "", operator: "xp-test" },
    { id: "2904", createTime: "2026-04-03 11:41:17", account: "xp-test", type: "支付扣款", amount: "-13.97", balance: "33.13", platform: "1688", relatedNo: "3294001560716134260", remark: "", operator: "xp-test" },
    { id: "2903", createTime: "2026-04-03 11:40:27", account: "xp-test", type: "取消提交支付退款", amount: "+19.8", balance: "47.1", platform: "Taobao", relatedNo: "200105923936", remark: "", operator: "xp-test" },
    { id: "2902", createTime: "2026-04-03 11:40:25", account: "xp-test", type: "支付扣款", amount: "-19.8", balance: "27.3", platform: "Taobao", relatedNo: "200105923936", remark: "", operator: "xp-test" },
  ],
  userRecharge: [
    recharge("AY482348246547816448", "2026-08-24 00:39:44", "万里汇", "审核通过", "300"),
    recharge("AY482342032044711936", "2026-08-24 00:15:02", "银行转账", "待审核", ""),
    recharge("AY482331657401745408", "2026-08-23 23:33:48", "银行转账", "审核通过", "200"),
    recharge("AY482299671889567744", "2026-08-23 21:26:42", "万里汇", "审核通过", "100"),
    recharge("AY482299586652921856", "2026-08-23 21:26:22", "万里汇", "待审核", ""),
    recharge("AY482299572679032832", "2026-08-23 21:26:19", "万里汇", "待审核", ""),
    recharge("AY482299520581582848", "2026-08-23 21:26:06", "万里汇", "待审核", ""),
    recharge("AY482299469788561408", "2026-08-23 21:25:54", "银行转账", "待审核", ""),
    recharge("AY482299383216594944", "2026-08-23 21:25:34", "万里汇", "待审核", ""),
    recharge("AY482299325347782656", "2026-08-23 21:25:20", "银行转账", "待审核", ""),
    recharge("AY482299272277254144", "2026-08-23 21:25:07", "万里汇", "待审核", ""),
    recharge("AY482295159235231744", "2026-08-23 21:08:47", "万里汇", "审核通过", "14.7"),
    recharge("AY482160657376690176", "2026-08-23 12:14:19", "万里汇", "审核通过", "799.11"),
    recharge("AY386244374366773248", "2025-12-01 19:57:15", "银行转账", "审核通过", "14.7", "png"),
    recharge("AY384741395261288448", "2025-11-27 16:24:57", "银行转账", "审核通过", "14.7", "png"),
    recharge("AY383612989943574528", "2025-11-24 13:41:04", "银行转账", "审核通过", "1470.58", "png"),
    recharge("AY383610835252404224", "2025-11-24 13:32:30", "银行转账", "待审核", "", "png"),
    recharge("AY379640735122190336", "2025-11-13 14:36:45", "银行转账", "待审核", "", "jpg", "100087"),
    recharge("AY378961015473000448", "2025-11-11 17:35:47", "银行转账", "审核通过", "1470.58", "png"),
    recharge("AY378561301070041088", "2025-11-10 15:07:28", "银行转账", "审核通过", "147.05", "png"),
    recharge("AY378561136359723008", "2025-11-10 15:06:48", "银行转账", "待审核", "", "png"),
    recharge("AY378556281457037312", "2025-11-10 14:47:31", "银行转账", "待审核", "", "png"),
    recharge("AY378512925192462336", "2025-11-10 11:55:14", "银行转账", "审核通过", "147.05", "png"),
    recharge("AY378506755371278336", "2025-11-10 11:30:43", "银行转账", "审核通过", "73.52", "png"),
  ],
  warehouses: [
    { name: "佛上仓22", nameEn: "foshan", address: "广东省佛山市南海区狮山镇前进东路1号", zip: "1111111", status: "已启用", type: "私有仓库" },
    { name: "宝盛923-义乌仓库", nameEn: "宝盛", address: "浙江省金华市义乌市北苑街道秋实路78号6号楼1层", zip: "3100", status: "已启用", type: "私有仓库" },
  ],
  accounts: [
    { id: "1", account: "xptest", userName: "xptest", phone: "11", role: "采购员", dept: "采购部", status: "启用", operator: "xp-test", createTime: "2025-12-22 19:10:00" },
    { id: "2", account: "test2", userName: "test", phone: "11", role: "采购员", dept: "采购部", status: "启用", operator: "xp-test", createTime: "2025-12-17 19:04:16" },
    { id: "3", account: "testcg", userName: "testcg", phone: "111", role: "采购员", dept: "采购部", status: "启用", operator: "xp-test", createTime: "2025-12-01 10:21:08" },
    { id: "4", account: "xp-test", userName: "xp-test", phone: "15235481275", role: "自助建站,子账号余额账户,淘宝采购经理,1688采购经理", dept: "采购SaaS", status: "启用", operator: "洋葱骑士", createTime: "2023-11-28 10:24:25", locked: "1" },
  ],
  roles: [
    { id: "1", roleName: "管理员", sort: "1", desc: "全部权限", memberNum: "3" },
    { id: "2", roleName: "采购员", sort: "2", desc: "采购与订单", memberNum: "5" },
    { id: "3", roleName: "财务", sort: "3", desc: "支付与审核", memberNum: "2" },
  ],
  depts: [
    { id: "1", deptName: "采购部", memberNum: "3", sort: "1", createTime: "2025-12-01 10:20:32", parent: "0", shop: "", remark: "" },
  ],
}

export const notice = {
  title: "📢 【Xport 公告】淘宝商品采购已上线",
  desc1: "如有需要，请通过",
  link: "https://distributor.taobao.global/apps/user/register?rc=xport01",
  desc2: "完成注册，或是使用xport提供的账号，随后联系xport获取技术支持。",
  ok: "我知道了",
}

void rows
