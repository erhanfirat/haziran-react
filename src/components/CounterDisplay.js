import { Button } from "reactstrap";

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
    <div className="d-flex flex-column align-items-center border rounded p-2 my-3 mx-0">
      <h4>counter display > userName: {userName}</h4>
      <h3>Counter: {sayac}</h3>
      <Button className="ozel-renk me-2" onClick={azalt}>
        {" "}
        - Azalt
      </Button>
      <Button color="success" onClick={arttir}>
        {" "}
        + Arttır
      </Button>
    </div>
  );
};

export default CounterDisplay;

// Object | Array Destructuring
