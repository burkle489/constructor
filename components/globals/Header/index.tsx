import CheatSheetsButton from "@/components/molecules/CheatSheetsButton";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 flex h-20 w-screen items-center justify-between border-b-4 border-grey-dark px-6">
      <h1 className="text-center text-5xl font-bold text-grey-dark">frase</h1>
      <CheatSheetsButton />
    </div>
  );
};

export default Header;
