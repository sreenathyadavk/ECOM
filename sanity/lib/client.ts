import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const rawClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const client = {
  ...rawClient,
  fetch: async (query: string, params?: any, options?: any) => {
    if (!projectId || projectId === "abcdef12") {
      throw new Error("Sanity client is unconfigured or using dummy project ID");
    }
    return rawClient.fetch(query, params, options);
  }
} as typeof rawClient;
