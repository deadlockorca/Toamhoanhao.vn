"use client";

import type { ComponentProps, ReactNode } from "react";

type ConfirmActionButtonProps = ComponentProps<"button"> & {
  confirmMessage: string;
  children: ReactNode;
};

export function ConfirmActionButton({
  confirmMessage,
  children,
  onClick,
  ...props
}: ConfirmActionButtonProps) {
  return (
    <button
      {...props}
      onClick={(event) => {
        if (!window.confirm(confirmMessage)) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
