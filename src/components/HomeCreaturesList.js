import homeCreatureData from "../creatureData/homeCreatureData"
import CreatureTile from "./CreatureTile";

const HomeCreaturesList = (props) => {

 const homeCreatureList = homeCreatureData.map((creature) => {
     return (
      <li key={creature.id}>
        <CreatureTile
          image={creature.image}
          title={creature.title}
          text={creature.text}
        />
      </li>
    );
  })

  return (
    <div>
      <ul>{homeCreatureList}</ul>
    </div>
  );
};

export default HomeCreaturesList