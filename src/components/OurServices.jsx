 
  import SectionTitle from "./UI/SectionTitle.jsx";
  import ServicesGrid from "./ServicesGrid.jsx";

  const cardsArr = [
    {
      id: 1,
      title: 'Business Consulting',
      icon: 'fa-address-book',
      link: '/about.html',
    }, // 0
    {
      id: 2,
      title: 'Market Analysis',
      icon: 'fa-envelope-open',
      link: '/home.html',
    }, // 1
    {
      id: 3,
      title: 'User Monitoring',
      icon: 'fa-eercast',
      link: '/contact.html',
    }, // 2
    { id: 4, title: 'Facebook', icon: 'fa-facebook', link: '/fb.html' }, // 2
  ]

 function OurServices() {
    return (
      <div className="servicesSection">
      <SectionTitle title='musu paslaugos' size='large' />
      <ServicesGrid data= {cardsArr} />
      {/* <SectionTitle title='about us' />
      <Grid /> */}
    </div>
    )

  }

  export default OurServices;