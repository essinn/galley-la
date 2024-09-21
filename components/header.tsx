import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-8 container mx-auto">
        <span className="text-2xl font-bold text-black dark:text-white">
          Galley-La
        </span>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://github.com/essinn/galley-la">
            <Button className="bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-black dark:text-white dark:hover:text-white">
              Github Repo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
