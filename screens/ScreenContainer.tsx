import React from "react";

export const ScreenContainer: React.FC = ({ children }) => {
  return (
    <div className="p-4">
      <div className="max-w-prose mx-auto rounded-xl overflow-hidden filter drop-shadow-xl">
        {children}
      </div>
    </div>
  );
};
