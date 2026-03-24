"use client";
import { useState } from "react";
import { useImageStore } from "@/store/imageStore";

export default function UploadImage() {
  const setImageUrl = useImageStore((state) => state.setImageUrl);
  const setLoading = useImageStore((state) => state.setLoading);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    setImageUrl(data.url); // ✅ store globally
    setLoading(false);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />

    </div>
  );
}
