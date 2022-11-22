import ServiceCard from "./ServiceCard";
import ExpertiseImg from "./UI/ExpertiseImg";

function Expertise() {
  return <div className="ourExpertise">
    <ServiceCard  title='Busines Consulting' icon='fa-address-book' link='/about.html'/>
    <ServiceCard  title='Market Analysis' icon='fa-envelope-open' link='/about.html'/>
    <ExpertiseImg />
  </div>
}

export default Expertise;