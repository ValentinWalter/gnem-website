import Head from "next/head"
import Navigation from "@components/Navigation"
import Newsbox from "@components/Newsbox"
import Container from "@components/Container"

export default function News() {
  return (
    <div>
      <Head>
        <title>Gnem | Discord Bot</title>
        <meta name="description" content="A Discord bot stealing your valuables." />
        <link rel="icon" href="/favicon.ico" />
        <style
          dangerouslySetInnerHTML={{ __html: "body { background: #3c3a43}" }}
        ></style>
      </Head>

      <main>
        <Navigation />
        <Container className="flex flex-col gap-4 max-w-sm">
          <a href="#">
            <Newsbox title={"patch 1.0"} body={"Yeah"} big={true} />
          </a>
          <a href="#">
            <Newsbox title={"patch 1.01"} body={"yeah"} />
          </a>
        </Container>
      </main>
    </div>
  )
}
