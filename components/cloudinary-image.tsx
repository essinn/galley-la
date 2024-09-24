"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import { SetAsFavorite } from "@/app/gallery/actions";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags?.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <HeartFilledIcon
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              SetAsFavorite(imageData.public_id, false);
            });
          }}
          className="absolute h-5 w-5 top-2 left-2 text-white hover:text-zinc-200 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              SetAsFavorite(imageData.public_id, true);
            });
          }}
          className="absolute h-5 w-5 top-2 left-2 text-white hover:text-zinc-200 cursor-pointer"
        />
      )}
      {/* <ImageMenu image={imageData} /> */}
      <ImageMenu image={imageData} />
    </div>
  );
}
