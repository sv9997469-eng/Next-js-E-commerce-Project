"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SortDropdown() {
  const router = useRouter();
  const params = useSearchParams();

  const currentSort = params.get("sort") || "";

  function handleSort(value: string) {
    const query = new URLSearchParams(params);

    if (value) {
      query.set("sort", value);
    } else {
      query.delete("sort");
    }

    query.set("page", "1"); // reset page
    router.push(`?${query.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Sort</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentSort}
          onValueChange={handleSort}
        >
          <DropdownMenuRadioItem value="az">
            A → Z
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="za">
            Z → A
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="price-asc">
            Price Low → High
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="price-desc">
            Price High → Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}