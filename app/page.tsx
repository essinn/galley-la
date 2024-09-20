"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <div>
      <CldUploadButton
        onSuccess={(result) => {
          const uploadResult = result as UploadResult;
          setImageId(uploadResult.info.public_id);
        }}
        uploadPreset="ao5oa1et"
      />
      {imageId && (
        <CldImage
          width="300"
          height="400"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </div>
  );
}
