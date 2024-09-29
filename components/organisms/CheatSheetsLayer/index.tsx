"use client";

import CheatSheet from "@/components/molecules/CheatSheet";
import { useAppSelector } from "@/store/hooks";
import React from "react";

const CheatSheetsLayer = () => {
  const cheatSheets = useAppSelector((state) => state.cheatSheets);

  return (
    <span>
      {cheatSheets.map((cheatSheet, i) => (
        <React.Fragment key={cheatSheet.name + "-" + i}>
          <CheatSheet {...cheatSheet} />
        </React.Fragment>
      ))}
    </span>
  );
};

export default CheatSheetsLayer;
