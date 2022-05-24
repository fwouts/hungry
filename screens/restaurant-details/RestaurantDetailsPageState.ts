import { Atom, atom } from "jotai";
import { AppState } from "../../AppState";
import { RestaurantData } from "../../models";

export class RestaurantDetailsPageState {
  readonly restaurantAtom: Atom<RestaurantData | null>;
  readonly pickedItemsAtom = atom<Record<string, number>>({});

  constructor(app: AppState, restaurantId: string) {
    this.restaurantAtom = atom((get) => {
      const match = get(app.restaurantList).find(
        (restaurant) => restaurant.id === restaurantId
      );
      return match || null;
    });
  }
}
