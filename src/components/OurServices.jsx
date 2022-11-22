 
  import SectionTitle from "./UI/SectionTitle.jsx";
  import ServicesGrid from "./ServicesGrid.jsx";


 
 function OurServices() {
    return (
      <div className="servicesSection">
      <SectionTitle title='musu paslaugos' size='large' />
      <ServicesGrid />
      {/* <SectionTitle title='about us' />
      <Grid /> */}
    </div>
    )

  }

  export default OurServices;