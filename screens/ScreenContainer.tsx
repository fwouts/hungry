import React from "react";
import "../styles/globals.css";

export const ScreenContainer: React.FC = ({ children }) => {
  return (
    <div className="p-4">
      <div className="max-w-prose mx-auto rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};
