import Head from "next/head"
import styles from "../styles/about.module.css"
import Navigation from "@components/Navigation"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gnem | Discord Bot</title>
        <meta name="description" content="A Discord bot stealing your valuables." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        <Navigation />
        <h1 className={`${styles.clr} ${styles.position}`}>About us</h1>
        <p className={`${styles.clr} ${styles.position} ${styles.normalText}`}>We</p>
      </main>
    </div>
  )
}
