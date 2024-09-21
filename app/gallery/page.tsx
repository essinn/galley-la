import React from "react";
import { UploadBtn } from "@/components/upload-button";
import { CloudinaryImage } from "@/components/cloudinary-image";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <UploadBtn />
      </div>

      <SearchForm initialSearch={search} />
      <GalleryGrid images={results.resources} />
    </div>
  );
}
