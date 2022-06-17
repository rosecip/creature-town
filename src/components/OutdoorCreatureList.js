import outdoorCreatureData from "../creatureData/outdoorCreatureData.js";
import CreatureTile from "../components/CreatureTile";

const OutdoorCreatureList = (props) => {

  let outdoorCreatureList = outdoorCreatureData.map((creature) => {
    return (
      <li key={creature.id}>
        <CreatureTile
          image={creature.image}
          title={creature.title}
          text={creature.text}
        />
      </li>
    );
  });

  return (
    <div>
      <ul>
      {outdoorCreatureList}
      </ul>
    </div>
  )
};

export default OutdoorCreatureList;
