"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

export const CloudinaryImage = (props: any) => {
  return <CldImage {...props} />;
};
