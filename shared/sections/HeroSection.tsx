import Container from "@components/Container"

export default function HeroSection() {
  return (
    <>
      <Container className="flex flex-col items-center">
        <img src="gnem.png" alt="Gnem" />
        <a
          href="#"
          className="px-4 py-3 bg-[#00c531] rounded-xl rotate-scale"
        >
          Invite
        </a>
      </Container>
    </>
  )
}
