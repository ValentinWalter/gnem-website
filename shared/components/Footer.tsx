import Container from "./Container"

export default function Footer() {
  return (
    <Container className="border-t border-green-300 pt-4">
      <footer className="flex mb-4 gap-5">
        <div>
          <h3 className="font-bold text-xl">Staff</h3>
          <p className="opacity-70"><a href="#">Bot developer</a></p>
          <p className="opacity-70"><a href="#">Backend engineer</a></p>
          <p className="opacity-70"><a href="#">Frontend engineer</a></p>
        </div>
        <div>
          <h3 className="font-bold text-xl">For Business</h3>
          <p className="opacity-70"><a href="#">Get Gnem at a discount</a></p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Contact</h3>
          <p className="opacity-70"><a href="#">fax</a></p>
          <p className="opacity-70"><a href="#">E-mail</a></p>
        </div>
      </footer>
    </Container>
  )
}
