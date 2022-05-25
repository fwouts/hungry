import { makeAutoObservable, runInAction } from "mobx";
import type { RestaurantDetailsResponse } from "../../pages/api/restaurants/[id]";

export class RestaurantDetailsPageState {
  status:
    | {
        kind: "loading";
      }
    | {
        kind: "success";
        restaurant: RestaurantDetailsResponse;
      }
    | {
        kind: "error";
      } = {
    kind: "loading",
  };
  pickedItems: Record<string, number> = {};

  constructor(readonly restaurantId: string) {
    makeAutoObservable(this);
  }

  async load(restaurant?: RestaurantDetailsResponse) {
    if (restaurant) {
      this.status = {
        kind: "success",
        restaurant,
      };
      return;
    }
    if (this.status.kind === "success") {
      return;
    }
    runInAction(() => {
      this.status = {
        kind: "loading",
      };
    });
    try {
      const response = await fetch(`/api/restaurants/${this.restaurantId}`);
      if (response.status === 200) {
        const data = (await response.json()) as RestaurantDetailsResponse;
        runInAction(() => {
          this.status = {
            kind: "success",
            restaurant: data,
          };
        });
      } else {
        runInAction(() => {
          this.status = {
            kind: "error",
          };
        });
      }
    } catch {
      runInAction(() => {
        this.status = {
          kind: "error",
        };
      });
    }
  }

  updateItemCount(itemId: string, count: number) {
    if (count > 0) {
      this.pickedItems[itemId] = count;
    } else {
      delete this.pickedItems[itemId];
    }
  }
}
