import useSWR from "swr";
import { getWebContents } from "../../library/microcms";

const BlogSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  // const { data } = useSWR(
  //   q === null ? null : ["/search", q],
  //   ([, q]) =>
  //     getWebContents({
  //       fields: ["id", "title"],
  //       q,
  //     })
  // );

  const { data } = useSWR(
  q === null ? null : ["/search", q],
  ([, q]) =>
    getWebContents({
      fields: ["id", "title"],
      q,
    })
  );

  console.log(data);

  return (
    <div></div>
  );
};

export default BlogSearch;