import { client } from "@/lib/sanity";
import PhotoGalleryTemplate from "./PhotoGalleryTemplate";

export async function GetGallery() {
  const query = `
    *[_type == 'gallery'] {
      images,
    }
  `;

  const gallery = client.fetch(query);
  return gallery;
}

export default async function PhotoGallery() {
  const gallery = await GetGallery();

  return <PhotoGalleryTemplate images={gallery[0].images} />;
}
