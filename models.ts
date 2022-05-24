export interface RestaurantData {
  id: string;
  name: string;
  photoUrl: string;
  menu: MenuItemData[];
}

export interface MenuItemData {
  id: string;
  name: string;
  photoUrl: string;
}
