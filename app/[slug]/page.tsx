import React from "react";
import "./page.module.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>TeckBlog</h1>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <main className="main-content">
        <h2 className="title">タイトル</h2>
        <div className="tags">
          {["#タグ", "#タグ", "#タグ", "#タグ", "#タグ"].map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="image-placeholder"></div>
        {[...Array(4)].map((_, index) => (
          <section key={index} className="introduction">
            <h3>Introduction</h3>
            <p>
              デザイナー兼エンジニアとして活動しています。
              デザイン領域ではWEB、LP、バナーの制作実績があります。
              実装領域では、STUDIO、ワードプレス、microCMS、ムーバブルタイプでの実績があります。
              言語はhtml, css
            </p>
          </section>
        ))}
        <footer className="footer">テキストテキストテキスト</footer>
      </main>
    </div>
  );
};

export default App;
