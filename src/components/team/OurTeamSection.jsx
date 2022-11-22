import SectionTitle from "../UI/SectionTitle";
import TeamList from "./TeamList";

function OurTeamSection() {
  return <div className="ourTeamSection">
    <SectionTitle title="Our Team" subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.' />
    <TeamList />
  </div>;
}

export default OurTeamSection;