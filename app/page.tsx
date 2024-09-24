import { SearchForm } from "./gallery/search-form";
import { SearchResult } from "./gallery/page";
import GalleryGrid from "./gallery/gallery-grid";
import cloudinary from "cloudinary";

export default async function Home({
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
    <div className="pt-2">
      <SearchForm initialSearch={search} />
      <GalleryGrid images={results.resources} />
    </div>
  );
}
