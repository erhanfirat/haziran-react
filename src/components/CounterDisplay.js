import "./CounterDisplay.css";

const CounterDisplay = ({ sayac, arttir, azalt, userName }) => {
  /**
   * props = {
   *  sayac: val,
   *  arttir: () => {},
   *  azalt: () => {}
   * }
   */

  // const { sayac, arttir, azalt } = props;

  return (
    <div className="counter-display">
      <h4>counter display > userName: {userName}</h4>
      <h3>Counter: {sayac}</h3>
      <button onClick={arttir}> + Arttır</button>
      <button onClick={azalt}> - Azalt</button>
    </div>
  );
};

export default CounterDisplay;

// Object | Array Destructuring
