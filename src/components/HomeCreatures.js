import HomeCreaturesList from "./HomeCreaturesList"

const HomeCreatures = (props) => {
  return (
    <div>
      <div className="page-head">
        <h1 className="page-header">YOU'VE FINALLY MADE IT HOME</h1>
        <p className="page-text">do you live alone?</p>
      </div>
      <HomeCreaturesList />
    </div>
  );
}

export default HomeCreatures