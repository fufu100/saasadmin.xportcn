# 1688待支付订单

## Interaction model
click-driven: card tabs (待付款/支付中/支付失败) then line tabs (先采后付/跨境宝/网商银行跨境直采/支付宝), search, card list, popconfirm 支付, batch dialog.

## Layout (source)
1. White card: Element **card** tabs on first row
2. Search grid 3 columns: 采购订单号 textarea 82px, 客户ID, 客户订单号, 下单时间 daterange `开始日期 : 结束日期`, 搜索/清空
3. **Line** tabs with counts
4. 全选 + 批量支付（最多勾选10条）
5. Order cards: platform logo, meta, 支付 popconfirm「确认支付订单吗」, goods table columns 商品详情/应付金额/预估采购价/订单状态, footer totals
6. 共 N 条 + pager + 10条/页

Taobao page is the same card list but **only** the three status tabs (no channel tabs).
