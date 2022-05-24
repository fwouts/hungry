import { MenuItemData, RestaurantData } from "./models";

const MENU_ITEMS: MenuItemData[] = [
  {
    id: "D1",
    name: "Redbean mooncake",
    photoUrl:
      "https://images.unsplash.com/photo-1628426523105-32b8d1841fc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "D2",
    name: "Lotus paste mooncake",
    photoUrl:
      "https://images.unsplash.com/photo-1629683644947-2b878917876c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "D3",
    name: "Custard mooncake",
    photoUrl:
      "https://images.unsplash.com/photo-1601932167327-8d25a0fb0752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "D4",
    name: "Redbean salted egg yolk mooncake",
    photoUrl:
      "https://images.unsplash.com/photo-1512101638365-72010d90a610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V1",
    name: "Soup noodles with seasonal vegetables",
    photoUrl:
      "https://images.unsplash.com/photo-1585417791023-a5a6164b2646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V2",
    name: "Seasonal vegetable stew",
    photoUrl:
      "https://images.unsplash.com/photo-1603087259549-0e89a252b4f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V3",
    name: "XO sauce okra",
    photoUrl:
      "https://images.unsplash.com/photo-1603246994349-c8083863e469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V4",
    name: "Hong Kong style fried noodles",
    photoUrl:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V5",
    name: "Steamed vegetable dumplings",
    photoUrl:
      "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "V6",
    name: "Steamed mushroom dumplings",
    photoUrl:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M1",
    name: "Kung pao chicken",
    photoUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M2",
    name: "8-hour slow cooked pork",
    photoUrl:
      "https://images.unsplash.com/photo-1623130161074-1ec8ec4abaa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M3",
    name: "BBQ lamb ribs",
    photoUrl:
      "https://images.unsplash.com/photo-1550367363-ea12860cc124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M4",
    name: "Oolong tea steamed prawns",
    photoUrl:
      "https://images.unsplash.com/photo-1603246652198-377d5f7dee34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M5",
    name: "Steamed pork dumplings",
    photoUrl:
      "https://images.unsplash.com/photo-1545809278-56c8739d74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "M6",
    name: "Steamed prawn dumplings",
    photoUrl:
      "https://images.unsplash.com/photo-1606503481351-0231ee0cb92a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J1",
    name: "Shoyu ramen",
    photoUrl:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J2",
    name: "Shoyu ramen with chashu",
    photoUrl:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J3",
    name: "Pulled pork ramen",
    photoUrl:
      "https://images.unsplash.com/photo-1617421753170-46511a8d73fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J4",
    name: "Chicken broth ramen",
    photoUrl:
      "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J5",
    name: "Spicy tonkotsu ramen",
    photoUrl:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J6",
    name: "Miso ramen",
    photoUrl:
      "https://images.unsplash.com/photo-1584739206131-bb0910d6aade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J7",
    name: "Seared beef salad",
    photoUrl:
      "https://images.unsplash.com/photo-1611518040286-9af8ba97ab46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J8",
    name: "Volcano sushi roll",
    photoUrl:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "J9",
    name: "Sashimi don",
    photoUrl:
      "https://images.unsplash.com/photo-1579398937948-598009379315?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "F1",
    name: "Crepes with caramelised banana and chocolate",
    photoUrl:
      "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "F2",
    name: "Crepes with fresh and candied orange",
    photoUrl:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "F3",
    name: "Crepes with seasonal berries and chantilly cream",
    photoUrl:
      "https://images.unsplash.com/photo-1582995570162-9dee25247fda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "F4",
    name: "Chocolate crepe roll",
    photoUrl:
      "https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD1",
    name: " Strawberry cream crepes",
    photoUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD2",
    name: "Seasonal mini pancakes",
    photoUrl:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD3",
    name: "Strawberry milk pudding",
    photoUrl:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD4",
    name: "Strawberry cupcakes",
    photoUrl:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD5",
    name: "Mixed berries waffle",
    photoUrl:
      "https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD6",
    name: "Mixed berries milkshake",
    photoUrl:
      "https://images.unsplash.com/photo-1472555794301-77353b152fb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "JD7",
    name: "Chocolate brownie",
    photoUrl:
      "https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

export function getMenuItemData(id: string): MenuItemData {
  return MENU_ITEMS.find((m) => m.id === id)!;
}

export const RESTAURANT_LIST: RestaurantData[] = [
  {
    id: "1",
    name: "A Taste of China",
    photoUrl:
      "https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("M1"),
      getMenuItemData("M2"),
      getMenuItemData("M3"),
      getMenuItemData("M4"),
      getMenuItemData("V1"),
      getMenuItemData("V2"),
    ],
  },

  {
    id: "2",
    name: "Hong Kong Kitchen",
    photoUrl:
      "https://images.unsplash.com/photo-1559667709-eabb5b50117a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("V3"),
      getMenuItemData("V4"),
      getMenuItemData("V5"),
      getMenuItemData("V6"),
      getMenuItemData("M5"),
      getMenuItemData("M6"),
    ],
  },

  {
    id: "3",
    name: "Sweet Dreams",
    photoUrl:
      "https://images.unsplash.com/photo-1492683513054-55277abccd99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("D1"),
      getMenuItemData("D2"),
      getMenuItemData("D3"),
      getMenuItemData("D4"),
      getMenuItemData("F1"),
      getMenuItemData("F2"),
      getMenuItemData("F3"),
      getMenuItemData("F4"),
    ],
  },
  {
    id: "4",
    name: "Zen Kitchen",
    photoUrl:
      "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("V1"),
      getMenuItemData("V2"),
      getMenuItemData("V3"),
      getMenuItemData("V4"),
      getMenuItemData("V5"),
      getMenuItemData("V6"),
      getMenuItemData("D1"),
      getMenuItemData("D2"),
    ],
  },
  {
    id: "5",
    name: "Mom's Dining",
    photoUrl:
      "https://images.unsplash.com/photo-1572083925563-708dcdb63763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("V1"),
      getMenuItemData("V2"),
      getMenuItemData("V4"),
      getMenuItemData("M1"),
      getMenuItemData("M2"),
      getMenuItemData("M3"),
    ],
  },
  {
    id: "6",
    name: "Creperie Francois",
    photoUrl:
      "https://images.unsplash.com/photo-1565087170449-fa23854a6100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("F1"),
      getMenuItemData("F2"),
      getMenuItemData("F3"),
      getMenuItemData("F4"),
    ],
  },
  {
    id: "7",
    name: "Mochiya",
    photoUrl:
      "https://images.unsplash.com/photo-1491600395818-515d7b81de11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("JD1"),
      getMenuItemData("JD2"),
      getMenuItemData("JD3"),
      getMenuItemData("JD4"),
      getMenuItemData("JD5"),
      getMenuItemData("JD6"),
      getMenuItemData("JD7"),
    ],
  },
  {
    id: "8",
    name: "Ramenya",
    photoUrl:
      "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("J1"),
      getMenuItemData("J2"),
      getMenuItemData("J3"),
      getMenuItemData("J4"),
      getMenuItemData("J5"),
      getMenuItemData("J6"),
    ],
  },
  {
    id: "9",
    name: "Japanese Night Market",
    photoUrl:
      "https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    menu: [
      getMenuItemData("J7"),
      getMenuItemData("J8"),
      getMenuItemData("J9"),
      getMenuItemData("J1"),
      getMenuItemData("J2"),
      getMenuItemData("JD5"),
      getMenuItemData("JD1"),
      getMenuItemData("JD2"),
    ],
  },
];
