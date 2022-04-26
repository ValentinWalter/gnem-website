import Container from "./Container"
import styles from "@styles/Footer.module.css"

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.linkGroup}>
          <h3 className={styles.headline}>Staff</h3>
          <a href="#" className={styles.link}>
            Bot developer
          </a>
          <a href="#" className={styles.link}>
            Backend engineer
          </a>
          <a href="#" className={styles.link}>
            Frontend engineer
          </a>
        </div>
        <div>
          <h3 className={styles.headline}>For Business</h3>
          <a href="#" className={styles.link}>Get Gnem at a discount</a>
        </div>
        <div>
          <h3 className={styles.headline}>Contact</h3>
          <a href="#" className={styles.link}>fax</a>
          <a href="#" className={styles.link}>E-mail</a>
        </div>
      </footer>
    </Container>
  )
}
