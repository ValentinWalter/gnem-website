export default function Newsbox(props: { title: String; body: String; big?: boolean }) {
  const styles = props.big ? "bg-red-300" : "bg-blue-300"
  return (
    <div className={styles + " p-4 rounded-xl text-center rotate-scale"}>
      <h2 className={(props.big ? "text-2xl" : "") + " font-bold"}>{props.title}</h2>
      <p className={props.big ? "text-xl" : ""}>{props.body}</p>
    </div>
  )
}
