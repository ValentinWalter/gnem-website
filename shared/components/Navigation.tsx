import Container from "./Container"

export default function Navigation() {
  return (
    <Container>
      <nav className="flex justify-between mx-4 mt-3 bg-green-300 bg-opacity-40 backdrop-blur-sm rounded-xl py-2 px-4">
        <a href="/">
          <img width="40" height="40" src="gnem-hat.png" alt="" />
        </a>
        <div className="flex gap-4 items-center">
          <a href="/about">About</a>
          <a href="news">News</a>
          <a href="#">Treasury</a>
        </div>
      </nav>
    </Container>
  )
}
