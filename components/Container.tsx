export default function Container(props: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={"container " + props.className}>{props.children}</div>
}
