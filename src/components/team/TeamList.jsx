import TeamMember from "./TeamMember";

const teamsArr = [{
  img: "public/img/person_1.jpg",
  name: "Kaiara Spencer",
  occupation: "Product Manager"
},
{
img: "public/img/person_2.jpg",
name: "Dave Simpson",
occupation: "Product Manager"},
{
img: "public/img/person_3.jpg",
name: "Ben Thompson",
occupation: "Product Manager"},
{
img: "public/img/person_4.jpg",
name: "Ben Thompson",
occupation: "Product Manager"}
]

export default function TeamList(props) {
  return (
  <div className="team_grid">
    <TeamMember img= {teamsArr[0].img} name= {teamsArr[0].name} occupation= {teamsArr[0].occupation}/>
    <TeamMember img= {teamsArr[1].img} name= {teamsArr[1].name} occupation= {teamsArr[1].occupation} />
    <TeamMember img= {teamsArr[2].img} name= {teamsArr[2].name} occupation= {teamsArr[2].occupation} />
    <TeamMember img= {teamsArr[3].img} name= {teamsArr[3].name} occupation= {teamsArr[3].occupation} />
  </div>
  )

}