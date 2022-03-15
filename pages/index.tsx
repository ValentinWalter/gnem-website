import Head from "next/head"
import HeroSection from "@components/HeroSection"
import FeatureSection from "@components/FeatureSection"
import Footer from "@components/Footer"
import Navigation from "@components/Navigation"

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
        <HeroSection />
        <FeatureSection />
        <Footer />
      </main>
    </div>
  )
}
