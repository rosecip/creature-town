import { Card, CardGroup } from "react-bootstrap";

const CreatureTile = (props) => {
  return (
    <CardGroup style={{ display: "flex", flexDirection: "row" }}>
      <Card style={{ width: "300px" }}>
        <Card.Img varient="top" src={props.image} className="image"></Card.Img>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CreatureTile;
