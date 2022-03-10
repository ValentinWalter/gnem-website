import Container from "@components/Container"
import styles from "@styles/HeroSection.module.css"

export default function HeroSection() {
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>GNEM</h1>
      <a href="#" className={styles.inviteLink}>
        Invite
      </a>
    </Container>
  )
}
