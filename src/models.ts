export interface Restaurant {
  id: string;
  name: string;
  menu: Menu;
}

export type Menu = MenuSection[];

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  photoUrl?: string;
}
