

interface Props {
    title:string
    marginTop:string
}
export default function TitleComponent({title,marginTop}:Props) {
  return (
    <h1 className={`title-comp ${marginTop}`}>
      {title}
    </h1>
  )
}
