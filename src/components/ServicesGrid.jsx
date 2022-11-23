import ServiceCard from './ServiceCard';

{
  //  <ServiceCard title={cardsArr[0].title} icon={cardsArr[0].icon} link={cardsArr[0].link} /> 
}

function ServicesGrid(props) {
  return (
    <div className='grid'>
      {props.data.map((obj) => <ServiceCard
          key={obj.id}
          title={obj.title}
          icon={obj.icon}
          link={obj.link}
        />
      )}
    </div>);
}
export default ServicesGrid;
