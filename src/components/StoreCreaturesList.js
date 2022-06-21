import storeCreaturesData from "../creatureData/storeCreaturesData"
import CreatureTile from "./CreatureTile"

const StoreCreaturesList = (props) => {

  const storeCreaturesList = storeCreaturesData.map((creature) => {
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
      <ul>{storeCreaturesList}</ul>
    </div>
  )
}

export default StoreCreaturesList