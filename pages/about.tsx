import Head from "next/head"
import styles from "../styles/about.module.css"
import Navigation from "@components/Navigation"
import TeamCard from "@components/teamCard"

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
        <h2 className={`${styles.clr} ${styles.position}`}>About us</h2>
        <p className={`${styles.clr} ${styles.position} ${styles.normalText}`}>We</p>
        <a href="#">
          <TeamCard 
            title="Backend"
            body="Main backend who was responsible for database stuff"
            image={undefined}
          />
        </a>
      </main>
    </div>
  )
}
