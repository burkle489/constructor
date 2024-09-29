"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Button from "../../atoms/Button";
import { setSideMenu } from "@/store/reducers/sideMenu";

const CheatSheetsButton = () => {
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((state) => state.sideMenu.open);

  return (
    <Button onClick={() => dispatch(setSideMenu(!menuOpen))}>
      cheat sheets
    </Button>
  );
};

export default CheatSheetsButton;
