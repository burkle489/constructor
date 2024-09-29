"use client";

import clsx from "clsx";
import { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  isSidedrawer?: boolean;
  className?: string;
  closePortal?: () => void;
}

export default function Portal({
  children,
  className = "",
  isSidedrawer = false,
}: PortalProps): ReactPortal {
  const portalRoot = document.getElementById(`portal`) as
    | Element
    | DocumentFragment;

  const portal = (
    <div
      className={clsx(
        `fixed top-0 z-50 flex items-center justify-center`,
        {
          "right-0 h-full w-full max-w-[730px]": isSidedrawer,
          "left-0 h-full w-full": !isSidedrawer,
        },
        className,
      )}
    >
      {children}
    </div>
  );

  return createPortal(portal, portalRoot);
}
