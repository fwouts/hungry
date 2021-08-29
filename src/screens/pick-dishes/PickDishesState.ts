import { atom } from "jotai";
import { AppState } from "../../AppState";

export class PickDishesState {
  readonly restaurantAtom = atom((get) => {
    const match = get(this.app.restaurantList).find(
      (restaurant) => restaurant.id === this.restaurantId
    );
    if (!match) {
      throw new Error(`No restaurant with ID: ${this.restaurantId}`);
    }
    return match;
  });
  readonly pickedItems = atom<Record<string, number>>({});

  constructor(
    private readonly app: AppState,
    private readonly restaurantId: string
  ) {}
}
