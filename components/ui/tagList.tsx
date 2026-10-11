"use client";

import { useState, type KeyboardEvent } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { PlusIcon, Trash } from "lucide-react";
import { FormLabel } from "./form";

interface TagListInputProps {
  label: string;
  color: "success" | "error";
  values: string[];
  onChange: (values: string[]) => void;
}

export default function TagListInput({
  label,
  color,
  values,
  onChange,
}: TagListInputProps) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    onChange([...values, trimmed]);
    setDraft("");
  };

  const removeTag = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag();
    }
  };

  return (
    <div className="my-2">
      <FormLabel className="text-neutral-300 font-medium">تگ</FormLabel>
      <div className="flex gap-2 mt-2">
        <Input
          id="title"
          type="text"
          name="title"
          value={draft}
          // error={Boolean(errors?.phoneNumber?.message)}
          // helperText={errors?.phoneNumber?.message}
          autoComplete="off"
          onChange={(e) => setDraft(e.target.value)}
          //   onKeyDown={handleKeyDown}
          className="bg-white/[0.02] border-white/10 text-white rounded-2xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20"
        />
        <button
          type="button"
          onClick={addTag}
          sx={{
            border: "1px solid",
            borderColor: `${color}.main`,
            color: `${color}.main`,
            borderRadius: 2,
          }}
          aria-label={`افزودن ${label}`}
        >
          <PlusIcon />
        </button>
      </div>

      {values?.length > 0 && (
        <div className="flex flex-col h-[100px] overflow-y-auto gap-1 mt-5">
          {values?.map((value, index) => (
            <div
              className={`text-${color} border flex justify-between items-center rounded-lg p-2`}
              key={`${value}-${index}`}
            >
              {value}
              <Trash
                className="cursor-pointer text-red-500"
                onClick={() => {
                  removeTag(index);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
