"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addCheatSheet,
  ICheatSheetResponse,
} from "@/store/reducers/cheatSheets";
import { setSideMenu } from "@/store/reducers/sideMenu";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { FC, useRef } from "react";

interface ISideMenuProps {
  cheatSheets: ICheatSheetResponse[];
}

const SideMenu: FC<ISideMenuProps> = ({ cheatSheets }) => {
  const dispatch = useAppDispatch();
  const navRef = useRef(null);
  const menuOpen = useAppSelector((state) => state.sideMenu.open);

  useGSAP(() => {
    // ... existing GSAP animation code ...
  }, [menuOpen]);

  return (
    <aside
      ref={navRef}
      className={`fixed right-0 top-0 z-50 flex h-screen w-96 flex-col border-l-4 border-grey-dark bg-white shadow-lg shadow-grey-light transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-20 items-center justify-center px-4 uppercase">
        <h1 className="text-2xl font-bold text-grey-dark">Cheat Sheets</h1>
        <div
          onClick={() => dispatch(setSideMenu(!menuOpen))}
          className={clsx(
            "absolute right-4 flex h-8 w-8 cursor-pointer items-center justify-center border-2 border-black bg-white text-grey-dark transition-all duration-300 hover:shadow-md",
            { "invisible hidden": !menuOpen },
          )}
        >
          X
        </div>
      </div>

      <nav className="flex-grow overflow-y-scroll">
        <ul className="space-y-1 p-2">
          {cheatSheets.map((sheet, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-lg font-bold text-grey-dark"
                onClick={() => dispatch(addCheatSheet(sheet))}
              >
                {sheet.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
