  import Expertise from './components/Expertise';
  import OurServices from './components/OurServices';
  import OurTeamSection from './components/team/OurTeamSection';
  import Hero from './components/hero/HeroSection';


  import './App.css'


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
  ];

function App() {
 
  return (
    <div className="App container">
      {/* <OurTeamSection /> */}
      <OurServices/>
      {/* <Expertise />
      <Hero title = "Hero" subtitle = "subtitle" color = "green" /> */}
    </div>
  )
}

export default App
