import React from "react";
import { Button } from "./ui/button";
import { ImageIcon, HeartIcon } from "@radix-ui/react-icons";
import { FolderIcon } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-5">
        <h2 className="mb-2 px-8 text-2xl font-bold tracking-tight">
          Discover
        </h2>
        <div className="px-8 pt-[28px] py-2">
          <div className="space-y-1 flex flex-col gap-1">
            <Link href="/gallery">
              <Button
                variant="secondary"
                className="w-full flex items-center justify-start"
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Gallery
              </Button>
            </Link>
            <Link href="/albums">
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start"
              >
                <FolderIcon className="mr-2 h-4 w-4" />
                Album
              </Button>
            </Link>
            <Link href="/favorites">
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start"
              >
                <HeartIcon className="mr-2 h-4 w-4" />
                Favorites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
