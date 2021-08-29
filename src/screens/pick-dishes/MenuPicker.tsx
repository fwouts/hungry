import React from "react";
import type { Menu, MenuItem, MenuSection } from "../../AppState";

export const MenuPicker = ({
  menu,
  pickedItems,
  updateItem,
}: {
  menu: Menu;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  return (
    <div className="bg-red-100 p-2">
      {menu.map((menuSection) => (
        <MenuSectionPicker
          key={menuSection.id}
          menuSection={menuSection}
          pickedItems={pickedItems}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

const MenuSectionPicker = ({
  menuSection,
  pickedItems,
  updateItem,
}: {
  menuSection: MenuSection;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  return (
    <>
      <h2 className="text-red-800 py-2 px-3">{menuSection.title}</h2>
      <div className="bg-white rounded-lg overflow-hidden">
        {menuSection.items.map((menuItem) => (
          <MenuItemPicker
            key={menuItem.id}
            menuItem={menuItem}
            pickedItems={pickedItems}
            updateItem={updateItem}
          />
        ))}
      </div>
    </>
  );
};

const MenuItemPicker = ({
  menuItem,
  pickedItems,
  updateItem,
}: {
  menuItem: MenuItem;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  const count = pickedItems[menuItem.id] || 0;
  return (
    <div className="py-2 px-3 flex flex-row justify-between items-center select-none">
      <div className="h-16 w-16">
        {menuItem.photoUrl && (
          <img className="rounded-md" src={menuItem.photoUrl} />
        )}
      </div>
      <div
        className="py-3 px-2 flex-grow cursor-pointer"
        onClick={() => updateItem(menuItem.id, count + 1)}
      >
        {menuItem.name}
      </div>
      {count > 0 && (
        <div className="bg-white flex items-center rounded-xl shadow-md border-2 border-gray-100">
          <span className="rounded-l-full w-full py-1 px-3 text-gray-800 text-lg">
            {count}
          </span>
          <div className="p-1 flex flex-row">
            <UpdateCountButton
              onClick={() => updateItem(menuItem.id, count + 1)}
            >
              +
            </UpdateCountButton>
            <UpdateCountButton
              onClick={() => updateItem(menuItem.id, count - 1)}
            >
              -
            </UpdateCountButton>
          </div>
        </div>
      )}
    </div>
  );
};

const UpdateCountButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button
      className="text-red-700 rounded-full p-2 hover:bg-red-200 focus:outline-none w-8 h-8 flex items-center justify-center"
      {...props}
    />
  );
};

export type UpdateItemFn = (itemId: string, count: number) => void;
