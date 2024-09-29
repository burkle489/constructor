"use client";

import { useAppDispatch } from "@/store/hooks";
import {
  deleteCheatSheet,
  ICheatSheetResponse,
} from "@/store/reducers/cheatSheets";
import clsx from "clsx";
import { FC, useRef, useState } from "react";
import Draggable from "react-draggable";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const CheatSheet: FC<ICheatSheetResponse> = (cheatSheet) => {
  const sheetRef = useRef(null);
  const { name, content, image, imageUrl, imageDimensions } = cheatSheet;
  console.log({ image });
  const dispatch = useAppDispatch();

  const [minimised, setMinimised] = useState(false);
  return (
    <Draggable nodeRef={sheetRef}>
      <div
        ref={sheetRef}
        className="absolute left-4 top-4 z-[9999] cursor-grab border-4 border-grey-dark bg-white"
      >
        <div className="flex w-full items-center justify-between gap-4 p-1 px-2">
          <p className="text-md pointer-events-none mb-0 font-bold uppercase text-grey-dark">
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
          <div className="p-4 pt-2 text-grey-dark">
            {content ? <PortableText value={content} /> : null}
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={imageDimensions.width}
                height={imageDimensions.height}
                alt="alt"
                className={`pointer-events-none h-auto w-auto aspect-[${imageDimensions.aspectRatio}]`}
              />
            ) : null}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default CheatSheet;
