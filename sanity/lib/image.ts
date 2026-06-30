import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: any) => {
  if (typeof source === "string") return { url: () => source };
  // return builder.image(source)
  return { url: () => "https://picsum.photos/500" };
}
