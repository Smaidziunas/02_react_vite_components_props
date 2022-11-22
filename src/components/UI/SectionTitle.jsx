export default function SectionTitle(props) {
  
  return <div>
    <h2 className="sectionTitle">{props.title}</h2>
    {props.subtitle ? <p className='subtitle'>{props.subtitle}</p> : ''}
  </div>
}