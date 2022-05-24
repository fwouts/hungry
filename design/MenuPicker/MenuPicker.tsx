import { setupPreviews } from "@previewjs/plugin-react/setup";
import { RESTAURANT_LIST } from "../../data";
import { MenuItemData } from "../../models";
import { MenuItemPicker } from "../MenuItemPicker/MenuItemPicker";

export const MenuPicker = ({
  items,
  pickedItems,
  onUpdateItem,
}: {
  items: MenuItemData[];
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
};

setupPreviews(MenuPicker, {
  example: {
    items: RESTAURANT_LIST[0].menu,
    pickedItems: {},
  },
});
