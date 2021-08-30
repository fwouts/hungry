export interface Restaurant {
  id: string;
  name: string;
  photoUrl: string;
  menu: Menu;
}

export type Menu = MenuItem[];

export interface MenuItem {
  id: string;
  name: string;
  photoUrl: string;
}
