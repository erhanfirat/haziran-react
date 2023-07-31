import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

// Root Component
function App() {
  const PI = 3.1415;
  const divId = "app-container";

  return (
    <div id={divId}>
      <Greeting />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
