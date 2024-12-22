import React from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const data = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    id : 1 
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    id : 2
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    id : 3
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    id : 4
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    id : 5
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    id : 6
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    id : 7
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    id : 8
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    id : 9
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    id : 10

  },
];

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("id", {
        header: "id",
      }),
  columnHelper.accessor("firstName", {
    header: "First Name",
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
  }),
  columnHelper.accessor("age", {
    header: "Age",
  }),
  columnHelper.accessor("visits", {
    header: "Visits",
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
 
];

export default function App() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());

  return (
    <div className="flex justify-center my-20">
      <div className="overflow-x-auto">
        <table className="my-auto border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b bg-gray-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-medium text-gray-600"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 text-gray-700 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
