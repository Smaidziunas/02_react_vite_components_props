import ServiceCard from "./ServiceCard";

function ServicesGrid() {
  return <div className="grid">
    <ServiceCard  title='Busines Consulting' icon='fa-address-book' link='/about.html'/>
    <ServiceCard  title='Market Analysis' icon='fa-envelope-open' link='/about.html'/>
    <ServiceCard  title='User Monitoring' icon='fa-meetup' link='/about.html'/>
    <ServiceCard  title='Busines Consulting' icon='fa-address-book' link='/about.html'/>
    <ServiceCard  title='Market Analysis' icon='fa-envelope-open' link='/about.html'/>
    <ServiceCard  title='User Monitoring' icon='fa-meetup' link='/about.html'/>
  </div>
}

export default ServicesGrid;