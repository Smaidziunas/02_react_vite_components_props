import TeamMember from "./TeamMember";

export default function TeamList(props) {
  return (
  <div className="team_grid">
    <TeamMember img="src/assets/person_1.jpg" Name= "Kaiara Spencer" position= "Product Manager" />
    <TeamMember img="src/assets/person_2.jpg" Name= "Dave Simpson" position= "Product Manager" />
    <TeamMember img="src/assets/person_3.jpg" Name= "Ben Thompson" position= "Product Manager" />
    <TeamMember img="src/assets/person_4.jpg" Name= "Ben Thompson" position= "Product Manager" />
  </div>
  )

}