import { Atom, atom } from "jotai";
import { AppState } from "../../AppState";
import { Restaurant } from "../../models";

export class PickDishesState {
  readonly restaurantAtom: Atom<Restaurant | null>;
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
