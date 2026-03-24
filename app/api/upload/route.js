import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const response = await imagekit.upload({
    file: buffer,
    fileName: file.name,
  });

  return NextResponse.json(response);
}