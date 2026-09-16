# API contracts (cloned as mock Route Handlers)

Original Blade-style paths observed after login:

- `POST /manage/blade-auth/login`
- `GET /manage/blade-system/menu/routes`
- `GET /manage/blade-system/menu/buttons`
- `GET /manage/shop/detail`
- `GET /manage/home/userAndOrderStatistics`
- `GET /manage/home/orderDataStatistics`

Clone equivalents (no production tokens stored):

- `POST /api/auth/login`
- `GET /api/menu`
- `GET /api/dashboard`
- `GET /api/crud/[resource]` (keyword, page, pageSize)
