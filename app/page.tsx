import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import fvStyles from "./fv.module.css";
import searchBarStyles from "./searchBar.module.css";
import articleStyles from "./article.module.css";
import paginationStyles from "./pagination.module.css";
import { formatDate } from "@/app/libs/utils";
import LottiePlayer from "@/app/components/Lottie/LottiePlayer";


// microCMSの型をインポート
import { createClient, MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";

// --- API クライアントを作成 ---
const client = createClient({
  serviceDomain: process.env.domain || "defaultDomain",
  apiKey: process.env.apiKey || "",
});

// --- 型定義 ---
export type Category = {
  name: string;
};

export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: Category;
  publishedAt: string;
  createdAt: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
};

// --- microCMS API からデータを取得する関数 ---
const getArticleList = async (queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Article>> => {
  return await client.getList<Article>({
    endpoint: "article",
    queries,
  });
};

export default async function Home() {
  // データを取得（Server Component 内で実行）
  const listData = await getArticleList();

  return (
    <main className={`${styles.main} ${styles.inner}`}>
      <section className={fvStyles.fv}>
        <h2 className={fvStyles.title}>Design & Engineering</h2>
              {/* Lottie アニメーションを追加 */}
      <div className={fvStyles.mainImage}>
        <LottiePlayer
        />
      </div>
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

      <section className={articleStyles.article}>
        <ul className={articleStyles.ul}>
          {listData.contents.map((article) => (
            <li key={article.id} className={articleStyles.list}>
              {article.thumbnail?.url ? (
                <Image
                  className={articleStyles.image}
                  src={article.thumbnail.url}
                  alt={article.thumbnail?.alt || "記事のサムネイル画像"}
                  width={1200}
                  height={630}
                />
              ) : (
                <Image
                  className={articleStyles.image}
                  src="/1200x630.png"
                  alt="デフォルト画像"
                  width={1200}
                  height={630}
                />
              )}

              <dl className={articleStyles.content}>
                <dt className={articleStyles.newsItemTitle}>{article.title}</dt>
                <dd className={articleStyles.meta}>
                  <span className={articleStyles.tag}>{article.category.name}</span>
                  <span className={articleStyles.date}>
                    <Image
                      className={articleStyles.whiteImage}
                      src="/clock.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    {formatDate(article.publishedAt)}
                  </span>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <div className={paginationStyles.pagination}>
        <button className={paginationStyles.pageNumber}>1</button>
      </div>
    </main>
  );
}