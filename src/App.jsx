  import Expertise from './components/Expertise';
  import OurServices from './components/OurServices';
  import OurTeamSection from './components/team/OurTeamSection';

  import './App.css'
  



function App() {
 
  return (
    <div className="App container">
      <OurTeamSection />
      <OurServices />
      <Expertise />
    </div>
  )
}

export default App
