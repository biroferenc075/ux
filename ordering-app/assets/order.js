export const orderHistory = [
  {
    id: 1,
    date: "2024-05-05T20:20:00",
    price: 4000,
    status: "In progress",
  },
  {
    id: 2,
    date: "2024-05-01T10:00:00",
    price: 6000,
    status: "Completed",
  },
  {
    id: 3,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 4,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 5,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 6,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 7,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 8,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 9,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
  {
    id: 10,
    date: "2024-04-20T15:25:00",
    price: 5000,
    status: "Completed",
  },
];

export const orderDetails = [
    { 
        id: 1,
        orderedItems: [
            {
                count: 1,
                foodItem: {
                    id: 2,
                    name : "Chicken Pad Thai",
                    price : 1800,
                    type : "",
                    allergens : [],
                    diets : [],
                    description : "",
                    imageSource : require("./images/food/chicken-pad-thai.jpg")
                },
                priceSum: 1800,
                note: "No spicy please",
                id: 100,
            },
            {
                count: 2,
                foodItem: {
                    id: 5,
                    name : "Sushi Platter",
                    price : 2500,
                    type : "",
                    allergens : [],
                    diets : [],
                    description : "",
                    imageSource : require("./images/food/sushi-platter.jpg")
                },
                priceSum: 5000,
                note: "",
                id: 200,
            },
        ],
        statusMessage: "Let him cook",
        statusImageSrc: require("./dump/chef.png"),
    },
    { 
        id: 2,
        orderedItems: [],
        statusMessage: "Your order is ready",
        statusImageSrc: require("./dump/waiter.jpg"),
    },
    { 
        id: 3,
        orderedItems: [],
        statusMessage: "Your order is ready",
        statusImageSrc: require("./dump/waiter.jpg"),
    },
]
