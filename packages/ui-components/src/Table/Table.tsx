import { memo, useEffect, useMemo, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { useWatch } from "react-hook-form";
import {
  Column,
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getSortedRowModel,
  FilterFn,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

import Button, { TButtonVariant } from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PaginationButton from "./PaginationButton";

function TableBadge({ badges }: { badges: string | string[] }) {
  return (
    <>
      {badges instanceof Array ? (
        <div className="flex flex-wrap gap-3">
          {badges.map((item) => (
            <span
              className={`bg-primary block rounded-lg text-white ${
                item === "جميع الصلاحيات" ? "w-full" : ""
              }`}
              style={{ width: "fit-content", padding: "0.5rem 1rem" }}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <span
          className={`bg-primary block w-fit rounded-lg px-2 py-2 text-white ${
            badges === "جميع الصلاحيات" ? "w-full" : ""
          }`}
        >
          {" "}
          {badges}
        </span>
      )}
    </>
  );
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

interface Props {
  headers: any;
  data: any;
  buttonClick?: (row: any) => any;
  buttonLabel?: string;
  actionHeader?: string;
  containerClassName?: string;
  tableClassName?: string;
  pagination?: boolean;
  pageSize?: number;
  badge?: string;
  buttonVariant?: TButtonVariant;
  primaryColumnsList?: string[];
  isLoading?: boolean;
  control?: any;
  searchInputName?: string;
  disableFilterArr?: string[];
  refetch?: () => any;
}

export function Table({
  headers,
  data,
  buttonClick,
  buttonLabel,
  actionHeader,
  containerClassName,
  tableClassName,
  pagination,
  pageSize,
  badge,
  buttonVariant,
  primaryColumnsList,
  isLoading,
  control,
  searchInputName,
  disableFilterArr,
  refetch,
}: Props) {
  const searchValue =
    control &&
    searchInputName &&
    useWatch({
      control,
      name: searchInputName,
    });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const columns = useMemo<ColumnDef<any>[]>(() => {
    const cols: ColumnDef<any>[] = Object.keys(headers).map((header) => ({
      header: headers[header],
      accessorKey: header,
      enableColumnFilter: !disableFilterArr?.includes(header),
      cell:
        badge === header
          ? (row) => <TableBadge badges={row.getValue() as string} />
          : primaryColumnsList?.includes(header)
          ? (row) => <div className="text-primary">{row.getValue() as any}</div>
          : (row) => row.getValue(),
    }));
    if (actionHeader && buttonLabel && buttonClick) {
      cols.push({
        header: actionHeader,
        accessorKey: "action",
        enableColumnFilter: false,
        cell: (row) => (
          <Button
            className="w-20 py-1.5"
            variant={buttonVariant || "primary-Outline"}
            onClick={() => buttonClick(row.row.original)}
          >
            {buttonLabel}
          </Button>
        ),
      });
    }
    return cols;
  }, [headers]);

  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
      globalFilter: globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
    //
  });

  useEffect(() => {
    if (control) {
      if (!searchValue) {
        setGlobalFilter("");
        return;
      }
      setGlobalFilter(String(searchValue));
    }
  }, [searchValue]);
  const pageIndex = table.getState().pagination.pageIndex;

  const pageNumbers = useMemo(
    () =>
      [...Array(table.getPageOptions().length + 1).keys()].slice(
        pageIndex >= 5 ? pageIndex - 4 : 1,
        pageIndex + 8,
      ),
    [data, pageIndex, table?.getState()?.pagination],
  );

  const handlePage = (currentPageNo: number) => {
    table.setPageIndex(currentPageNo - 1);
  };

  return (
    <>
      <div className={`customTableContainer ${containerClassName || ""}`}>
        {refetch ? (
          <Button
            onClick={() => refetch()}
            className="mx-auto mb-4 flex items-center justify-center"
          >
            <BiRefresh />
          </Button>
        ) : (
          <></>
        )}
        <table className="w-full overflow-hidden rounded-t-lg">
          <thead
            className={`bg-primary rounded-lg text-white ${
              tableClassName || ""
            }`}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="px-4 py-2 text-sm"
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {!isLoading && (
            <tbody className="text-Accent">
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    className="text-center text-sm even:bg-slate-50"
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="px-2 py-3" key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      {isLoading && <LoadingSpinner />}

      <div>
        <div
          className="flex items-center justify-center gap-1 text-center"
          dir="ltr"
        >
          <button hidden={!table.getCanPreviousPage()} className="pe-3">
            <PaginationButton onClick={() => table.previousPage()} />
          </button>

          {pageNumbers.map((num) => (
            <div key={num}>
              <Button
                variant={
                  table.getState().pagination.pageIndex + 1 !== num
                    ? "primary-Outline"
                    : "primary"
                }
                className="h-10 w-10"
                onClick={() => handlePage(num)}
              >
                <strong>{num}</strong>
              </Button>
            </div>
          ))}

          <div hidden={!table.getCanNextPage()} className="ps-3">
            <PaginationButton onClick={() => table.nextPage()} right />
          </div>
        </div>
      </div>
    </>
  );
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: ReactTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()],
  );

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex flex-col gap-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
          className="mt-1 max-w-[7rem] rounded px-2 py-1 text-xs text-black"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
          className="mt-1 max-w-[7rem] rounded px-2 py-1 text-xs text-black"
        />
      </div>
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`ابحث (${column.getFacetedUniqueValues().size})`}
        className="mt-1 max-w-[7rem] rounded px-2 py-1 text-xs text-black"
        list={column.id + "list"}
      />
    </>
  );
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      style={{ border: "none" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
