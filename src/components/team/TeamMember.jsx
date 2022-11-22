export default function TeamMember({img, name, occupation}) {

  return <div className="team_member">
      <img src={img} alt="person1" />
      <h3>{name}</h3>
      <p>{occupation}</p>
  </div>
}


// export default function TeamMember(props) {

//   return <div className="team_member">
//       <img src={props.img} alt="person1" />
//       <h3>{props.name}</h3>
//       <p>{props.occupation}</p>
//   </div>
// }