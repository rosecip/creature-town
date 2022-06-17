import { Card, CardGroup } from "react-bootstrap";
import oddstare from "../creatureImages/outdoorCreatures/oddstare.jpg";
import oddtrees from "../creatureImages/outdoorCreatures/oddtrees.jpg";
import snowfriends from "../creatureImages/outdoorCreatures/snowfriends.jpg";
import snowfriendsreturned from "../creatureImages/outdoorCreatures/snowfriendsreturned.jpg";
import mushrooms from "../creatureImages/outdoorCreatures/mushrooms.jpg";
import candyexchange from "../creatureImages/outdoorCreatures/candyexchange.jpg";

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
