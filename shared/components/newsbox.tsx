import styles from "@styles/newsbox.module.css"

export default function newsbox(props: { title: String; body: String }) {
  return (
    <div className={styles.lilbox}>
      <h2>{props.title}</h2>
      <p className={styles.clrgrey}>{props.body}</p>
    </div>
  )
}
