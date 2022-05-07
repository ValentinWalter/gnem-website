import Head from "next/head"
import Navigation from "@components/Navigation"
import TeamCard from "@components/teamCard"
import Container from "@components/Container"

export default function About() {
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
        <Container className="flex flex-col gap-6">
          <header>
            <h2 className="text-2xl font-bold mb-3">About us</h2>
            <p className="text-lg">Our Team was founded due to a school project in 2022.</p>
          </header>
          <div className="grid grid-cols-3 gap-4">
            <a href="#">
              <TeamCard
                title="Backend"
                body="Backend engeneer, who made the database stuff"
                image={undefined}
              />
            </a>
            <a href="#">
              <TeamCard
                title="Dynamic Guy"
                body="The man on which is responsible for this project and who helped with aything"
                image={undefined}
              />
            </a>
            <a href="#">
              <TeamCard
                title="Frontend"
                body="The guy who made this website"
                image={undefined}
              />
            </a>
          </div>
        </Container>
      </main>
    </div>
  )
}
