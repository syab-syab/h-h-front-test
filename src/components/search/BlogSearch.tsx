import useSWR from "swr";
import { getWebContents } from "../../library/microcms";
import styles from "./Search.module.css"

const BlogSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  const { data, error, isLoading } = useSWR(
    q === null ? null : ["/search", q],
    ([, q]) =>
      getWebContents({
        // fields: ["id", "title"],
        // fields: ["id", "features"],
        fields: ["id", "features", "title", "url"],
        q,
      })
  );

  if (error) return <div>エラーが発生しました</div>;

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div>
      {data?.contents.length !== 0 ? (
        <>
          {data?.contents.map(({ id, features, title, url}) => (
            // スタイルはまた後で考える
            <div class={styles.item} key={id}>
              <h3>
                {/* 後でタイトルから「○○ができるサイト」という形式に変更 */}
                {features}
              </h3>
              <p class={styles.title}>サイト名:{title}</p>
              <div class={styles.linkWrapper}>
                {/* リンクへのジャンプ機能が少しおかしいので後で修正 */}
                <a href={url} class={styles.jumpLink}>サイトへ行く</a>
                <a href={id} class={styles.jumpDetail}>詳細</a>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>検索結果はありません</div>
      )}
    </div>
  );
};

export default BlogSearch;