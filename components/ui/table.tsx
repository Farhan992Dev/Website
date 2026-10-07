"use client";

import React from "react";

export type TableColumn<T> = {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
};

export default function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="border-b bg-gray-300">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-4 py-3 text-right font-medium text-gray-700"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b last:border-b-0">
              {columns.map((column) => {
                const value = row[column.key];

                return (
                  <td key={String(column.key)} className="px-4 py-3 text-right">
                    {column.render
                      ? column.render(value, row)
                      : String(value ?? "-")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
