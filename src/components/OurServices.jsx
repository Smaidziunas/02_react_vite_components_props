  import Icon from "./UI/Icon.jsx";
  import SectionTitle from "./UI/SectionTitle.jsx";


  function Grid() {
    return <div className="grid">
      <ServiceCard  title='Busines Consulting' icon='fa-address-book' link='/about.html'/>
      <ServiceCard  title='Market Analysis' icon='fa-envelope-open' link='/about.html'/>
      <ServiceCard  title='User Monitoring' icon='fa-meetup' link='/about.html'/>
      <ServiceCard  title='Busines Consulting' icon='fa-address-book' link='/about.html'/>
      <ServiceCard  title='Market Analysis' icon='fa-envelope-open' link='/about.html'/>
      <ServiceCard  title='User Monitoring' icon='fa-meetup' link='/about.html'/>
    </div>
  }

  function ServiceCard(props) {
    return <div className="card">
      <Icon iconName = {props.icon} />
      <h3>{props.title}</h3>
      <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veritatis ullam aut possimus sed similique modi aliquam. Sint, maxime accusantium!</p>
      <a href={props.link} className="card__link">Learn More</a>

    </div>
  }
 
 function OurServices() {
    return (
          <div className="servicesSection">
     
      <SectionTitle title='musu paslaugos' size='large' />
      <Grid />
      {/* <SectionTitle title='about us' />
      <Grid /> */}
    </div>
    )

  }

  export default OurServices;