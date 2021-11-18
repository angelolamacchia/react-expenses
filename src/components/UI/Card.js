import "./Card.css";

export function Card(props) {

  const cssCard = 'my_card ' + props.className;
  // console.log(cssCard)

  return <div className={cssCard}>{props.children}</div>;
}
