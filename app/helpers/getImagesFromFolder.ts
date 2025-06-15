import fs from "fs";
import path from "path";

/**
 * Reads a local folder and returns an array of image file names (with extension)
 * @param relativeFolderPath - e.g. "public/images/gallery"
 * @returns string[] - List of image file names
 */
export const getImagesFromFolder = (relativeFolderPath: string): string[] => {
  const fullPath = path.resolve(process.cwd(), relativeFolderPath);

  try {
    const files = fs.readdirSync(fullPath);
    const imageFiles = files.filter((file) =>
      /\.(png|jpe?g|gif|webp|svg)$/i.test(file)
    );
    return imageFiles;
  } catch (error) {
    console.error(`❌ Failed to read folder: ${fullPath}`);
    return [];
  }
};
