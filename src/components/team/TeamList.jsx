import TeamMember from "./TeamMember";



export default function TeamList(props) {
  return (
  <div className="team_grid">
    <TeamMember img="public/img/person_2.jpg" name= "Kaiara Spencer" occupation= "Product Manager" />
    <TeamMember img="public/img/person_2.jpg" name= "Dave Simpson" occupation= "Product Manager" />
    <TeamMember img="public/img/person_3.jpg" name= "Ben Thompson" occupation= "Product Manager" />
    <TeamMember img="public/img/person_4.jpg" name= "Ben Thompson" occupation= "Product Manager" />
  </div>
  )

}