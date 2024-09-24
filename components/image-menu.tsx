"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="absolute top-2 right-2">
        <HamburgerMenuIcon className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Add to album</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
