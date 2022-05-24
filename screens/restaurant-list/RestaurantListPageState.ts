import { Atom, atom } from "jotai";
import { AppState, Restaurant } from "../../AppState";

export class RestaurantListPageState {
  readonly searchAtom = atom("");
  readonly filteredRestaurantListAtom: Atom<Restaurant[]>;

  constructor(app: AppState) {
    this.filteredRestaurantListAtom = atom((get) => {
      const search = get(this.searchAtom).toLowerCase().trim();
      return get(app.restaurantList).filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search)
      );
    });
  }
}
