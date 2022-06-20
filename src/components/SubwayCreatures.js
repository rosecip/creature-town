import SubwayCreatureList from "./SubwayCreatureList";

const SubwayCreatures = (props) => {
  return (
    <div>
      <div className="page-head">
        <h1 className="page-header">YOU DECIDED TO TAKE THE TRAIN</h1>
        <p className="page-text">you know you're not the only passenger, right?</p>
      </div>
      <SubwayCreatureList />
    </div>
  );
};

export default SubwayCreatures
