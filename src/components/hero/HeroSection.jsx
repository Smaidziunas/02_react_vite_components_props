import './hero.css';

function Hero(props) {
// return <div className="container" id={`hero_${props.color}`}>
return <div className="container" style= {{backgroundColor: `${props.color}`}}>
  <h1>{props.title}</h1>
  <h2>{props.subtitle}</h2>
</div>
}


export default Hero;