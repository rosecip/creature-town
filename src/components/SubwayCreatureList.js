import subwayCreatureData from "../creatureData/subwayCreatureData";
import CreatureTile from "./CreatureTile";

const SubwayCreatureList = (props) => {
  
  const subwayCreatureList = subwayCreatureData.map((creature) => {
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
      <ul>{subwayCreatureList}</ul>
    </div>
  );
};

export default SubwayCreatureList;
