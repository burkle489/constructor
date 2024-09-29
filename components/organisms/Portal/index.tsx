"use client"

import { ReactNode, ReactPortal } from "react"
import { createPortal } from "react-dom"
import clsx from "clsx"

export interface PortalProps {
  children: ReactNode
  isSidedrawer?: boolean
  className?: string
  closePortal?: () => void
}

export default function Portal({
  children,
  className = "",
  isSidedrawer = false,
  closePortal,
}: PortalProps): ReactPortal {
  const portalRoot = document.getElementById(`portal`) as
    | Element
    | DocumentFragment

  const portal = (
    <div
      className={clsx(`fixed top-0 flex justify-center items-center z-50`, {
        "right-0 w-full h-full max-w-[730px]": isSidedrawer,
        "left-0 w-full h-full": !isSidedrawer,
      })}
    >
      {children}
    </div>
  )

  return createPortal(portal, portalRoot)
}
