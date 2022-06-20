import OutdoorCreatureList from "./OutdoorCreatureList";

const OutdoorCreatures = (props) => {
  return (
    <div>
      <div className="page-head">
        <h1 className="page-header">YOU'VE VENTURED OUTSIDE</h1>
        <p className="page-text">very brave. let's see who beat you to it.</p>
      </div>
      <OutdoorCreatureList />
    </div>
  );
};

export default OutdoorCreatures;
