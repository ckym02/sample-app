import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {

  const openWindow = () =>{
    liff?.openWindow({
      url: "https://google.co.jp",
      external: true
    });
  }

  return (
    <div>
      <Head>
        <title>test-app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        <Link href='https://google.co.jp'>
          <a target='_blank'>google サイト（新しいタブで開く）</a>
        </Link>
        <Link href='https://google.co.jp'>google サイト</Link>
        <button onClick={openWindow}>google サイト（外部ブラウザで開く）</button>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a
          href="https://developers.line.biz/ja/docs/liff/"
          target="_blank"
          rel="noreferrer"
        >
          LIFF Documentation
        </a>
      </main>
    </div>
  );
};

export default Home;
