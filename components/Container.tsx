export default function Container(props: { children: JSX.Element }) {
  return <div className="container">{props.children}</div>
}
