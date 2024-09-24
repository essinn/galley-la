import React from "react";
import cloudinary from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">Albums</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {folders.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </div>
  );
}
