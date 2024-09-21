import React from "react";
import { UploadBtn } from "@/components/upload-button";
import { CloudinaryImage } from "@/components/cloudinary-image";
import cloudinary from "cloudinary";

type SearchResult = {
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
    .max_results(5)
    .execute()) as { resources: SearchResult[] };

  return (
    <div>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <UploadBtn />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {results.resources.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            src={result.public_id}
            width="400"
            height="300"
            alt="cloudinary image"
            className="rounded"
          />
        ))}
      </div>
    </div>
  );
}
