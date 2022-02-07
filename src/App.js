import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">Luis Diasss</h1>
        <h2 className="title">Full Stack Developer</h2>
      </header>

      <main>
        <section>
          <h3 className="title">My Projects</h3>

          <div className="projectCards">
            <div className="card">
              <img
                src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, error quas. Cumque enim a illum illo ut! Optio
                molestiae animi magni nisi eos atque, illo fuga fugiat.
                Obcaecati, tenetur quo?
              </p>
              <a href="https://reactjs.org/">REACT</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
