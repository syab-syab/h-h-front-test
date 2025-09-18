// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
// 旧Blog
export type WebContent = {
  title: string;
  features: string;
  url: string;
  shortdescription: string;
  description: string;
} & MicroCMSListContent;

// APIの呼び出し
// 旧getBlogs
export const getWebContents = async (queries?: MicroCMSQueries) => {
  return await client.getList<WebContent>({ endpoint: "webcontents", queries });
};

// 旧getBlogDetail
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