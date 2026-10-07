"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";

export type TabItem = {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  tabs: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export default function Tabs({
  tabs,
  defaultValue,
  value,
  onValueChange,
  className = "",
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      value={value}
      defaultValue={defaultValue ?? tabs[0]?.value}
      onValueChange={onValueChange}
      className={`w-full ${className}`}
      dir="rtl"
    >
      <TabsPrimitive.List className="flex w-full gap-1 border-b">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className="
              relative px-4 py-3 text-sm font-medium
               outline-none
              transition-colors
              disabled:pointer-events-none
              disabled:opacity-50
              data-[state=active]:text-white
              data-[state=active]:after:absolute
              data-[state=active]:after:bottom-[-1px]
              data-[state=active]:after:right-0
              data-[state=active]:after:left-0
              data-[state=active]:after:h-[2px]
              data-[state=active]:after:bg-[#66104c]
            "
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.value}
          value={tab.value}
          className="pt-4 outline-none"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
