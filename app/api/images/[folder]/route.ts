import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { folder: string } }
) {
  const { folder } = params;

  const folderPath = path.join(process.cwd(), "public", "Projects", folder);

  try {
    if (!fs.existsSync(folderPath)) {
      return NextResponse.json(
        { error: `Folder '${folder}' not found.` },
        { status: 404 }
      );
    }

    const files = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/i.test(file));

    return NextResponse.json({ images: files });
  } catch (error) {
    console.error("Error reading folder:", error);
    return NextResponse.json(
      { error: "Failed to read folder." },
      { status: 500 }
    );
  }
}
