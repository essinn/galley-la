"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import { UploadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { UploadResult } from "@/app/page";

export const UploadBtn = () => {
  const router = useRouter();

  return (
    <div>
      <Button asChild>
        <div className="flex gap-2">
          <CldUploadButton
            onSuccess={(result: UploadResult) => {
              // const uploadResult = result as UploadResult;
              console.log("refresh");
              setTimeout(() => {
                router.refresh();
              }, 1000);
            }}
            uploadPreset="ao5oa1et"
            className=""
          />
          <UploadIcon className="h-4 w-4" />
        </div>
      </Button>
    </div>
  );
};
