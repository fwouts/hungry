import { makeAutoObservable } from "mobx";
import { AppState } from "../../AppState";
export class RestaurantDetailsPageState {
  pickedItems: Record<string, number> = {};

  constructor(
    private readonly app: AppState,
    private readonly restaurantId: string
  ) {
    makeAutoObservable(this);
  }

  get restaurant() {
    return this.app.restaurantList.find((r) => r.id === this.restaurantId);
  }

  updateItemCount(itemId: string, count: number) {
    if (count > 0) {
      this.pickedItems[itemId] = count;
    } else {
      delete this.pickedItems[itemId];
    }
  }
}
