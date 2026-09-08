export const mockOrders = {
  status: 200,
  timestamp: "2026-09-07T11:00:00",
  message: "주문 목록 조회 성공",

  data: [
    {
      orderId: 21,
      isTakeOut: false,
      tableNumber: 3,
      orderPrice: 26500,

      status: "WAITING",
      estimatedTime: null,

      createdAt: "2026-09-07T10:55:00",
      modifiedAt: "2026-09-07T10:55:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "코카콜라",
          quantity: 1,
          price: 3000,
        },
        {
          menuName: "소롱포",
          quantity: 1,
          price: 9500,
        },
        {
          menuName: "새우 샤오마이",
          quantity: 1,
          price: 14000,
        },
      ],
    },

    {
      orderId: 20,
      isTakeOut: false,
      tableNumber: 5,
      orderPrice: 42000,

      status: "WAITING",
      estimatedTime: null,

      createdAt: "2026-09-07T10:50:00",
      modifiedAt: "2026-09-07T10:50:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "짬뽕",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "탕수육",
          quantity: 1,
          price: 30000,
        },
      ],
    },

    {
      orderId: 19,
      isTakeOut: false,
      tableNumber: 3,
      orderPrice: 22000,

      status: "PREPARING",
      estimatedTime: 10,

      createdAt: "2026-09-07T10:30:00",
      modifiedAt: "2026-09-07T10:35:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 18,
      isTakeOut: false,
      tableNumber: 2,
      orderPrice: 49000,

      status: "PREPARING",
      estimatedTime: 15,

      createdAt: "2026-09-07T10:20:00",
      modifiedAt: "2026-09-07T10:25:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "라구짜장",
          quantity: 2,
          price: 13000,
        },
        {
          menuName: "새우볶음밥",
          quantity: 1,
          price: 13000,
        },
        {
          menuName: "소롱포",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 17,
      isTakeOut: false,
      tableNumber: 3,
      orderPrice: 26500,

      status: "SERVED",
      estimatedTime: 10,

      createdAt: "2026-09-07T09:50:00",
      modifiedAt: "2026-09-07T10:15:00",
      servedAt: "2026-09-07T10:15:00",
      completedAt: null,

      orderDetail: [
        {
          menuName: "코카콜라",
          quantity: 1,
          price: 3000,
        },
        {
          menuName: "소롱포",
          quantity: 1,
          price: 9500,
        },
        {
          menuName: "새우 샤오마이",
          quantity: 1,
          price: 14000,
        },
      ],
    },

    {
      orderId: 16,
      isTakeOut: false,
      tableNumber: 1,
      orderPrice: 34000,

      status: "SERVED",
      estimatedTime: 15,

      createdAt: "2026-09-07T09:40:00",
      modifiedAt: "2026-09-07T10:10:00",
      servedAt: "2026-09-07T10:10:00",
      completedAt: null,

      orderDetail: [
        {
          menuName: "짬뽕",
          quantity: 2,
          price: 12000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 15,
      isTakeOut: false,
      tableNumber: 4,
      orderPrice: 39000,

      status: "COMPLETED",
      estimatedTime: 15,

      createdAt: "2026-09-07T08:50:00",
      modifiedAt: "2026-09-07T09:40:00",
      servedAt: "2026-09-07T09:20:00",
      completedAt: "2026-09-07T09:40:00",

      orderDetail: [
        {
          menuName: "양장피",
          quantity: 1,
          price: 27000,
        },
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
      ],
    },

    {
      orderId: 14,
      isTakeOut: false,
      tableNumber: 6,
      orderPrice: 27000,

      status: "COMPLETED",
      estimatedTime: 10,

      createdAt: "2026-09-07T08:20:00",
      modifiedAt: "2026-09-07T09:10:00",
      servedAt: "2026-09-07T08:50:00",
      completedAt: "2026-09-07T09:10:00",

      orderDetail: [
        {
          menuName: "새우볶음밥",
          quantity: 1,
          price: 15000,
        },
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
      ],
    },

    {
      orderId: 13,
      isTakeOut: false,
      tableNumber: 5,
      orderPrice: 52000,

      status: "COMPLETED",
      estimatedTime: 15,

      createdAt: "2026-09-06T18:10:00",
      modifiedAt: "2026-09-06T19:00:00",
      servedAt: "2026-09-06T18:40:00",
      completedAt: "2026-09-06T19:00:00",

      orderDetail: [
        {
          menuName: "탕수육",
          quantity: 1,
          price: 30000,
        },
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 12,
      isTakeOut: false,
      tableNumber: 2,
      orderPrice: 27000,

      status: "COMPLETED",
      estimatedTime: 10,

      createdAt: "2026-09-05T13:10:00",
      modifiedAt: "2026-09-05T14:00:00",
      servedAt: "2026-09-05T13:35:00",
      completedAt: "2026-09-05T14:00:00",

      orderDetail: [
        {
          menuName: "새우볶음밥",
          quantity: 1,
          price: 15000,
        },
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
      ],
    },

    {
      orderId: 11,
      isTakeOut: false,
      tableNumber: 7,
      orderPrice: 46000,

      status: "COMPLETED",
      estimatedTime: 15,

      createdAt: "2026-09-03T18:20:00",
      modifiedAt: "2026-09-03T19:20:00",
      servedAt: "2026-09-03T18:50:00",
      completedAt: "2026-09-03T19:20:00",

      orderDetail: [
        {
          menuName: "탕수육",
          quantity: 1,
          price: 30000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
        {
          menuName: "코카콜라",
          quantity: 2,
          price: 3000,
        },
      ],
    },

    {
      orderId: 10,
      isTakeOut: true,
      tableNumber: null,
      orderPrice: 22000,

      status: "WAITING",
      estimatedTime: null,

      createdAt: "2026-09-07T10:58:00",
      modifiedAt: "2026-09-07T10:58:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 9,
      isTakeOut: true,
      tableNumber: null,
      orderPrice: 15000,

      status: "PREPARING",
      estimatedTime: 5,

      createdAt: "2026-09-07T10:10:00",
      modifiedAt: "2026-09-07T10:15:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "새우볶음밥",
          quantity: 1,
          price: 15000,
        },
      ],
    },

    {
      orderId: 8,
      isTakeOut: true,
      tableNumber: null,
      orderPrice: 25000,

      status: "SERVED",
      estimatedTime: 10,

      createdAt: "2026-09-07T09:40:00",
      modifiedAt: "2026-09-07T10:05:00",
      servedAt: "2026-09-07T10:05:00",
      completedAt: null,

      orderDetail: [
        {
          menuName: "짬뽕",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "새우볶음밥",
          quantity: 1,
          price: 13000,
        },
      ],
    },

    {
      orderId: 7,
      isTakeOut: true,
      tableNumber: null,
      orderPrice: 22000,

      status: "COMPLETED",
      estimatedTime: 10,

      createdAt: "2026-09-07T08:30:00",
      modifiedAt: "2026-09-07T09:00:00",
      servedAt: "2026-09-07T08:55:00",
      completedAt: "2026-09-07T09:00:00",

      orderDetail: [
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
        {
          menuName: "군만두",
          quantity: 1,
          price: 10000,
        },
      ],
    },

    {
      orderId: 6,
      isTakeOut: false,
      tableNumber: 1,
      orderPrice: 21500,

      status: "CANCELED",
      estimatedTime: null,

      cancelReason: "재료 소진",
      soldOutMenus: ["소롱포"],

      createdAt: "2026-09-07T08:10:00",
      modifiedAt: "2026-09-07T08:15:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "소롱포",
          quantity: 1,
          price: 9500,
        },
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
      ],
    },

    {
      orderId: 5,
      isTakeOut: true,
      tableNumber: null,
      orderPrice: 12000,

      status: "CANCELED",
      estimatedTime: null,

      cancelReason: "라스트 오더 종료",
      soldOutMenus: [],

      createdAt: "2026-09-06T21:20:00",
      modifiedAt: "2026-09-06T21:22:00",
      servedAt: null,
      completedAt: null,

      orderDetail: [
        {
          menuName: "짜장면",
          quantity: 1,
          price: 12000,
        },
      ],
    },
  ],
};
