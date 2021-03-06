import { observer } from "mobx-react-lite";
import type { MenuItem } from "../../pages/api/restaurants/[id]";
import { RestaurantMenuItem } from "../RestaurantMenuItem/RestaurantMenuItem";

export const RestaurantMenu = observer(
  ({
    items,
    pickedItems,
    onUpdateItem,
  }: {
    items: MenuItem[];
    pickedItems: Record<string, number>;
    onUpdateItem(itemId: string, count: number): void;
  }) => {
    return (
      <div className="rounded-lg overflow-hidden">
        {items.map((item) => (
          <RestaurantMenuItem
            key={item.id}
            menuItem={item}
            count={pickedItems[item.id] || 0}
            onUpdate={(count) => onUpdateItem(item.id, count)}
          />
        ))}
      </div>
    );
  }
);
