import Counter from "../components/Counter";

const CounterPage = ({ userName }) => {
  return (
    <div>
      <h2>Sayaç Sayfası</h2>
      <hr />
      <Counter userName={userName} />
    </div>
  );
};

export default CounterPage;
