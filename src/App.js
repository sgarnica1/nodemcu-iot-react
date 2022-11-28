import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { Home } from "./views/Home/Home";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard>
        <Header />
        <Home />
      </Dashboard>
    </div>
  );
}

export default App;
