  import Expertise from './components/Expertise';
  import OurServices from './components/OurServices';
  import OurTeamSection from './components/team/OurTeamSection';
  import Hero from './components/hero/HeroSection';

  import './App.css'
  



function App() {
 
  return (
    <div className="App container">
      <OurTeamSection />
      <OurServices />
      <Expertise />
      <Hero title = "Hero" subtitle = "subtitle" color = "green" />
    </div>
  )
}

export default App
