import Container from "@components/Container"
import styles from "@styles/FeatureSection.module.css"
import FeatureBox from "@components/FeatureBox"

export default function FeatureSection() {
  return (
    <Container>
      <h1 className={styles.heading}>Features</h1>

      <div className={styles.featureContainer}>
        <FeatureBox title="test" body="body" />
        <FeatureBox title="test 2" body="body 2" />
        <FeatureBox title="test 3" body="body 3" />
        <FeatureBox title="test 4" body="body 4" />
      </div>
    </Container>
  )
}
