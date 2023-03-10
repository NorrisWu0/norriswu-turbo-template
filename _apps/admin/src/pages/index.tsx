import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@src/styles/Home.module.css";

import { Code, CopyRight, LinkCard, Logo } from "@norriswu/ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const linkCards = [
    {
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
    },
    {
      href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Learn",
      description: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Templates",
      description: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy",
      description:
        "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <Code>src/pages/index.tsx</Code>
          </p>
          <CopyRight />
        </div>

        <Logo />

        <div className={inter.className}>
          <div className={styles.grid}>
            {linkCards.map((linkCard) => (
              <LinkCard key={linkCard.title} {...linkCard} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
