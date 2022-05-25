import { setupPreviews } from "@previewjs/plugin-react/setup";
import { observer } from "mobx-react-lite";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import type { MenuItem } from "../../pages/api/restaurants/[id]";
import { MenuItemPicker } from "../MenuItemPicker/MenuItemPicker";

export const MenuPicker = observer(
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
          <MenuItemPicker
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

setupPreviews(MenuPicker, {
  example: {
    items: RESTAURANT_LIST[0].menu,
    pickedItems: {},
  },
});
