import { useState } from "preact/hooks";
import type { JSX } from "preact"
import styles from "./Search.module.css"

const SearchButton = () => {
  const [value, setValue] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("q") ?? ""
      : ""
  );
  // const handleChange: JSXInternal.GenericEventHandler<HTMLInputElement> = (
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue((event.target as HTMLInputElement).value);
  };
  // const handleSubmit: JSXInternal.GenericEventHandler<HTMLFormElement> = (
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    window.location.href = `/search?q=${value}`;
  };

  return (
    <form
      class={styles.formWrapper}
      role="search"
      onSubmit={handleSubmit}
    >
      <label class={styles.formLabel} for="blog_search">
        コンテンツを検索
      </label>
      <input
        id="blog_search"
        type="search"
        class={styles.searchBar}
        value={value}
        placeholder="キーワード検索"
        onChange={handleChange}
      />
      <button class={styles.searchBtn}>検索</button>
    </form>
  );
};

export default SearchButton;