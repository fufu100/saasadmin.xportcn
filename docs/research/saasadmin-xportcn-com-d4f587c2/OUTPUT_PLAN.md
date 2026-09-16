# Output Plan — saasadmin.xportcn.com

- **Source origin:** https://saasadmin.xportcn.com
- **Entry URL:** https://saasadmin.xportcn.com/#/login
- **App root:** `.` (untouched Next.js template; first clone)
- **Site key:** `saasadmin-xportcn-com-d4f587c2`
- **Stack observed:** Vue 2.6 + Vue Router hash mode + Vuex + Element UI 2.15.6 + Avue 2.10.16
- **Routing rule:** Hash paths (`#/login`, `#/dashboard`, …) map 1:1 to App Router pathnames. `/` redirects to `/login`.

## Destination routes

| Source | Destination | Page key |
| --- | --- | --- |
| `#/login` | `/login` | `login-7e93fba0` |
| `#/dashboard` | `/dashboard` | `dashboard-89347bb2` |
| `#/web-config/base-info/index` | `/web-config/base-info/index` | `web-config-base-info-index-cfb19c97` |
| `#/web-config/pay/index` | `/web-config/pay/index` | `web-config-pay-index-e100a1ed` |
| `#/web-config/page-module/index` | `/web-config/page-module/index` | `web-config-page-module-index-9a44e903` |
| `#/user/index` | `/user/index` | `user-index-118d96d1` |
| `#/order/list` | `/order/list` | `order-list-ea3ad788` |
| `#/order/purchase-list` | `/order/purchase-list` | `order-purchase-list-c7f8f02e` |
| `#/order/after-sale/index` | `/order/after-sale/index` | `order-after-sale-index-a23f7919` |
| `#/finance/order-pay` | `/finance/order-pay` | `finance-order-pay-ef439e68` |
| `#/finance/tb-order-pay` | `/finance/tb-order-pay` | `finance-tb-order-pay-c5da1210` |
| `#/finance/sub-account-recharge-review` | `/finance/sub-account-recharge-review` | `finance-sub-account-recharge-review-2418f24a` |
| `#/finance/account-balance-statistics` | `/finance/account-balance-statistics` | `finance-account-balance-statistics-8f2d5c31` |
| `#/account-balance/recharge-application` | `/account-balance/recharge-application` | `account-balance-recharge-application-cdc26e4a` |
| `#/account-balance/bill-statement` | `/account-balance/bill-statement` | `account-balance-bill-statement-dda5d413` |
| `#/money/userRecharge/index` | `/money/userRecharge/index` | `money-userRecharge-index-3f4cb91b` |
| `#/logistics/warehouse-manage` | `/logistics/warehouse-manage` | `logistics-warehouse-manage-8325e443` |
| `#/system/user` | `/system/user` | `system-user-bbaf6e3c` |
| `#/authority/role` | `/authority/role` | `authority-role-ee4a025a` |
| `#/system/dept` | `/system/dept` | `system-dept-22b7ad2a` |

Shared foundation files: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx` (scaffold replaced with redirect).

Mock login (UI only): `xp-test` / `test`. No production tokens are stored in this repo.
