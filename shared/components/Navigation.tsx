import Container from "./Container"
import styles from "@styles/Navigation.module.css"

export default function Navigation() {
  return (
    <Container className={styles.container}>
      <nav className={styles.nav}>
        <a href="#">
          <img className={styles.logo} src="gnem-hat.png" alt="" />
        </a>{" "}
        {/*wird später zum logo*/}
        <div className={styles.div}>
          <a href="#" className={styles.navItem}>
            About
          </a>
          <a href="#" className={styles.navItem}>
            Team
          </a>
          <a href="#" className={styles.navItem}>
            Treasury
          </a>
        </div>
      </nav>
    </Container>
  )
}
