import styles from "@styles/teamCard.module.css"

export default function TeamCard(props: { title: String; body: String; image: any }) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}
