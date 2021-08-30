import React from "react";

export const Counter = (props: {
  count: number;
  increaseCount(): void;
  decreaseCount(): void;
}) => {
  return (
    <div className="bg-white flex items-center rounded-xl shadow-md border-2 border-gray-100">
      <span className="rounded-l-full w-full py-1 px-3 text-gray-800 text-lg">
        {props.count}
      </span>
      <div className="p-1 flex flex-row">
        <UpdateCountButton onClick={props.increaseCount}>+</UpdateCountButton>
        <UpdateCountButton onClick={props.decreaseCount}>-</UpdateCountButton>
      </div>
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
