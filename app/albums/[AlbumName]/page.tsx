import React from "react";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";
import AlbumGrid from "./album-grid";
import { Refresh } from "@/components/refresh";

export default async function AlbumName({
  params: { AlbumName },
}: {
  params: {
    AlbumName: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${AlbumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div>
      <Refresh />
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">{AlbumName} Album</h1>
      </div>

      <AlbumGrid images={results.resources} />
    </div>
  );
}
