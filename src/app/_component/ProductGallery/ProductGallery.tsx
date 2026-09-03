"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ProductGalleryProps {
  imageCover: string;
  images: string[];
  title: string;
}

export default function ProductGallery({
  imageCover,
  images,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(imageCover);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Main Image */}
      <div className="rounded-lg shadow-md mb-4 overflow-hidden">
        <Image
          src={selectedImage}
          width={400}
          height={300}
          alt={title}
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        {images.map((imgSrc) => (
          <button
            key={imgSrc}
            type="button"
            onClick={() => setSelectedImage(imgSrc)}
            className={`border rounded-md overflow-hidden ${
              selectedImage === imgSrc ? "border-green-600" : "border-gray-200"
            }`}
          >
            <Image
              src={imgSrc}
              alt={title}
              width={50}
              height={50}
              className="object-cover cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
