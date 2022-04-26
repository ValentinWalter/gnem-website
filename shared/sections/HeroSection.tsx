import Container from "@components/Container"
import styles from "@styles/HeroSection.module.css"

export default function HeroSection() {
  return (
    <>
      <Container className={styles.container}>
        <img className={styles.logo} src="gnem.png" alt="Gnem" />
        <a href="#" className={styles.inviteLink}>
          Invite
        </a>
      </Container>
    </>
  )
}
