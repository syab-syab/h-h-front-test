import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

type ImageList = {
  url: string,
  height: number,
  width: number,
  alt: string
}

export type WebContent = {
  title: string;
  features: string;
  url: string;
  shortdescription: string;
  description: string;
  images: Array<ImageList>;
} & MicroCMSListContent;


export const getWebContents = async (queries?: MicroCMSQueries) => {
  return await client.getList<WebContent>({ endpoint: "webcontents", queries });
};

export const getWebContentDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<WebContent>({
    endpoint: "webcontents",
    contentId,
    queries,
  });
};
