import React from "react";
// import "./App.css";
import styles from "./page.module.css";
import Image from "next/image";
import fvStyles from "./fv.module.css";
import searchBarStyles from "./searchBar.module.css";
import articleStyles from "./article.module.css";
import paginationStyles from "./pagination.module.css";

// import "./App.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const date: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "タイトル",
      category: {
        name: "カテゴリー",
      },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
    {
      id: "2",
      title: "タイトル2",
      category: {
        name: "カテゴリー2",
      },
      publishedAt: "2021-01-02",
      createdAt: "2021-01-02",
    },
    {
      id: "3",
      title: "タイトル3",
      category: {
        name: "カテゴリー3",
      },
      publishedAt: "2021-01-03",
      createdAt: "2021-01-03",
    },
  ],
};

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.inner}`}>
      <section className={fvStyles.fv}>
        <h2 className={fvStyles.title}>Design & Engineering</h2>
        <div className={fvStyles.mainImage} />
        <h3 className={fvStyles.h3}>Introduction</h3>
        <p className={fvStyles.p}>
          デザイナー兼エンジニアとして活動しています。
          デザイン領域ではWEB、LP、バナーの制作実績があります。
          実装領域では、STUDIO、ワードプレス、microCMS、ムーバブルタイプでの実績があります。
          言語はhtml、css
        </p>
      </section>

      <div className={searchBarStyles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>

      <>
        <section className={articleStyles.article}>
          <ul className={articleStyles.ul}>
            {date.contents.map((article) => (
              <li key={article.id} className={articleStyles.list}>
                <div className={articleStyles.list}>
                  <Image
                    className={articleStyles.image}
                    src="/1200x630.png"
                    alt=""
                    width={1200}
                    height={630}
                  />
                  <dl className={articleStyles.content}>
                    <dt className={articleStyles.newsItemTitle}>
                      {article.title}
                    </dt>
                    <dd className={articleStyles.meta}>
                      <span className={articleStyles.tag}>
                        {article.category.name}
                      </span>
                      <span className={articleStyles.date}>
                        <Image
                          className={articleStyles.whiteImage}
                          src="/clock.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        {article.publishedAt}
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>

      <div className={paginationStyles.pagination}>
        <button className={paginationStyles.pageNumber}>1</button>
      </div>
    </main>
  );
}
