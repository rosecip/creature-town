import OutdoorCreatureList from "./OutdoorCreatureList";

const OutdoorCreatures = (props) => {
  return (
    <div>
      <div className="creature-page-head">
        <h1 className="creature-page-header">YOU'VE VENTURED OUTSIDE</h1>
        <p className="creature-page-text">very brave. let's see who beat you to it.</p>
      </div>
      <OutdoorCreatureList />
    </div>
  );
};

export default OutdoorCreatures;
