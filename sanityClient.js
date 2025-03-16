import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xclwxsz8",
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2024-03-15", 
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

