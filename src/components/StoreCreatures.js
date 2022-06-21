import StoreCreaturesList from "./StoreCreaturesList";

const StoreCreatures = (props) => {
  return (
    <div>
      <div className="page-head">
        <h1 className="page-header">YOU'RE OUT ON THE TOWN</h1>
        <p className="page-text"></p>
      </div>
      <StoreCreaturesList />
    </div>
  );
};

export default StoreCreatures;
