import "./App.css";
import ContextProviders from "./contexts/ContextProviders";
import Router from "./components/helpers/Router";

function App() {
  return (
    <div className="App">
      <ContextProviders>
        <Router />
      </ContextProviders>
    </div>
  );
}

export default App;
