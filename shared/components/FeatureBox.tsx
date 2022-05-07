export default function FeatureBox(props: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-green-300 p-3 text-black">
      <h1 className="font-bold text-xl">{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}
