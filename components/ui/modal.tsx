"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

type ModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          dir="rtl"
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-x bg-main p-6 shadow-xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              {title && (
                <Dialog.Title className="text-lg text-white font-semibold">
                  {title}
                </Dialog.Title>
              )}
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
