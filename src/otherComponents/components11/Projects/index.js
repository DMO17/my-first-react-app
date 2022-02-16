import { Card } from "../Card";
import "./Projects.css";

export const Projects = ({ cardsInfo }) => {
  return (
    <section>
      <h3 className="title">My Projects</h3>

      <div className="projectCards">
        {cardsInfo.map((each) => {
          return (
            <Card imageUrl={each.imageUrl} description={each.description} />
          );
        })}
      </div>
    </section>
  );
};
