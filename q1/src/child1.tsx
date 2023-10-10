import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Child1 = () => {
  const { id } = useParams();

  useEffect(() => {
    // You can add any code that needs to run when this component mounts.
  }, []);
  const numbers = [5, 2, 8];

  return (
    <div>
      <h2>Child Page {id}</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child1;
