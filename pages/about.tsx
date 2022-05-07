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
        <p className={`${styles.clr} ${styles.position} ${styles.normalText} ${styles.space}`}>Our Team was founded due to a school project in 2022.</p>
        <div className={styles.cards}>
          <a href="#">
            <TeamCard title="Backend" body="Backend engeneer, who made the database stuff" image={undefined} />
          </a>
          <a href="#">
            <TeamCard title="Dynamic Guy" body="The man on which is responsible for this project and who helped with aything" image={undefined} />
          </a>
          <a href="#">
            <TeamCard title="Frontend" body="The guy who made this website" image={undefined} />
          </a>
          <a href="#">
            <TeamCard title=""  body="" image={undefined}/>
          </a>
        </div>
      </main>
    </div>
  )
}
