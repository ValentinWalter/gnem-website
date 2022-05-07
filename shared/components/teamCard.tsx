export default function TeamCard(props: { title: String; body: String; image: any }) {
  return (
    <div className="bg-black rounded-xl p-4 h-full">
      <img src={props.image} alt="" />
      <h1 className="font-bold text-xl mb-1">{props.title}</h1>
      <p className="opacity-75">{props.body}</p>
    </div>
  )
}
