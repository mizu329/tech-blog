import React from "react";
import "./App.css";
import styles from "./page.module.css";

import Image from "next/image";
import "./App.css";

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
    <main className="main inner">
      <section className="introduction">
        <h2 className="title">Design & Engineering</h2>
        <div className="main-image" />
        <h3>Introduction</h3>
        <p>
          デザイナー兼エンジニアとして活動しています。
          デザイン領域ではWEB、LP、バナーの制作実績があります。
          実装領域では、STUDIO、ワードプレス、microCMS、ムーバブルタイプでの実績があります。
          言語はhtml、css
        </p>
      </section>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <>
        <section className={styles.article}>
          <ul>
            {date.contents.map((article) => (
              <li key={article.id} className={styles.list}>
                <div className={styles.list}>
                  <Image
                    className={styles.image}
                    src="/1200x630.png"
                    alt=""
                    width={1200}
                    height={630}
                  />
                  <dl className={styles.content}>
                    <dt className={styles.newsItemTitle}>{article.title}</dt>
                    <dd className={styles.meta}>
                      <span className={styles.tag}>
                        {article.category.name}
                      </span>
                      <span className={styles.date}>
                        <Image
                          className={styles.whiteImage}
                          src="/clock.svg"
                          alt=""
                          width={16}
                          height={16}
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

      <div className="pagination">
        <button className="page-number">1</button>
      </div>
    </main>
  );
}
