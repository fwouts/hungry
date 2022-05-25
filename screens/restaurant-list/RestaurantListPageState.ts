import { makeAutoObservable } from "mobx";
import { AppState } from "../../AppState";

export class RestaurantListPageState {
  search = "";

  constructor(private readonly app: AppState) {
    makeAutoObservable(this);
  }

  setSearch(search: string) {
    this.search = search;
  }

  get filteredRestaurantList() {
    const search = this.search.toLowerCase().trim();
    return (
      this.app.status.restaurantList?.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search)
      ) || []
    );
  }
}
