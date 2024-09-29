"use client";

import { useAppDispatch } from "@/store/hooks";
import {
  deleteCheatSheet,
  ICheatSheetResponse,
} from "@/store/reducers/cheatSheets";
import clsx from "clsx";
import { FC, useState } from "react";
import Draggable from "react-draggable";

const CheatSheet: FC<ICheatSheetResponse> = (cheatSheet) => {
  const { name } = cheatSheet;
  const dispatch = useAppDispatch();

  const [minimised, setMinimised] = useState(false);
  return (
    <Draggable>
      <div className="absolute left-4 top-4 border-4 border-grey-dark bg-white">
        <div className="flex w-full items-center justify-between gap-4 p-1 px-2">
          <p className="text-md mb-0 font-bold uppercase text-grey-dark">
            {name}
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => setMinimised(!minimised)}
              className={clsx(
                "flex h-4 w-4 items-center justify-center rounded-full p-1 text-xs text-white",
                {
                  "bg-emerald-green": minimised,
                  "bg-golden-yellow": !minimised,
                },
              )}
            >
              {minimised ? "+" : "-"}
            </button>
            <button
              onClick={() => dispatch(deleteCheatSheet(cheatSheet))}
              className="flex h-4 w-4 items-center justify-center rounded-full bg-carmine-red p-1 text-xs text-white"
            >
              X
            </button>
          </div>
        </div>
        {minimised ? null : (
          <div className="p-4 pt-2">
            <p className="text-3xl font-bold uppercase text-grey-dark">
              {name}
            </p>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default CheatSheet;
