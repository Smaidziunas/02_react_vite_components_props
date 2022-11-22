import Icon from "./UI/Icon";

function ServiceCard(props) {
  return <div className="card">
    <Icon iconName = {props.icon} />
    <h3>{props.title}</h3>
    <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veritatis ullam aut possimus sed similique modi aliquam. Sint, maxime accusantium!</p>
    <a href={props.link} className="card__link">Learn More</a>

  </div>
}

export default ServiceCard;