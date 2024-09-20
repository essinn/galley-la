import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <span className="text-2xl font-bold text-black dark:text-white">
          Galley-La
        </span>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://github.com/essinn/galley-la">
            <Button>Github Repo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
