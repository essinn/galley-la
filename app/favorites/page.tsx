import React from "react";
import { SearchResult } from "../gallery/page";
import cloudinary from "cloudinary";
import FavoritesList from "./favorites-list";
import { Refresh } from "@/components/refresh";

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div>
      <Refresh />

      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">Favorites</h1>
      </div>

      <FavoritesList initialResources={results.resources} />
    </div>
  );
}
