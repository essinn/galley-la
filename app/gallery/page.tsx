"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "@radix-ui/react-icons";

export default function GalleryPage() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <Button asChild>
        <div className="flex gap-2">
          <CldUploadButton
            // onSuccess={(result: UploadResult) => {
            //   const uploadResult = result as UploadResult;
            //   setImageId(uploadResult.info.public_id);
            // }}
            uploadPreset="ao5oa1et"
            className=""
          />
          <UploadIcon className="h-4 w-4" />
        </div>
      </Button>
    </div>
  );
}
