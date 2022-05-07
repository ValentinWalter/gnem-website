import Head from "next/head"
import Navigation from "@components/Navigation"
import Bignewsbox from "@components/Bignewsbox"
import Newsbox from "@components/newsbox"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gnem | Discord Bot</title>
        <meta name="description" content="A Discord bot stealing your valuables." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <a href="#">
          <Bignewsbox title={"patch 1.0"} body={"Yeah"} />
        </a>
        <a href="#">
            <Newsbox title={"patch 1.01"} body={"yeah"}/>
        </a>
      </main>
    </div>
  )
}
