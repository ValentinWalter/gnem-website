import styles from "@styles/FeatureBox.module.css"

export default function FeatureBox(props: { title: string; body: string }) {
  return (
    <div className={styles.box}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}
