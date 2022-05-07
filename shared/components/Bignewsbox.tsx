import styles from "@styles/newsbox.module.css"

export default function Bignewsbox(props: { title: String; body: String;}) {
  return (
    <div className={styles.box}>
      <h1>{props.title}</h1>
      <p className={styles.clrgrey}>{props.body}</p>
    </div>
  )
}
