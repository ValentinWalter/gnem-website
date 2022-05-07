import Container from "@components/Container";
import Head from "next/head";
import Navigation from "@components/Navigation";

export default function Treassury() {
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
            <Navigation/>
            <Container>

            </Container>
        </main>
      </div>
    )
}