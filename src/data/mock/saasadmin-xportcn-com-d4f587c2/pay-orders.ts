export type PayGoods = {
  title: string
  sku: string
  qty: number
  image: string
  orderNo: string
  subOrderNo: string
  payable: string
  estimate: string
  status: string
}

export type PayOrder = {
  id: string
  purchaseNo: string
  createdAt: string
  customerOrderNo: string
  userId: string
  purchaser: string
  warehouse: string
  address: string
  goodsAmount: string
  cnFreight: string
  discount?: string
  total: string
  channel: string
  statusTab: "待付款" | "支付中" | "支付失败"
  goods: PayGoods[]
}

export const pay1688Orders: PayOrder[] = [
  {
    id: "1",
    purchaseNo: "3317027124122098250",
    createdAt: "2026-09-15 00:45:57",
    customerOrderNo: "SO482967723159576576",
    userId: "100088",
    purchaser: "xp-test",
    warehouse: "宝盛923-义乌仓库",
    address: "姓名：川高 手机号码：13395797923 邮编：3100 地址：浙江省金华市义乌市北苑街道秋实路78号6号楼1层",
    goodsAmount: "148",
    cnFreight: "5",
    discount: "148",
    total: "5",
    channel: "先采后付",
    statusTab: "待付款",
    goods: [
      {
        title: "45度斜裁高支荃亚麻 新中式清冷感无袖连衣裙气质背心裙",
        sku: "颜色:亚麻本色  尺码:S",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/dress.jpg",
        orderNo: "3317027124122098250",
        subOrderNo: "SO482967726686986240",
        payable: "148",
        estimate: "148",
        status: "待付款",
      },
    ],
  },
  {
    id: "2",
    purchaseNo: "4951175474334796607",
    createdAt: "2025-12-17 18:40:15",
    customerOrderNo: "SO392004695610351616",
    userId: "100088",
    purchaser: "testcg",
    warehouse: "--",
    address: "",
    goodsAmount: "20.4",
    cnFreight: "4",
    discount: "1.02",
    total: "23.38",
    channel: "先采后付",
    statusTab: "待付款",
    goods: [
      {
        title: "跨境批发男鞋潮流新款跑步男鞋百搭户外男士运动鞋时尚网面透气鞋",
        sku: "颜色:白蓝2403  尺码:38",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/shoe-blue.jpg",
        orderNo: "4951175474334796607",
        subOrderNo: "SO392004695593574400",
        payable: "20.4",
        estimate: "20.4",
        status: "待付款",
      },
    ],
  },
  {
    id: "3",
    purchaseNo: "4950985862651796607",
    createdAt: "2025-12-17 17:24:51",
    customerOrderNo: "SO392003404285997056",
    userId: "100088",
    purchaser: "testcg",
    warehouse: "--",
    address: "",
    goodsAmount: "24",
    cnFreight: "3.5",
    total: "27.5",
    channel: "先采后付",
    statusTab: "待付款",
    goods: [
      {
        title: "纯黑男鞋秋季2025新款工作劳保鞋防滑耐磨男士跑步运动老爹鞋厚底",
        sku: "颜色:F107灰色  尺码:41",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/shoe-gray.jpg",
        orderNo: "4950985862651796607",
        subOrderNo: "SO392003404256636928",
        payable: "24",
        estimate: "24",
        status: "待付款",
      },
    ],
  },
  {
    id: "4",
    purchaseNo: "3317027124122098250",
    createdAt: "2026-09-15 00:45:57",
    customerOrderNo: "SO482967723159576576",
    userId: "100088",
    purchaser: "xp-test",
    warehouse: "宝盛923-义乌仓库",
    address: "姓名：川高 手机号码：13395797923 邮编：3100 地址：浙江省金华市义乌市北苑街道秋实路78号6号楼1层",
    goodsAmount: "148",
    cnFreight: "5",
    discount: "148",
    total: "5",
    channel: "支付宝",
    statusTab: "待付款",
    goods: [
      {
        title: "45度斜裁高支荃亚麻 新中式清冷感无袖连衣裙气质背心裙",
        sku: "颜色:亚麻本色  尺码:S",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/dress.jpg",
        orderNo: "3317027124122098250",
        subOrderNo: "SO482967726686986240",
        payable: "148",
        estimate: "148",
        status: "待付款",
      },
    ],
  },
  {
    id: "5",
    purchaseNo: "4951175474334796607",
    createdAt: "2025-12-17 18:40:15",
    customerOrderNo: "SO392004695610351616",
    userId: "100088",
    purchaser: "testcg",
    warehouse: "--",
    address: "",
    goodsAmount: "20.4",
    cnFreight: "4",
    discount: "1.02",
    total: "23.38",
    channel: "支付宝",
    statusTab: "待付款",
    goods: [
      {
        title: "跨境批发男鞋潮流新款跑步男鞋百搭户外男士运动鞋时尚网面透气鞋",
        sku: "颜色:白蓝2403  尺码:38",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/shoe-blue.jpg",
        orderNo: "4951175474334796607",
        subOrderNo: "SO392004695593574400",
        payable: "20.4",
        estimate: "20.4",
        status: "待付款",
      },
    ],
  },
  {
    id: "6",
    purchaseNo: "4950985862651796607",
    createdAt: "2025-12-17 17:24:51",
    customerOrderNo: "SO392003404285997056",
    userId: "100088",
    purchaser: "testcg",
    warehouse: "--",
    address: "",
    goodsAmount: "24",
    cnFreight: "3.5",
    total: "27.5",
    channel: "支付宝",
    statusTab: "待付款",
    goods: [
      {
        title: "纯黑男鞋秋季2025新款工作劳保鞋防滑耐磨男士跑步运动老爹鞋厚底",
        sku: "颜色:F107灰色  尺码:41",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/shoe-gray.jpg",
        orderNo: "4950985862651796607",
        subOrderNo: "SO392003404256636928",
        payable: "24",
        estimate: "24",
        status: "待付款",
      },
    ],
  },
]

export const payTaobaoOrders: PayOrder[] = [
  {
    id: "t1",
    purchaseNo: "200138034494",
    createdAt: "2026-09-15 00:45:22",
    customerOrderNo: "SO490193469455941632",
    userId: "100088",
    purchaser: "xp-test",
    warehouse: "宝盛923-义乌仓库",
    address: "姓名：川高 手机号码：13395797923 邮编：3100 地址：浙江省金华市义乌市北苑街道秋实路78号6号楼1层",
    goodsAmount: "291.2",
    cnFreight: "0",
    total: "291.2",
    channel: "Taobao",
    statusTab: "待付款",
    goods: [
      {
        title: "阿迪达斯加绒卫衣男装2025冬季新款保暖休闲圆领运动套头衫JF3542",
        sku: "颜色分类:JF3542 黑色/加绒  尺码:S",
        qty: 1,
        image: "/sites/saasadmin-xportcn-com-d4f587c2/shared/images/products/hoodie.jpg",
        orderNo: "200138034494",
        subOrderNo: "SO490193477446090752",
        payable: "291.2",
        estimate: "339",
        status: "待付款",
      },
    ],
  },
]
