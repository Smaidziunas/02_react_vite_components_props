export default function TeamMember(props) {
  return <div className="team_member">
      <img src={props.img} alt="person1" />
      <h3>{props.Name}</h3>
      <p>{props.position}</p>
  </div>

  
}