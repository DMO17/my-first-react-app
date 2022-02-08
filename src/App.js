import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const cardsInfo = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
  },
];

function App() {
  return (
    <div>
      <main>
        <Header title="Luis Diasss" subtitle="Full stack web developer" />
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
      </main>
    </div>
  );
}

export default App;
