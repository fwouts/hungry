import { makeAutoObservable, runInAction } from "mobx";
import React from "react";
import type {
  RestaurantItem,
  RestaurantListResponse,
} from "./pages/api/restaurants";

export class AppState {
  status:
    | {
        kind: "loading";
        restaurantList?: undefined;
      }
    | {
        kind: "success";
        restaurantList: RestaurantItem[];
      }
    | {
        kind: "error";
        restaurantList?: undefined;
      } = {
    kind: "loading",
  };

  constructor(restaurantList?: RestaurantItem[]) {
    makeAutoObservable(this);
    if (restaurantList) {
      this.status = {
        kind: "success",
        restaurantList,
      };
    }
  }

  async load() {
    if (this.status.kind === "success") {
      return;
    }
    try {
      this.status = {
        kind: "loading",
      };
      const response = await fetch("/api/restaurants");
      if (response.status === 200) {
        const data = (await response.json()) as RestaurantListResponse;
        runInAction(() => {
          this.status = {
            kind: "success",
            restaurantList: data.restaurants,
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
}

export const AppStateContext = React.createContext<AppState>(null! as AppState);
